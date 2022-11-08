import React from 'react'

export default function Landing() {
  return (
    <div className="vw-100 h-100 bg-white">
      <div
        className="vw-100 pt-3"
        style={{ backgroundColor: "rgb(247, 248, 250)", height:"440px" }}
      >
        <div
          className=" row align-items-center mx-auto w-100 "
          style={{
            maxWidth: "1300px",
            padding: "0 20px",
            height: "440px",
            backgroundColor: "rgb(247, 248, 250)",
          }}
        >
          <div className=" p-0 col-lg col-12">
            <h1
              className="text-dark "
              style={{
                fontSize: "54px",
                fontWeight: "bolder",
                fontFamily: "sans-serif",
              }}
            >
              Trade at BitForex Investment in the Future
            </h1>
            <p className="text-dark " style={{ fontSize: "14px" }}>
              Buy, trade, and hold 50+ cryptocurrencies on Binance
            </p>
            <div className="row w-100 m-0">
              <div className="col-sm-8 col-12 p-0">
                <input
                  className="form-control w-100 inline-block "
                  type="text"
                  placeholder="Phone/Email"
                  aria-label="default input example"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary mx-sm-3 my-sm-0 my-3 mx-0 col-sm-2 col-12"
              >
                Register
              </button>
            </div>
          </div>
          <div className="col-lg d-none h-100 d-lg-flex align-items-center justify-content-center">
            <img
              className=" h-100 mx-auto"
              style={{ width: "85%" }}
            />
          </div>
        </div>
      </div>
      <div
        className="row text-dark mx-3 mx-lg-auto py-5 h-auto"
        style={{ maxWidth: "1300px" }}
      >
        <div className="col-lg-3 col-6 my-3">
          <h3 className="fs-2 fs-lg-1">$1 billion</h3>
          <span  style={{fontSize:"13px"}}>24h trading volume on Binance exchange</span>
        </div>
        <div className="col-lg-3 col-6 my-3">
          <h3 className="fs-2 fs-lg-1">+50</h3>
          <span style={{fontSize:"13px"}}>Cryptocurrencies listed</span>
        </div>
        <div className="col-lg-3 col-6 my-3">
          <h3 className="fs-2 fs-lg-1">+200</h3>
          <span style={{fontSize:"13px"}}>Regional service centers</span>
        </div>
        <div className="col-lg-3 col-6 my-3">
          <h3 className="fs-2 fs-lg-1">&lt;0.10%</h3>
          <span style={{fontSize:"13px"}}>Lowest transaction fees</span>
        </div>
      </div>
    </div>
  );
};

