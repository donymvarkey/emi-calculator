import React from 'react'
import { Github, HeartFill } from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <footer className="bg-dark card px-3 py-3">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 ">
                    <h6 className="text-white text-center">D&D with <HeartFill color="red" /> by Dony M Varkey</h6>
                </div>
                <div className="col-md-6 text-center">
                    <a href="https://github.com/donymvarkey/emi-calculator" >
                        <Github size={30} color="white" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer