import { Header } from "@/components/header";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full">
            <Header title="Settings" />
            <div className="lg:mt-20 lg:flex h-full">{children}</div>
        </div>
    );
};

export default SettingsLayout;
