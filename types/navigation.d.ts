
type NavigationItem = {
  path?: string | Url;
  label: string;
  target?: string;
  expandable?: boolean;
  wip?: boolean;
  items?: NavigationItem[];
  deprecated?: boolean;
}

type NavigationGroup = {
  title?: string;
  items: NavigationItem[];
}

type Navigation = NavigationGroup[]
