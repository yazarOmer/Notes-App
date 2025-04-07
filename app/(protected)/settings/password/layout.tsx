import { SettingsNavbar } from "@/components/settings-navbar";

const PasswordPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="hidden lg:block w-[258px]">
                <SettingsNavbar />
            </div>
            {children}
        </>
    );
};

export default PasswordPageLayout;
