import { Header } from "@/components/header";

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full">
            <Header title="All notes" />
            <div className="lg:mt-20">{children}</div>
        </div>
    );
};

export default NotesLayout;
