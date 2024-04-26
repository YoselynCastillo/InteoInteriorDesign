import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer desktop_container">
            <div className="divider" />
            <div className="direction">
                <div className="left_section">
                    <span className="kick_start display_lg_regular">
                        Kick-start your dream home with us
                    </span>
                    <a className="send_hi display_lg_regular" href="#">
                        <i>Send us a hi</i>
                    </a>

                </div>
                <div className="right_section">
                    <div className="address">
                        <span className="city display_xs_regular">
                            Brooklyn, New York
                        </span>
                        <span className="address_line body_sm_light">
                            962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.
                        </span>

                    </div>
                    <div className="email">
                        <span className="section_title body_sm_light">
                            Email us at
                        </span>
                        <span className="section_description display_xs_regular">
                            hello@landify.design
                        </span>
                    </div>
                    <div className="phone">
                        <span className="section_title body_sm_light">
                            If you're hurry, quick call for us
                        </span>
                        <span className="section_description display_xs_regular">
                            +8(663)125-08-59
                        </span>
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="container">
                <span className="footer_line body_md_light">
                    © 2022 Inteo - Award winning studio. Made with love by
                    &nbsp;<span className="landify">Landify</span>
                </span>
                <div className="right_section">
                    <div className="eyebrow">
                        <span className="body_sm_semibold">CONNECT</span>
                        <div className="line" />
                    </div>
                    <div className="icons">
                        <img src="src/assets/ig_icon.svg" alt="" />
                        <img src="src/assets/fb_icon.svg" alt="" />
                        <img src="src/assets/yt_icon.svg" alt="" />
                        <img src="src/assets/twitter_icon.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;