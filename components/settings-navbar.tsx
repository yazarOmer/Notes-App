"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { RiFontSize2 } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { Seperator } from "./ui/seperator";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { twMerge } from "tailwind-merge";

export const SettingsNavbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const onSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    };

    const links = [
        {
            id: 1,
            label: "Color Theme",
            href: "/settings/color",
            icon: <IoSunnyOutline size={20} />,
        },
        {
            id: 2,
            label: "Font Theme",
            href: "/settings/font",
            icon: <RiFontSize2 size={20} />,
        },
        {
            id: 3,
            label: "Change Password",
            href: "/settings/password",
            icon: <CiLock size={20} />,
        },
    ];

    return (
        <div className="lg:border-r border-neutral-200 dark:border-neutral-800 lg:max-w-[258px] h-full flex flex-1 flex-col gap-2 lg:pl-8 lg:pr-4 lg:py-5 p-0 mt-4 lg:mt-0">
            {links.map((item) => (
                <Link
                    key={item.id}
                    href={item.href}
                    className={twMerge(
                        "w-full p-2 flex items-center justify-between hover:bg-neutral-100 hover:dark:bg-neutral-800 transition rounded-md text-neutral-950",
                        pathname === item.href &&
                            "bg-neutral-100 dark:bg-neutral-800"
                    )}
                >
                    <div className="flex items-center gap-2 text-sm dark:text-white">
                        <span
                            className={twMerge(
                                "",
                                pathname === item.href && "text-blue-500"
                            )}
                        >
                            {item.icon}
                        </span>
                        {item.label}
                    </div>
                    {pathname === item.href && (
                        <FaChevronRight className="text-white" size={12} />
                    )}
                </Link>
            ))}

            <Seperator />

            <button
                onClick={onSignOut}
                className="w-full p-2 flex items-center gap-2 bg-white dark:bg-transparent hover:bg-neutral-100 hover:dark:bg-neutral-800 rounded-md text-neutral-950 dark:text-white transition cursor-pointer text-sm"
            >
                <FiLogOut size={16} />
                Logout
            </button>
        </div>
    );
};
