export type NavItemProp = {
  href: string;
  label: string;
  currentPath: string;
  Icon?: React.FC<{ fill?: string; className?: string }>;
  setActiveLabel: (label: string) => void;
}
