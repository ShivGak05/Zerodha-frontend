import React from "react";
function Team(){
    return(
        <div className="container">
            <div className='row p-5 mt-5 mb-5 border-top'>
                <h1 className="text-centermt-5">People</h1>

            </div>
            <div className="row p3 text-muted" style={{lineHeight: "1.8", fontSize: "1.2em"}}>
                <div className='col-6 p-3 text-center'>
                    <img src='media/images/shivangi.jpeg' alt='shivangi ki image' style={{ borderRadius: "100%", width: "70%" }}/>
                     <h4 className="mt-5">Shivangi Gakhar</h4>
          <h6>CSE, NIT,Rourkela</h6>
                </div>
                <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
            </div>
        </div>
    );
}
export default Team;