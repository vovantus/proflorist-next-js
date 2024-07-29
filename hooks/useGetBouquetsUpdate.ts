import floristApi from "@/lib/floristApi";
import Bouquet from "@/lib/types/Bouquet";
import Category from "@/lib/types/Category";
import { useCallback, useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "@/utils/config";

const useGetBouquetsUpdate = (
  floristName: string,
  startingFromId: string,
  categoryId?: Category["id"],
  bouquetsOnPage: number = ITEMS_PER_PAGE
) => {
  const [status, setStatus] = useState<"idle" | "loading" | "finished">(
    startingFromId ? "idle" : "finished"
  );
  const [newBouquets, setNewBouquets] = useState<Bouquet[]>([]);
  const [cursorBouquetId, setCursorBouquetId] = useState<string>("");
  const [lastBouquetId, setLastBouquetId] =
    useState<Bouquet["id"]>(startingFromId);

  useEffect(() => {
    if (cursorBouquetId) {
      setStatus("loading");
      floristApi
        .fetchBouquetsByCategory(
          floristName,
          cursorBouquetId,
          categoryId,
          bouquetsOnPage
        )
        .then(([newBouquets, hasMore]) => {
          setNewBouquets(newBouquets);
          if (!hasMore) {
            setStatus("finished");
          } else {
            setLastBouquetId(newBouquets[newBouquets.length - 1].id);
            setStatus("idle");
          }
        });
    }
  }, [bouquetsOnPage, categoryId, cursorBouquetId, floristName]);

  const initUpdate = useCallback(() => {
    if (lastBouquetId) setCursorBouquetId(lastBouquetId);
  }, [lastBouquetId]);

  return { newBouquets, status, initUpdate };
};

export default useGetBouquetsUpdate;
