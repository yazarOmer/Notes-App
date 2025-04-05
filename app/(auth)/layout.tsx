const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center min-h-screen px-4 md:px-0 bg-neutral-100">
            {children}
        </div>
    );
};

export default AuthLayout;
