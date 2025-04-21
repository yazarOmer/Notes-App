import { DesktopNavbar } from "@/components/desktop-navbar";
import { Header } from "@/components/header";
import { MobileBackground } from "@/components/mobile-background";
import { MobileNavbar } from "@/components/mobile-navbar";
import { NotesSidebar } from "@/components/notes-sidebar";

const CreateNotePageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 flex">
            <DesktopNavbar />

            <MobileNavbar />

            <MobileBackground />

            <div className="bg-white dark:bg-neutral-950 mt-12 md:mt-16 z-10 lg:mt-0 px-4 py-5 md:px-8 md:py-5 lg:p-0 w-full lg:w-[calc(100%-272px)] lg:ml-[272px] fixed h-full flex flex-col">
                <div className="hidden w-full lg:flex">
                    <Header />
                </div>
                <div className="flex h-full">
                    <div className="hidden lg:flex lg:max-w-[290px] h-full w-full">
                        <NotesSidebar />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CreateNotePageLayout;
