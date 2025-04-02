import { Link } from "react-router";

const NewsCard = ({ title, author, image, date, id }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };
  return (
    <Link
      to={`${id}`}
      className="flex flex-col font-work-sans w-[392px]  gap-4 border-[1px] border-[#E8E8EA] p-4 rounded-xl"
    >
      <img
        src={image ? image : "https://placehold.co/360x240"}
        className="rounded-[6px] w-[360px] h-[240px]"
        alt=""
      />
      <div className="flex flex-col gap-5 p-2  ">
        <span className="text-[#4B6BFB] rounded-[6px] bg-[#4B6BFB]/5 w-fit py-[4px] px-[10px]">
          Technology
        </span>
        <h3 className="font-semibold text-[#181A2A] w-[344px]">{title} </h3>
        <div className="flex items-center   justify-between text-[#97989F] gap-5 font-sans">
          <div className="flex items-center  gap-3">
            <img
              src="https://placehold.co/36x36"
              className="rounded-full "
              alt=""
            />
            <p> {author}</p>
          </div>
          <p>{formatDate(date)}</p>
        </div>
      </div>
    </Link>
  );
};
export default NewsCard;
