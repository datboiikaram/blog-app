import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center justify-evenly p-6 w-full">
      <Logo />
      <p>Home</p>
      <input
        type="text"
        className="bg-[#F4F4F5] rounded-[5px] p-2 pr-4"
        placeholder="Search "
        name="search"
        id="search"
      />
    </div>
  );
};
export default Header;
