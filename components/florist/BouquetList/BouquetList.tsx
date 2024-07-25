"use client";

import { Box } from "@mui/material";
import BouquetCard from "@/components/florist/BouquetCard/BouquetCard";
import Bouquet from "@/lib/types/Bouquet";
import { useState, useEffect, useRef } from "react";
import useGetBouquetsUpdate from "@/hooks/useGetBouquetsUpdate";
import BouquetCardSkeleton from "../BouquetCard/BouquetCardSkeleton";

interface BouquetListProps {
  floristName: string;
  initialBouquets: Bouquet[];
  bouquetsOnPage: number;
}

export default function BouquetList({
  floristName,
  initialBouquets,
  bouquetsOnPage,
}: BouquetListProps) {
  const [bouquetsList, setBouquetsList] = useState<Bouquet[]>(initialBouquets);
  const { newBouquets, status, initUpdate } = useGetBouquetsUpdate(
    floristName,
    bouquetsOnPage,
    initialBouquets[initialBouquets.length - 1].id
  );
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (newBouquets.length > 0) {
      setBouquetsList((oldBouqs) => [...oldBouqs, ...newBouquets]);
    }
  }, [newBouquets]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initUpdate();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    const target = targetRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [initUpdate]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,350px)",
        width: "100%",
        marginX: "auto",
        gap: "8px",
        justifyContent: "center",
        alignContent: "start",
      }}
    >
      {bouquetsList.map((el) => (
        <BouquetCard key={el.id} bouquet={el} />
      ))}
      {status === "idle" && <BouquetCardSkeleton ref={targetRef} />}
      {status !== "finished" && <BouquetCardSkeleton />}
    </Box>
  );
}
