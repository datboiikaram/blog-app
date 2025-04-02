import Header from "./Header";

import NewsFeed from "./NewsFeed";

function PageLayout() {
  return (
    <div className="flex flex-col gap-12  items-center">
      <Header />
      <NewsFeed />
    </div>
  );
}

export default PageLayout;
