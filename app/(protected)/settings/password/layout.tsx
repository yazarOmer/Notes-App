import { SettingsNavbar } from "@/components/settings-navbar";

const PasswordPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:flex h-full">
            <div className="hidden lg:block w-[258px]">
                <SettingsNavbar />
            </div>
            {children}
        </div>
    );
};

export default PasswordPageLayout;
