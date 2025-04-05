import { DesktopNavbar } from "@/components/desktop-navbar";
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
            {children}
        </div>
    );
};

export default ProtectedLayout;
