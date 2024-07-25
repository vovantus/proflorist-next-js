import floristApi from "@/lib/floristApi";
import Bouquet from "@/lib/types/Bouquet";
import { stat } from "fs/promises";
import { useCallback, useEffect, useState } from "react";

const useGetBouquetsUpdate = (
  floristName: string,
  bouquetsOnPage: number,
  startingFromId: string
) => {
  const [status, setStatus] = useState("idle");
  const [newBouquets, setNewBouquets] = useState<Bouquet[]>([]);
  const [cursorBouquetId, setCursorBouquetId] = useState("");
  const [lastBouquetId, setLastBouquetId] = useState(startingFromId);

  useEffect(() => {
    if (cursorBouquetId) {
      setStatus("loading");
      floristApi
        .fetchBouquetsByCategory(floristName, bouquetsOnPage, cursorBouquetId)
        .then((newBouquets) => {
          setNewBouquets(newBouquets);
          setStatus("idle");
          if (newBouquets && newBouquets.length < bouquetsOnPage) {
            setStatus("finished");
          } else {
            setLastBouquetId(newBouquets[newBouquets.length - 1].id);
            setStatus("idle");
          }
        });
    }
  }, [bouquetsOnPage, cursorBouquetId, floristName]);

  const initUpdate = useCallback(() => {
    setCursorBouquetId(lastBouquetId);
  }, [lastBouquetId]);

  return { newBouquets, status, initUpdate };
};

export default useGetBouquetsUpdate;
