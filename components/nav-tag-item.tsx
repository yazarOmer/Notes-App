import { Tag } from "@prisma/client";
import Link from "next/link";
import { TbTag } from "react-icons/tb";

interface NavTagItemProps {
    tag: Tag;
}

export const NavTagItem = ({ tag }: NavTagItemProps) => {
    return (
        <Link
            href={`/notes?tag=${tag.id}`}
            key={tag.id}
            className="w-full px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-[#F9F9F9]"
        >
            <TbTag className="text-neutral-700 size-5" />
            <span className="text-neutral-700 text-sm">
                {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
            </span>
        </Link>
    );
};
