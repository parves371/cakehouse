import React from "react";

const TodaysMenu = ({
  alt,
  Image,
  name,
  description,
  price,
  hoverName,
  hoverNameLink,
  shopCartLink,
}) => {
  return (
    <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
      <div className="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
        <div className="w-full min-w-full h-full">
          <img src={Image} alt={alt} className="w-full block" />
        </div>
        <span className="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">
          top seller
        </span>
        <div className="content bg-white text-center py-[23px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
          <h5 className="mb-2.5">
            {/* "javascript:void(0);" */}
            <a href={"*"}>{name}</a>
          </h5>
          <p className="mb-[2px]">{description}</p>
        </div>
        <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
          <div className="info relative">
            <h5 className="mb-0">
              <a className="text-white" href={hoverNameLink}>
                {hoverName}
              </a>
            </h5>
            <span className="text-xl text-[var(--secondary-dark)] font-bold leading-[30px]">
              {price}
            </span>
          </div>
          <a href={shopCartLink}>
            <i className="flaticon-shopping-cart bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex items-center relative justify-center text-2xl text-center"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodaysMenu;
