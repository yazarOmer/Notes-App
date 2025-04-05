import { Logo } from "./logo";

export const MobileBackground = () => {
    return (
        <div className="bg-neutral-100 flex items-center px-4 md:px-8 md:py-4 py-3 lg:hidden w-full h-[54px] md:h-[74px] fixed top-0">
            <div className="-mt-1">
                <Logo />
            </div>
        </div>
    );
};
