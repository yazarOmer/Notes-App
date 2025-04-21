const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full">
            <div className="lg:flex h-full">{children}</div>
        </div>
    );
};

export default SettingsLayout;
