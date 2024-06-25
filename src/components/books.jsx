const Books = ({ ImgLogo, title, link, logo1, logo3 }) => {
  return (
    <div className=" w-[240px] h-[450px]  shadow-lg p-3 rounded-[10px]">
      <div className="w-[215px] h-[335px]">
        <img src={ImgLogo} alt="" />
      </div>
      <div className="pb-3">
        <h2 className="font-medium">{title}</h2>
        <a href="#" className="font-thin">
          {link}
        </a>
      </div>
      <div className="flex space-x-32 ">
        <div className="flex items-center">
          <img src={logo1} alt="" />
        </div>
        <div className="flex items-center">
          <img src={logo3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Books;
