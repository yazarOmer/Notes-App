import { Header } from "@/components/header";

const ArchivedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen">
            <Header title="Archived Notes" />
            {children}
        </div>
    );
};

export default ArchivedLayout;
