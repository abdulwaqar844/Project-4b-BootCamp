import React from "react"
import "./index.css";
import cyberlaw from "../Images/cyberlaw.jpg";
import useWebAnimations, { zoomInLeft } from "@wellyshen/use-web-animations";



function Portfolio() {
    const { ref } = useWebAnimations(zoomInLeft);

    return (
        <div className="portfolio-section" ref={ref}>
            <h1>Our Portfolio</h1>
            <h4>User-friendly web pages are our thing. We’ve also helped some awesome businesses with branding and custom solutions.</h4>

            <div className="portfolio-content">
                <div className="portfolio">
                    <img src={cyberlaw} alt="Cyber Law" />
                    <h2>Cyber Law</h2>
                    <h4>
                        Boutique international law firm dedicated to professional training, consultation, and research.</h4>
                </div>
                <div className="portfolio">
                    <img src="https://www.camo.ee/wp-content/uploads/2019/08/Frame-1140x850.png" alt="Cyber Law" />
                    <h2>Printerirent</h2>
                    <h4>Copier and printer machine rental</h4> 
                                   </div>
                <div className="portfolio">
                    <img src="https://www.camo.ee/wp-content/uploads/2020/07/digimobile-1-1140x850.jpg" alt="Cyber Law" />
                    <h2>Digiekraanid</h2>
                    <h4>
                    Digital outdoor media operator </h4>
                </div>
                <div className="portfolio">
                    <img src="https://www.camo.ee/wp-content/uploads/2019/04/Frame-1140x850.png" alt="Cyber Law" />
                    <h2>Borg</h2>
                    <h4>Profit from Quality</h4> 
                    </div>
            </div>
        </div>
    );
}

export default Portfolio;
