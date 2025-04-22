import { ViewNote } from "@/components/view-note";

const NotePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return <ViewNote id={id} />;
};

export default NotePage;
