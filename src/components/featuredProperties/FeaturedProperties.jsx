import React from "react";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf.bstatic.com/xdata/images/hotel/square200/62305922.webp?k=e1803cfb3aa2f9174f7aeb4be60d23bc06c9e67c21ec84085f0d093b3a17108b&o=&s=1"
        />
        <span className="fpName">Aparthotel star Miasto</span>
        <span className="fpCite">London</span>
        <span className="fpPrice">Starting from €100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf.bstatic.com/xdata/images/hotel/square200/125890682.webp?k=888c9b2f592fd0563407d9318ea573297f2c4122bdad3908019b60f364a909ac&o=&s=1"
        />
        <span className="fpName">Rezidence Davids Apartments</span>
        <span className="fpCite">Paris</span>
        <span className="fpPrice">Starting from €90</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf.bstatic.com/xdata/images/hotel/square200/62305922.webp?k=e1803cfb3aa2f9174f7aeb4be60d23bc06c9e67c21ec84085f0d093b3a17108b&o=&s=1"
        />
        <span className="fpName">Aparthotel star Miasto</span>
        <span className="fpCite">London</span>
        <span className="fpPrice">Starting from €100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
