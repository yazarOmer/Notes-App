import { DesktopNavbar } from "@/components/desktop-navbar";
import { MobileBackground } from "@/components/mobile-background";
import { MobileNavbar } from "@/components/mobile-navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 flex">
            <DesktopNavbar />

            <MobileNavbar />

            <MobileBackground />

            <div className="bg-white dark:bg-neutral-950 mt-12 md:mt-16 z-10 lg:mt-0 rounded-t-lg md:rounded-t-2xl lg:rounded-none px-4 py-5 md:px-8 md:py-6 lg:p-0 w-full lg:w-[calc(100%-272px)] lg:ml-[272px] lg:h-[calc(100%-80px)] fixed">
                {children}
            </div>
        </div>
    );
};

export default ProtectedLayout;
