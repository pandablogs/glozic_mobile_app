
function Button({ name, bgColor, type }) {

    return (
        <>
            <button type={type} className="btn rounded-pill  cs_btn text-white w-100" style={{ background: bgColor }}>{name}</button>
        </>
    )
}

export default Button;