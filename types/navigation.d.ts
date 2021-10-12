import { IconNames } from '@wonderflow/react-components/icons/types'

export type NavigationItem = {
  path?: string | Url;
  label: string;
  target?: string;
  expandable?: boolean;
  wip?: boolean;
  items?: NavigationItem[];
  deprecated?: boolean;
}

export type NavigationGroup = {
  title?: string;
  color?: string;
  icon?: IconNames;
  items: NavigationItem[];
}

export type NavigationMenu = NavigationGroup[]
