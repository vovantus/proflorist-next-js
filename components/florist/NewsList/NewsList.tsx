"use client";
import useGetNewsUpdate from "@/hooks/useGetNewsUpdate";
import News from "@/lib/types/News";
import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardSkeleton from "../NewsCard/NewsCardSkeleton";
import NoNews from "./NoNews";

interface NewsListProps {
  floristName: string;
  initialNews: News[];
  hasMore: boolean;
}

export default function NewsList({
  floristName,
  initialNews,
  hasMore,
}: NewsListProps) {
  const [newsList, setNewsList] = useState<News[]>(initialNews);
  const { newNews, status, initUpdate } = useGetNewsUpdate(
    floristName,
    hasMore ? initialNews[initialNews.length - 1].id : ""
  );

  useEffect(() => {
    if (newNews.length > 0) {
      setNewsList((oldNews) => [...oldNews, ...newNews]);
    }
  }, [newNews]);

  const targetRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.0,
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
  }, [initUpdate, status]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
      }}
    >
      {newsList.length > 0 ? (
        <>
          {newsList.map((el) => (
            <NewsCard key={el.id} news={el} />
          ))}
          {status !== "finished" && <NewsCardSkeleton ref={targetRef} />}
        </>
      ) : (
        <NoNews />
      )}
    </Box>
  );
}
