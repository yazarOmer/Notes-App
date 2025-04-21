import { NotesSidebar } from "@/components/notes-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full lg:flex">
            <NotesSidebar />
            {children}
        </div>
    );
};

export default MainLayout;
