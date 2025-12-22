export type Project = {
  slug: string;
  title: string;
  description: string;
  period: string;
  stacks: string[];
  isLarge?: boolean;
  backgroundImage?: string;
  teamMembers?: string;
  contribution?: {
    percentage: string;
    tags: string[];
  };
  introduction?: string;
  video?: string;
  images?: string[];
};
