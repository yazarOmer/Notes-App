import { DesktopNavbar } from "@/components/desktop-navbar";
import { MobileBackground } from "@/components/mobile-background";
import { MobileNavbar } from "@/components/mobile-navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white flex">
            <div className="hidden lg:block">
                <DesktopNavbar />
            </div>

            <div className="block lg:hidden">
                <MobileNavbar />
            </div>

            <MobileBackground />

            <div className="bg-white flex-1 mt-12 md:mt-16 z-10 lg:mt-0 rounded-t-lg md:rounded-t-2xl lg:rounded-none px-4 py-5 md:px-8 md:py-6 lg:p-0">
                {children}
            </div>
        </div>
    );
};

export default ProtectedLayout;
