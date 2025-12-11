import * as React from "react";
import { motion } from "motion/react";
import type { HighlightProps } from "./highlight.types";
import { DEFAULT_TRANSITION } from "./highlight.constants";
import type { HighlightStyle } from "./highlight.types";
import { DEFAULT_STYLE } from "./highlight.constants";

const noop = () => {};

const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

const Highlight = React.forwardRef<HTMLDivElement, HighlightProps>(function Highlight(
  {
    children,
    value,
    defaultValue = null,
    onValueChange = noop,
    hover = false,
    click = true,
    disabled = false,
    mode = "children",
    exitDelay = 200,
    className,
    wrapperClassName,
    containerClassName,
    itemsClassName,
    transition = DEFAULT_TRANSITION,
    ...props
  },
  ref,
) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const setRefs = React.useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [ref],
  );
  const [internalValue, setInternalValue] = React.useState<string | null>(defaultValue);
  const [hoverValue, setHoverValue] = React.useState<string | null>(null);
  const resolvedValue = value ?? internalValue;
  const highlightValue = hover && hoverValue !== null ? hoverValue : resolvedValue;

  const [highlightStyle, setHighlightStyle] =
    React.useState<HighlightStyle>(DEFAULT_STYLE);
  const exitTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const highlightId = React.useId();

  const clearExitTimeout = React.useCallback(() => {
    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
      exitTimeoutRef.current = null;
    }
  }, []);

  const updateHighlight = React.useCallback(
    (nextValue: string | null) => {
      if (mode !== "parent" || !containerRef.current || !nextValue) {
        setHighlightStyle((previous) => ({ ...previous, opacity: 0 }));
        return;
      }
      const selectorValue = nextValue.replace(/["\\]/g, "\\$&");
      const target = containerRef.current.querySelector<HTMLElement>(
        `[data-highlight-value="${selectorValue}"]`,
      );
      if (!target) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      setHighlightStyle({
        width: targetRect.width,
        height: targetRect.height,
        x: targetRect.left - containerRect.left,
        y: targetRect.top - containerRect.top,
        opacity: disabled ? 0 : 1,
      });
    },
    [disabled, mode],
  );

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  React.useLayoutEffect(() => {
    if (mode !== "parent") return;
    updateHighlight(highlightValue ?? defaultValue);
  }, [children, highlightValue, defaultValue, updateHighlight, mode]);

  React.useEffect(() => {
    if (mode !== "parent") return;
    const handleResize = () => {
      updateHighlight(highlightValue ?? null);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [highlightValue, updateHighlight, mode]);

  const selectValue = React.useCallback(
    (nextValue: string) => {
      if (disabled) return;
      clearExitTimeout();
      setHoverValue(null);
      if (value === undefined) {
        setInternalValue(nextValue);
      }
      onValueChange(nextValue);
    },
    [clearExitTimeout, disabled, onValueChange, value],
  );

  const handleExit = React.useCallback(() => {
    if (exitDelay <= 0) {
      setHoverValue(null);
      return;
    }
    clearExitTimeout();
    exitTimeoutRef.current = setTimeout(() => {
      setHoverValue(null);
    }, exitDelay);
  }, [clearExitTimeout, exitDelay]);

  const items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    const rawValue =
      (child.props as Record<string, unknown>)?.["data-value"] ??
      child.key ??
      `highlight-item-${index}`;
    const itemValue = String(rawValue);

    const childProps = child.props as {
      onClick?: React.MouseEventHandler<HTMLElement>;
      onMouseEnter?: React.MouseEventHandler<HTMLElement>;
      onMouseLeave?: React.MouseEventHandler<HTMLElement>;
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      childProps?.onClick?.(event);
      if (!click) return;
      selectValue(itemValue);
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
      childProps?.onMouseEnter?.(event);
      if (!hover) return;
      clearExitTimeout();
      setHoverValue(itemValue);
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
      childProps?.onMouseLeave?.(event);
      if (hover) {
        handleExit();
      }
    };

    const wrapperProps = {
      "data-active": resolvedValue === itemValue,
      "data-highlight-value": itemValue,
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: cn("relative", itemsClassName),
    };

    const element = child as React.ReactElement<{ className?: string }>;
    const content = React.cloneElement(element, {
      className: cn("relative z-10", element.props.className),
    });

    if (mode === "children") {
      return (
        <div key={itemValue} {...wrapperProps}>
          {highlightValue === itemValue && (
            <motion.div
              layoutId={`highlight-${highlightId}`}
              aria-hidden
              className={cn("absolute inset-0 rounded-full -z-10", className)}
              style={{ zIndex: -1 }}
              transition={transition}
            />
          )}
          {content}
        </div>
      );
    }

    return (
      <div key={itemValue} {...wrapperProps}>
        {content}
      </div>
    );
  });

  return (
    <div
      ref={setRefs}
      className={cn(
        "relative",
        mode === "parent" ? undefined : "inline-flex",
        wrapperClassName,
      )}
      onMouseLeave={hover ? handleExit : undefined}
      {...props}
    >
      {mode === "parent" && (
        <motion.div
          aria-hidden
          className={cn("pointer-events-none absolute z-0", className)}
          animate={highlightStyle}
          transition={transition}
          style={{
            borderRadius: "999px",
            zIndex: 0,
          }}
        />
      )}
      <div
        className={cn(
          "relative flex",
          mode === "parent" ? undefined : "gap-1",
          containerClassName,
        )}
      >
        {items}
      </div>
    </div>
  );
});

export { Highlight, type HighlightProps };
