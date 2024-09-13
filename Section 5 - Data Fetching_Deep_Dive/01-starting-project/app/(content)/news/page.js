import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";


//this is server side component. f12 and you can see the content from the browser which was missing in client side component.
export default async function NewsPage() {
    const news = getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    )
}