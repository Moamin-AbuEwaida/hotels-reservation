import React from "react";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/max500/619965.webp?k=8b2bc851e921e03c4565fe28e4f608c30223227743b3b2cc56c476a5ef04d3da&o="
        />
        <div className="featuredTitles">
          <h1>Lisbon</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/max500/971353.webp?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o="
        />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/max500/645962.webp?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o="
        />
        <div className="featuredTitles">
          <h1>Seville</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
