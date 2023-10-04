import NavHeader from "@/components/modules/Dashboard/NavHeader";
import NavItem from "@/components/modules/Dashboard/NavItem";
import { useRouter } from "next/router";

export default function AdminSideNav({
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
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <div style={{ flexShrink: 0 }}>
            <NavHeader />
          </div>
          <div className="p-5 no-scrollbar" style={{ flexGrow: 1, overflowY: "auto" }}>
            <NavItem
              href="/admin"
              label="Dashboard"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            />
            {/* <NavItem
              href="/dashboard/users"
              label="Users"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            /> */}
            {/* <NavItem
              href="/dashboard/history"
              label="Destination History"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            /> */}
            <NavItem
              href="/admin/destinations"
              label="Destinations"
              currentPath={router.pathname}
              setActiveLabel={setActiveLabel}
            />
            {/* <NavItem
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
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
