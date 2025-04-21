import { DesktopNavbar } from "@/components/desktop-navbar";
import { Header } from "@/components/header";
import { MobileBackground } from "@/components/mobile-background";
import { MobileNavbar } from "@/components/mobile-navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 flex">
            <DesktopNavbar />

            <MobileNavbar />

            <MobileBackground />

            <div className="bg-white dark:bg-neutral-950 mt-12 md:mt-16 z-10 lg:mt-0 rounded-t-lg md:rounded-t-2xl lg:rounded-none px-4 py-5 md:px-8 md:py-6 lg:p-0 w-full  lg:ml-[272px] lg:h-full fixed flex flex-col">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default ProtectedLayout;
