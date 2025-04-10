import Image from "next/image";
import logo from "@/public/logo.svg";

export const Logo = () => {
    return (
        <div className="flex items-center gap-2.5">
            <Image src={logo} alt="Logo" width={28} height={28} />
            <h2 className="font-pacifico text-[23px] text-black dark:text-white">
                Notes
            </h2>
        </div>
    );
};
