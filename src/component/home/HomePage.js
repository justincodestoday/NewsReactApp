import React, { useEffect, useState } from "react";
import { fetchTopHeadlines, fetchArticles } from "../../service/newsService";
import ArticleCard from "../article/ArticleCard";
import ArticlePulseEffect from "../article/ArticlePulseEffect";
import Header from "./Header";

const HomePage = () => {
  const [articles, setArticles] = useState();
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [warning, setWarning] = useState("");
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    setLoading(true);
    setWarning("");

    try {
      const articles = query
        ? await fetchArticles(query, filters)
        : await fetchTopHeadlines(filters);

      if (articles.length === 0) {
        setWarning(`No articles found for "${query}"`);
      } else {
        setWarning("");
      }

      setArticles(
        articles.filter(
          (article) => !article.title.toLowerCase().includes("removed")
        )
      );
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, [query, filters]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header setQuery={setQuery} setFilters={setFilters} />

      <div>
        {warning && <p className="text-red-500 text-center mt-4">{warning}</p>}
      </div>

      <div className="p-4">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(12)].map((_, index) => (
              <ArticlePulseEffect key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
