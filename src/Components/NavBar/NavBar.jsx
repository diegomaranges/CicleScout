import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(params) {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        Eazy-Cicle
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to={"/"}>Crear Programa</Link>
                            <Link className="nav-link" to={"/"}>Ver programas de ejemplo</Link>
                            <Link className="nav-link" to={"/"}>Ver actividades de ejemplo</Link>
                            <Link className="nav-link" to={"/objetives"}>Ver objetivos y areas de crecimiento</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
