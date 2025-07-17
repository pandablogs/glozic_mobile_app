import logo from '../assets/images/logo.png'


function Header() {
    return (
        <>

            {/* <div className="container-fluid bg-white py-3 border-bottom">
                <div className="d-flex align-items-center gap-3">
                    <h1 className="text-danger fw-bold display-5 mb-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        SAH
                    </h1>
                    <div style={{ lineHeight: "1.2" }}>
                        <span className="d-block fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontFamily: "'Roboto Condensed', sans-serif", fontSize: "0.95rem" }}>
                            Singapore
                        </span>
                        <span className="d-block fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontFamily: "'Roboto Condensed', sans-serif", fontSize: "0.95rem" }}>
                            Assurance
                        </span>
                        <span className="d-block fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontFamily: "'Roboto Condensed', sans-serif", fontSize: "0.95rem" }}>
                            Healthcare
                        </span>
                    </div>
                </div>
            </div> */}

            <div className="bg-white px-4 d-flex align-items-center gap-3 " style={{ paddingTop: '22px', paddingBottom: '22px', height: '106px' }}>
                <img src={logo} alt="logo" className='object-fit-contain ms-3' style={{ width: '260px' }} />
                {/* <img src={logo} alt="logo" className='object-fit-contain ms-3' style={{ width: '60%' }} /> */}
                {/* <h1 className="text-danger fw-bold display-5 mb-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    SAH
                </h1>
                <div style={{ lineHeight: "1.2" }}>
                    <span className="d-block fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontFamily: "'Roboto Condensed', sans-serif", fontSize: "0.95rem" }}>
                        Singapore
                    </span>
                    <span className="d-block fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontFamily: "'Roboto Condensed', sans-serif", fontSize: "0.95rem" }}>
                        Assurance
                    </span>
                    <span className="d-block fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontFamily: "'Roboto Condensed', sans-serif", fontSize: "0.95rem" }}>
                        Healthcare
                    </span>
                </div> */}
            </div>
        </>
    )
}

export default Header