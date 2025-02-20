import React from "react";
import "../Style.css";

import aboutimg from "../Image/restro3.jpg";
import Footer from "./Footer";


const About = () =>
{
    return(
        
        <>
  <section class="about_section layout_padding">
  <div className="container  ">
    <div className="row">
      <div className="col-md-6 ">
        <div className="about-image">
          <img src={aboutimg} alt="About Us" className="small-about-img"/>
        </div>

      </div>
      <div className="col-md-6">
        <div className="detail-box">
          <div className="heading_container">
            <h2>We Restro</h2>
          </div>
          <p>
            "Restro is more than just a restaurant; it’s a place where flavors
            come alive and moments turn into memories. From our carefully
            sourced ingredients to our warm and welcoming ambiance, every detail
            is designed to make you feel at home while indulging in exceptional
            cuisine."
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </section>
</>


    );
}
export default About;