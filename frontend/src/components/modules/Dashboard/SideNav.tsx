import { useRouter } from "next/router";
import NavItem from "./NavItem";
import { HomeIcon, PoolsIcon } from "./../../../../public/svgs/icons";
import NavHeader from "./NavHeader";

export default function SideNav({
  setActiveLabel,
}: {
  setActiveLabel: (label: string) => void;
}) {
  const router = useRouter();

  return (
    <div className="w-64  bg-white  shadow-md relative overflow-hidden">
      <div className="fixed w-64 h-full overflow-y-auto no-scrollbar">
        {" "}
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <div style={{ flexShrink: 0 }}>
            <NavHeader />
          </div>
          <div
            className="p-5 no-scrollbar"
            style={{ flexGrow: 1, overflowY: "auto" }}
          >
            <NavItem
              href="/dashboard"
              label="Dashboard"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            />
            <NavItem
              href="/dashboard/pools"
              label="Pools"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            />
            <NavItem
              href="/dashboard/history"
              label="Trip History"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            />
            <NavItem
              href="/destinations"
              label="Destinations"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            />
            <NavItem
              href="/explore"
              label="Explore / Blog"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            />
            <NavItem
              href="/dashboard/wallet"
              label="Wallet"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
