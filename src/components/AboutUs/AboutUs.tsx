// import React from 'react'

import "./AboutUs.scss";
import Eyebrow from '../Eyebrow/Eyebrow';

const AboutUs = () => {
    return (
        <div className="about_us desktop_container">
            <div className="about_content">
                <Eyebrow section_name={"ABOUT US"}/>
                <h2 className="display_xl_regular">
                    We help to bring your <i>dream home</i>&nbsp;to reality
                </h2>
                <p className="body_lg_light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
                </p>
                <p className="body_lg_light">
                    Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
                </p>
            </div>
            <div className="img_content">
                <img className="img_badge" src="src\assets\design-studio.svg" alt="" />
                <img className=" img_about img_to_top" src="src\assets\images\img1.png" alt="" />
                <img className=" img_about img_to_bottom" src="src\assets\images\img2.png" alt="" />
            </div>
        </div>
    )
}

export default AboutUs;