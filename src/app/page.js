"use client";

import React, { useEffect, useState } from "react";

import useDeepCompareEffect from "use-deep-compare-effect";

import axios from "axios";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { NewsCard } from "@/components/NewsCard";

import { newsApiUrl } from "@/constants";

import { useQuery } from "react-query";
import moment from "moment";

export default function Home() {
  const [newsData, setNewsData] = useState([]);

  const newsApiQuery = useQuery([], async () => await axios.get(newsApiUrl));

  useEffect(() => {
    if (newsApiQuery.status === "success") {
      const saveData = newsApiQuery.data.data.articles.map((article) => {
        return {
          title: article.title,
          description: article.description,
          image: article.urlToImage,
          url: article.url,
          date: moment(article.date).format("LLL"),
        };
      });

      setNewsData(() => saveData);
    }
  }, [newsApiQuery.status]);

  useDeepCompareEffect(() => {}, [newsData]);

  return (
    <Container>
      <Typography variant="h3" justifyContent="center" display="flex">
        News API News
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={5} sx={{ marginY: 2 }}>
        {newsData.map((news, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <NewsCard
              title={news.title}
              date={news.date}
              description={news.description}
              url={news.url}
              image={news.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
