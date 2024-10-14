import { subNavigationListProps } from "./interface";

export type subNavigationList = "요즘 뜨는 맛집" | "지역별 맛집" | "내 맛집";

export const SubheaderItems: subNavigationListProps<subNavigationList>[] = [
  { title: "요즘 뜨는 맛집", icon: "요즘 뜨는 맛집", path: "/popular" },
  { title: "지역별 맛집", icon: "지역별 맛집", path: "/region" },
  { title: "내 맛집", icon: "내 맛집", path: "/my" },
];

export * from ".";
