import PageLayout from "./PageLayout";
import { RouterProvider, createBrowserRouter } from "react-router";
import { useEffect, useState } from "react";
import { DataContext } from "./data-context";
import NewsArticleDetail from "./NewsArticleDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
  },
  {
    path: "/:articleId",
    Component: NewsArticleDetail,
  },
]);
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, [pageSize]);
  return (
    <DataContext.Provider value={{ data, isLoading, isError, setPageSize }}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
}

export default App;
