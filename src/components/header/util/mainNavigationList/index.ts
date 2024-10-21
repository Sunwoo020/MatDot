import { mainNavigationListProps } from "./interface";
export type mainNavigationList = "맛집" | "추천" | "리스트";
export const MainHeaderItems: mainNavigationListProps<mainNavigationList>[] = [
  { title: "맛집", icon: "맛집" },
  { title: "추천", icon: "추천" },
  { title: "리스트", icon: "리스트" },
] as const;

export type MainHeaderItem = (typeof MainHeaderItems)[number];

export * from ".";
