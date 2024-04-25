import Eyebrow from "../Eyebrow/Eyebrow";
import "./OurServices.scss";

const OurServices = () => {

    const data = [
        {
            icon: 'src/assets/images/service-icon-1.svg',
            title: 'Architectural & Interior design',
            description: 'Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
        },
        {
            icon: 'src/assets/images/service-icon-2.svg',
            title: 'Building Renovation',
            description: 'Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
        },
        {
            icon: 'src/assets/images/service-icon-3.svg',
            title: 'Construction Management',
            description: 'Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
        }
    ]
    return (
        <div className="our_services desktop_container">
            <div className="content">
                <Eyebrow section_name={"OUR SERVICES"} />
                <h2 className="display_xl_regular">
                    We provide the <i>best solutions</i>&nbsp; <br />for your dream home
                </h2>
            </div>
            <div className="services">
                {data.map(service_item => (
                    <div className="service_item">
                        <img src={service_item.icon} alt="" />
                        <div className="service_content">
                            <span className="service_title display_md_regular">{service_item.title}</span>
                            <span className="service_description body_lg_light">{service_item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurServices;