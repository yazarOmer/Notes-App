import { Header } from "@/components/header";

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen">
            <Header title="All notes" />
            {children}
        </div>
    );
};

export default NotesLayout;
