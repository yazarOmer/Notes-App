import { DesktopNavbar } from "@/components/desktop-navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white flex">
            <div className="hidden lg:block">
                <DesktopNavbar />
            </div>
            {children}
        </div>
    );
};

export default ProtectedLayout;
