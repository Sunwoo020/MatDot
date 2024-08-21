import { subNavigationList } from "..";

export interface subNavigationListProps<T extends subNavigationList> {
  title: string;
  icon: T;
  path: string;
}
