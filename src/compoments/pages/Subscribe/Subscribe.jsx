import React from 'react';
import Foot from "../../../../src/assets/images/Backgroundfooter.png";


const Subscribe = () => {
    return (
        <div id='subscribe'>
            <div className="container">
             <div className="subscribe">
                      <img src={Foot} alt="img" />
                      <div className="subscribe-text">
                        <h1>Subscribe to <br /> our Newsletter</h1>
                        <div className="subscribe-inp">
                          <input type="text" placeholder="Your Email Address" />
                          <button>Subscribe</button>
                        </div>
                      </div>
                      </div>
                    </div>
        </div>
    );
};

export default Subscribe;