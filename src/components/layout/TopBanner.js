import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const TopBanner = ({imageClass, title, subtitle}) => {
  return (
     <div className="bradcam_area bradcam_bg_3 bradcam_area_sm">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text text-center">
                        <h3>{title}</h3>
                        {/* <p>subtitle</p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
  );
};

export default TopBanner;
