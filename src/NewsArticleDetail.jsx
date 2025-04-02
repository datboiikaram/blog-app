import { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "./data-context";
import Header from "./Header";

const NewsArticleDetail = () => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  const { data } = useContext(DataContext);

  const params = useParams();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center gap-8 font-work-sans">
        <div className="flex flex-col w-[800px] gap-5">
          <span className="text-white rounded-[6px] bg-[#4B6BFB] w-fit py-[4px] px-[10px]">
            Technology
          </span>
          <h2 className="font-bold text-3xl">
            {data?.articles[params.articleId]?.title}
          </h2>
          <div className="flex items-center w-fit  justify-between text-[#97989F] gap-5 font-sans">
            <div className="flex items-center  gap-3">
              <img
                src="https://placehold.co/36x36"
                className="rounded-full "
                alt=""
              />
              <p> {data?.articles[params.articleId]?.author}</p>
            </div>
            <p>{formatDate(data?.articles[params.articleId]?.publishedAt)}</p>
          </div>
        </div>
        <img
          className="w-[800px] h-[462px] rounded-[12px]"
          src={`${
            data?.articles[params.articleId]?.urlToImage
              ? data?.articles[params.articleId]?.urlToImage
              : "https://placehold.co/800x462"
          }`}
          alt=""
        />
        <p className="w-[800px]">
          {data?.articles[params.articleId]?.content
            ? data?.articles[params.articleId]?.content
            : "No Article Content"}
        </p>
      </div>
    </div>
  );
};
export default NewsArticleDetail;
