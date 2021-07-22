
type NavigationItem = {
  path?: string | Url;
  label: string;
  target?: string;
  expandable?: boolean;
  items?: NavigationItem[];
}

type NavigationGroup = {
  title?: string;
  items: NavigationItem[];
}

type Navigation = NavigationGroup[]
