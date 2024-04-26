import Eyebrow from "../Eyebrow/Eyebrow";
import "./Works.scss";

const Works = () => {

    const data = [
        {
            img: 'src/assets/images/work-1.png',
            title: 'Villa Furnishing & Interior',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
        },
        {
            img: 'src/assets/images/work-2.png',
            title: 'Luxury Hotel Renovation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
        },
        {
            img: 'src/assets/images/work-3.png',
            title: 'Residence Swimming Pool',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
        }
    ]
    return (
        <div className="works desktop_container">
            <div className="col-1">

                <div className="works_header">
                    <Eyebrow section_name={"RECENT WORKS"} />
                    <h2 className="display_xl_regular">
                        Some of <i>our crafts</i>&nbsp; <br />made with love
                    </h2>
                </div>
                <div className="work">
                    <img src={data[0].img} alt="" />
                    <div className="content">
                        <h3 className="work_title display_md_regular">
                            {data[0].title}
                        </h3>
                        <span className="work_description body_lg_light">
                            {data[0].description}
                        </span>
                    </div>
                </div>

                <button className="work_button body_xs_semibold">
                    CONTACT US
                    <img src="src/assets/contact_us_arrow.svg" alt="" />
                </button>
            </div>
            <div className="col-2">
                <div className="work">
                    <img src={data[1].img} alt="" />
                    <div className="content">
                        <h3 className="work_title display_md_regular">
                            {data[1].title}
                        </h3>
                        <span className="work_description body_lg_light">
                            {data[1].description}
                        </span>
                    </div>
                </div>
                <div className="work">
                    <img src={data[2].img} alt="" />
                    <div className="content">
                        <h3 className="work_title display_md_regular">
                            {data[2].title}
                        </h3>
                        <span className="work_description body_lg_light">
                            {data[2].description}
                        </span>
                    </div>
                </div>
            </div>
            <button className="work_button work_button_mobile body_xs_semibold">
                CONTACT US
                <img src="src/assets/contact_us_arrow.svg" alt="" />
            </button>
        </div>
    )
}

export default Works;