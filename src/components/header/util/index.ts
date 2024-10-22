import { mainNavigationListProps } from "./mainNavigationList/interface";
import { mainNavigationList } from "./mainNavigationList";

export interface MenuItemProps {
  item: mainNavigationListProps;
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}
