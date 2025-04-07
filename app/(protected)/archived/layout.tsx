import { Header } from "@/components/header";

const ArchivedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full">
            <Header title="Archived Notes" />
            <div className="lg:mt-20">{children}</div>
        </div>
    );
};

export default ArchivedLayout;
