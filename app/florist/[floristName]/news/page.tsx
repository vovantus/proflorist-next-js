import NewsList from "@/components/florist/NewsList/NewsList";
import floristApi from "@/lib/floristApi";

export default async function FloristNewsPage({
  params,
}: {
  params: { floristName: string };
}) {
  const floristName = params.floristName;
  const [news, hasMore] = await floristApi.fetchNews(floristName);

  return (
    <NewsList floristName={floristName} initialNews={news} hasMore={hasMore} />
  );
}
