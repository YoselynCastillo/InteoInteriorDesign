import "./Eyebrow.scss";

const Eyebrow = ({ section_name }: { section_name: string }) => {
    return (
        <div className="eyebrow_container">
            <div className="line"/>
            <h3 className="body_sm_semibold">{section_name}</h3>
        </div>
    )
}

export default Eyebrow;