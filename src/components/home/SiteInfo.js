import React from 'react';

const SiteInfo = () => {
  return (
    <section>
      <div className="travel_variation_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single_travel text-center">
                        <div className="icon">
                            <img src="assets/img/icons/buy.png" alt="" className="site-info-logo"/>
                        </div>
                        <h3>Buy</h3>
                        <p>Buy cheap games</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_travel text-center">
                        <div className="icon">
                            <img src="assets/img/icons/sell.png" alt="" className="site-info-logo"/>
                        </div>
                        <h3>Sell</h3>
                        <p>Sell your finished games</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_travel text-center">
                        <div className="icon">
                            <img src="assets/img/icons/trade.png" alt="" className="site-info-logo"/>
                        </div>
                        <h3>Trade</h3>
                        <p>Trade a game for a different one</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default SiteInfo;
