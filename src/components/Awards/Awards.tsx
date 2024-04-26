// import React from 'react'

import "./Awards.scss";
import GermanDesigns from "./awards_icons/GermanDesigns";
import GoldDesign from "./awards_icons/GoldDesign";
import GoodDesign from "./awards_icons/GoodDesign";
import IFDesign from "./awards_icons/IFDesign";

const Awards = () => {

    const awards = [
        {
            icon: <GermanDesigns />,
            text: "German Design Award",
            year: 2021
        },
        {
            icon: <GoldDesign />,
            text: "Gold A’ Design Award",
            year: 2021
        },
        {
            icon: <IFDesign />,
            text: "IF Design Award",
            year: 2020
        },
        {
            icon: <GoodDesign />,
            text: "Good Design Award",
            year: 2019
        },

    ]

    return (
        <div className="Awards">
            <div className="desktop_container awards_container">
                <div className="awards_header">
                    <span className="award_text display_xs_regular">Awards</span>
                    <div className="line" />
                </div>
                <div className="awards_list">
                    {awards.map((award, key) => (
                        <div className="award_item" key={key}>
                            {award.icon}
                            <div className="award_item_text">
                                <span className="body_sm_regular">{award.text}</span>
                                <span className="body_sm_regular">{award.year}</span>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Awards;