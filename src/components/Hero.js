import React from "react";

const Hero = () =>{
    return (
        <div className="cover bg-left bg-center-l">
            <div className="cover bg-left bg-center-l">
                <div className="bg-black-80 pb5 pb6-m pb7-l">
                    <h1 className="f2 f1-l fw2 white-90 mb0 mt0 pt5 lh-title">Fairmont Community Parnership Croup Inc.</h1>
                    <h2 className="fw1 f3 white-80 mt3 mb4">Dedicated to enhancing and improving the lives of Fairmont residents.</h2>
                    <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Donate</a>
                    <span className="dib v-mid ph3 white-70 mb3">or</span>
                    <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Newsletter Signup</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;