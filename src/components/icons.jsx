const Icons = ({ ImgSrc, title, text }) => {
  return (
    <div className="containerrrr">
      <div className="flex gap-[10px] p-3  w-[300px] shadow-md rounded-[10px] m-8 ">
        <div className=" items-center flex">
          <img src={ImgSrc} alt="" className="h-[50px] w-[120px]" />
        </div>
        <div className="card_about">
          <h1 className="font-bold">{title}</h1>
          <p className="font-thin">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Icons;
