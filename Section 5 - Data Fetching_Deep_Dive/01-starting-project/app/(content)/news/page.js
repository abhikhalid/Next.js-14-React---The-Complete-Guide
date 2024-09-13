import NewsList from "@/components/news-list";

//NEXT JS overrides fetch function mechanism and adds extra catching logic into it.

//this is server side component. f12 and you can see the content from the browser which was missing in client side component.
export default async function NewsPage() {
    const response = await fetch(`http://localhost:8080/news`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch news.');
    }

    const news = await response.json();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    )
}