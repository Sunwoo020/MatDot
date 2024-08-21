import { mainNavigationList } from "..";

export interface mainNavigationListProps<T extends mainNavigationList> {
  title: string;
  icon: T;
}
