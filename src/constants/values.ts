export interface ValueItem {
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  body: string;
  period?: string;
  techStack?: string[];
}

export const VALUES: ValueItem[] = [
  {
    slug: "growth",
    title: "Growth",
    description: "주도적인 성장",
    heroImage: "/images/profile.jpg",
    body: "저는 지속적인 학습과 자기계발을 통해 주도적으로 성장하는 것을 중요하게 생각합니다. 새로운 기술과 도구를 배우고, 프로젝트를 통해 실전 경험을 쌓으며, 피드백을 적극적으로 수용하여 개선해 나갑니다. 단순히 지식을 쌓는 것이 아니라, 그것을 실제로 적용하고 문제를 해결하는 과정에서 진정한 성장이 이루어진다고 믿습니다.",
  },
  {
    slug: "challenge",
    title: "Challenge",
    description: "끊임없는 도전",
    heroImage: "/images/profile.jpg",
    body: "저는 새로운 도전을 두려워하지 않고, 오히려 그것을 성장의 기회로 삼습니다. 어려운 문제를 만났을 때 포기하지 않고, 다양한 접근 방식을 시도하며 해결책을 찾아갑니다. 실패를 두려워하지 않고, 실패에서 배우는 자세로 끊임없이 도전합니다. 이러한 도전 정신이 제가 더 나은 개발자로 성장할 수 있게 해주는 원동력입니다.",
  },
  {
    slug: "detail",
    title: "Detail",
    description: "완성도와 세심함",
    heroImage: "/images/profile.jpg",
    body: "디테일에 대한 집착은 제가 가진 가장 큰 강점 중 하나입니다. 코드의 가독성, 사용자 경험의 세부사항, 성능 최적화 등 모든 부분에서 완성도를 높이기 위해 노력합니다. 작은 버그 하나도 놓치지 않고, 사용자가 느낄 수 있는 미세한 개선점까지 신경 쓰는 것이 제 개발 철학입니다. 이러한 세심함이 결국 더 나은 제품을 만들어낸다고 믿습니다.",
  },
];
