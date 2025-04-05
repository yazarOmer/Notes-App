import { Input } from "./ui/input";
import { IoSettingsOutline } from "react-icons/io5";

interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <div className="flex items-center justify-between w-full lg:h-20 lg:px-8 lg:border-b border-neutral-200">
            <h1 className="text-neutral-950 text-2xl font-bold">{title}</h1>
            <div className="hidden lg:flex items-center gap-4">
                <Input
                    placeholder="Search by title, content, or tags..."
                    className="w-[300px] h-11"
                />
                <IoSettingsOutline size={24} className="text-neutral-500" />
            </div>
        </div>
    );
};
