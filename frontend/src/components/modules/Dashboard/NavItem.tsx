import { getIcon } from "@/helpers/constants/icons";
import { NavItemProp } from "@/helpers/types/modules/dashboard";
import Link from "next/link";

const NavItem: React.FC<NavItemProp> = ({ href, label, currentPath, setActiveLabel }) => {
    const isActive = href === currentPath;
    const Icon = getIcon(label);
    if (isActive) {
        setActiveLabel(label);
      }
    return (
      <Link href={href} passHref>
        <div className={`flex flex-row p-4 mb-2 gap-2 text-black ${isActive ? "cocoa_yellow" : ""}`}>
          {Icon && <Icon className="mt-3 inline-block  " fill={isActive ? "cocoa_yellow" : "text-black"} />}
          {label}
        </div>
      </Link>
    );
  };
export default NavItem;
