
function Button({ name, bgColor }) {

    return (
        <>
            <button className="btn rounded-pill  cs_btn text-white w-100" style={{ background: bgColor }}>{name}</button>  
        </>
    )
}

export default Button;