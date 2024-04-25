import "./Metrics.scss";

const Metrics = () => {
    return (
        <div className="metrics desktop_container">
            <div className="metric">
                <span className="metric_value display_xl_regular">100%</span>
                <span className="metric_text body_sm_regular">Satisfitation <br /> Clients</span>
            </div>
            <div className="metric">
                <span className="metric_value display_xl_regular">250</span>
                <span className="metric_text body_sm_regular">EMPLOYEES <br />ON WORLDWIDE</span>
            </div>
            <div className="metric">
                <span className="metric_value display_xl_regular">3469</span>
                <span className="metric_text body_sm_regular">PROJECTS COMPLETED <br /> ON 60 COUNTRIES</span>
            </div>
            <div className="divider" />
        </div>
    )
}

export default Metrics;