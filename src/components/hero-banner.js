import React from "react";

export const HeroBanner = () => {
  const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RhLwi_lnUywab-oa9h5EEQKLdgo-raNSVs7qMwQ035aHpyp-q4cLruryZ43qhhckMjY&usqp=CAU";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      <h1 className="hero-banner__headline">Welcome to ETA Prediction by MIT Media Lab!</h1>
      <p className="hero-banner__description">
        This application is for the developers who will develop various apps for ETA Prediction 
        end users and data scientists. If you are new here, then <strong>Sign Up </strong> 
        and send an email to <strong>sidjain88tx@gmail.com</strong> to have have appropriate 
        role assigned to you.
      </p>
    </div>
  );
};
