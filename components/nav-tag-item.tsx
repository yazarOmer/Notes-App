import { Tag } from "@prisma/client";
import Link from "next/link";
import { TbTag } from "react-icons/tb";

interface NavTagItemProps {
    tag: Tag;
}

export const NavTagItem = ({ tag }: NavTagItemProps) => {
    return (
        <Link
            href={`/notes?t=${tag.name}`}
            key={tag.id}
            className="w-full px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-[#F9F9F9] hover:dark:bg-neutral-800"
        >
            <TbTag className="text-neutral-700 dark:text-neutral-200 size-5" />
            <span className="text-neutral-700 dark:text-neutral-200 text-sm">
                {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
            </span>
        </Link>
    );
};
