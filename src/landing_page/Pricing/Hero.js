import React from "react";
function Hero(){
    return(
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <p className="text-muted">Free equity investments and flat Rs 20 traday and F&0 trades.</p>
            </div>
            <div className="row text-center p-5 mt-5">
                <div className="col-4 p-5">
                    <img src='media/images/pricingEquity.svg'/>
                    <h1 className="fs-3">Free Equity Delivery</h1>
                    <p className="text-muted">All euity delivery investments (NSE,BSE), are absolutely free - Rs. 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                     <img src='media/images/intradayTrades.svg'/>
                    <h1 className="fs-3">Intraday & F&0 Trades</h1>
                    <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday tardes across equity, currency, and commodity trades.</p>
                </div>
                <div className="col-4 p-5">
                     <img src='media/images/pricingEquity.svg'/>
                    <h1 className="fs-3">Free Direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free - Rs 0 commissions and DP charges.</p>
                </div>

            </div>
        </div>
    );
}
export default Hero;