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
        <NavHeader />
        <div className="p-5">
          <NavItem
            href="/dashboard"
            label="Dashboard"
            currentPath={router.pathname}
            setActiveLabel={setActiveLabel}
          />
          <NavItem
            href="/dashboard/users"
            label="Users"
            currentPath={router.pathname}
            setActiveLabel={setActiveLabel}
          />
          <NavItem
            href="/dashboard/history"
            label="Destination History"
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
  );
}
