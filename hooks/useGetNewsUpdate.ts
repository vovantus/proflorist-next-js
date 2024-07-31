import floristApi from "@/lib/floristApi";
import News from "@/lib/types/News";
import { useCallback, useEffect, useState } from "react";
import { NEWS_PER_PAGE } from "@/utils/config";

const useGetNewsUpdate = (
  floristName: string,
  startingFromId: string,
  newsOnPage: number = NEWS_PER_PAGE
) => {
  const [status, setStatus] = useState<"idle" | "loading" | "finished">(
    startingFromId ? "idle" : "finished"
  );
  const [newNews, setNewNews] = useState<News[]>([]);
  const [cursorNewsId, setCursorNewsId] = useState<News["id"]>("");
  const [lastNewsId, setLastNewsId] = useState<News["id"]>(startingFromId);

  useEffect(() => {
    if (cursorNewsId) {
      setStatus("loading");
      floristApi
        .fetchNews(floristName, cursorNewsId, newsOnPage)
        .then(([newNews, hasMore]) => {
          setNewNews(newNews);
          if (!hasMore) {
            setStatus("finished");
          } else {
            setLastNewsId(newNews[newNews.length - 1].id);
            setStatus("idle");
          }
        });
    }
  }, [newsOnPage, cursorNewsId, floristName]);

  const initUpdate = useCallback(() => {
    if (lastNewsId) setCursorNewsId(lastNewsId);
  }, [lastNewsId]);

  return { newNews, status, initUpdate };
};

export default useGetNewsUpdate;
