import { useContext } from "react";
import NewsCard from "./NewsCard";
import { DataContext } from "./data-context";

const NewsFeed = () => {
  const { data, isLoading, isError, setPageSize } = useContext(DataContext);
  const onLoadMoreHandler = () => {
    setPageSize((prev) => prev + 11);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="grid grid-cols-3 w-fit gap-4 ">
        {isError ? (
          <p>There is an Error</p>
        ) : isLoading ? (
          <p>Loading Articles...</p>
        ) : (
          data?.articles?.map((article, index) => (
            <NewsCard
              title={article.title}
              author={article.author}
              image={article.urlToImage}
              date={article.publishedAt}
              key={index}
              id={index}
              content={article.content}
            />
          ))
        )}
      </div>

      {!data?.articles?.length && !isError && !isLoading ? (
        <button
          onClick={onLoadMoreHandler}
          type="button"
          className=" py-3 cursor-pointer px-5 border-1 border-[#696A754D]/30 text-[#696A75] rounded-[6px] mb-3"
        >
          Load More
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
export default NewsFeed;
