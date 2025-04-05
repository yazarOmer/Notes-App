import { BiSearch } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { LuSettings, LuTag } from "react-icons/lu";
import { TbFileDownload } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { MobileNavItem } from "./mobile-nav-item";

export const MobileNavbar = () => {
    const navLinks = [
        {
            id: 1,
            href: "/",
            label: "Home",
            icon: <HiOutlineHome size={24} />,
        },
        {
            id: 2,
            href: "/search",
            label: "Search",
            icon: <BiSearch size={24} />,
        },
        {
            id: 3,
            href: "/archived",
            label: "Archived",
            icon: <TbFileDownload size={24} />,
        },
        {
            id: 4,
            href: "/tags",
            label: "Tags",
            icon: <LuTag size={24} />,
        },
        {
            id: 5,
            href: "/settings",
            label: "Settings",
            icon: <LuSettings size={24} />,
        },
    ];

    return (
        <div className="grid grid-cols-5 px-4 md:px-8 py-3 fixed bottom-0 left-0 right-0 h-14 md:h-[74px] border-t border-neutral-200 bg-white">
            {navLinks.map((item, index) => (
                <div
                    key={item.id}
                    className={twMerge(
                        "flex items-center justify-center md:border-r border-neutral-100",
                        index == navLinks.length - 1 && "border-none"
                    )}
                >
                    <MobileNavItem item={item} />
                </div>
            ))}
        </div>
    );
};
