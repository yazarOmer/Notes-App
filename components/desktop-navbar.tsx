import { HiOutlineHome } from "react-icons/hi";
import { Logo } from "./logo";
import { TbFileDownload } from "react-icons/tb";
import { Seperator } from "./ui/seperator";
import { DesktopNavItem } from "./desktop-nav-item";

export const DesktopNavbar = () => {
    const navLinks = [
        {
            id: 1,
            label: "All notes",
            href: "/notes",
            icon: <HiOutlineHome size={20} />,
        },
        {
            id: 2,
            label: "Archived Notes",
            href: "/archived",
            icon: <TbFileDownload size={20} />,
        },
    ];

    return (
        <div className="w-[272px] h-screen flex flex-col px-4 py-3 gap-4 border-r border-neutral-200">
            <div className="py-3">
                <Logo />
            </div>

            <div className="flex flex-col gap-1">
                {navLinks.map((item) => (
                    <DesktopNavItem key={item.id} item={item} />
                ))}

                <Seperator className="mt-2" />
            </div>
        </div>
    );
};
