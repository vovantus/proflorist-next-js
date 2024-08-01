"use client";

import BouquetCard from "@/components/florist/BouquetCard/BouquetCard";
import Bouquet from "@/lib/types/Bouquet";
import { useState, useEffect, useRef, useCallback } from "react";
import useGetBouquetsUpdate from "@/hooks/useGetBouquetsUpdate";
import BouquetCardSkeleton from "../BouquetCard/BouquetCardSkeleton";
import Category from "@/lib/types/Category";
import { useCart } from "@/store/store";
import SnackBarAlerts, { SnackBarMessage } from "./SnackBarAlerts";

interface BouquetListProps {
  floristName: string;
  initialBouquets: Bouquet[];
  hasMore: boolean;
  categoryId?: Category["id"];
}

export default function BouquetList({
  floristName,
  initialBouquets,
  hasMore,
  categoryId,
}: BouquetListProps) {
  const addItem = useCart((state) => state.addItem);
  const [bouquetsList, setBouquetsList] = useState<Bouquet[]>(initialBouquets);
  const { newBouquets, status, initUpdate } = useGetBouquetsUpdate(
    floristName,
    hasMore ? initialBouquets[initialBouquets.length - 1].id : "",
    categoryId
  );
  const targetRef = useRef<HTMLDivElement>(null);
  const [snackPack, setSnackPack] = useState<SnackBarMessage[]>([]);

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
        threshold: 0.2,
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

  const popSnackPack = useCallback(
    () => setSnackPack((prev) => prev.slice(1)),
    []
  );

  const handleAddToCart = (bouquet: Bouquet) => {
    addItem(bouquet.id);
    setSnackPack((prev) => [
      ...prev,
      { message: bouquet.name, key: new Date().getTime() },
    ]);
  };

  return (
    <>
      {bouquetsList.map((el) => (
        <BouquetCard
          key={el.id}
          bouquet={el}
          handleAddToCart={() => handleAddToCart(el)}
        />
      ))}
      {status !== "finished" && <BouquetCardSkeleton ref={targetRef} />}
      <SnackBarAlerts popSnackPack={popSnackPack} snackPack={snackPack} />
    </>
  );
}
