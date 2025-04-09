"use client";
import { HiOutlineHome } from "react-icons/hi";
import { Logo } from "./logo";
import { TbFileDownload } from "react-icons/tb";
import { Seperator } from "./ui/seperator";
import { DesktopNavItem } from "./desktop-nav-item";
import { useTags } from "@/hooks/use-tags";
import { NavTagItem } from "./nav-tag-item";

export const DesktopNavbar = () => {
    const { data: tags, isLoading } = useTags();
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
        <div className="hidden w-[272px] h-screen bg-white lg:flex flex-col fixed left-0 top-0 px-4 py-3 gap-4 border-r border-neutral-200">
            <div className="py-3">
                <Logo />
            </div>

            <div className="flex flex-col gap-1">
                {navLinks.map((item) => (
                    <DesktopNavItem key={item.id} item={item} />
                ))}

                <Seperator className="mt-2" />
            </div>

            <h3 className="text-sm text-neutral-500 tracking-3 font-inter">
                Tags
            </h3>

            <div className="flex flex-col gap-1">
                {isLoading ? (
                    <>
                        <div className="w-full h-10 rounded-lg bg-[#F9F9F9] animate-pulse" />
                        <div className="w-full h-10 rounded-lg bg-[#F9F9F9] animate-pulse" />
                        <div className="w-full h-10 rounded-lg bg-[#F9F9F9] animate-pulse" />
                    </>
                ) : (
                    tags?.map((tag) => <NavTagItem tag={tag} key={tag.id} />)
                )}
            </div>
        </div>
    );
};
