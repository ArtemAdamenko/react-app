import {Metadata} from "next";
import {getPage} from "@/api/page";
import {notFound} from "next/navigation";
import {getMenu} from "@/api/menu";

export const metadata: Metadata = {
    title: 'Page Product'
};

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})));
}

export default async function PageProduct({params}: { params: { alias: string } }) {
    const page = await getPage(params.alias);
    if (!page) {
        notFound();
    }
    return (
        <div>
            Page Product (alias {params.alias})
        </div>
    );
}
