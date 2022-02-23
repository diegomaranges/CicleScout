import React from "react";
import { secciones } from "../../../sources/Secciones";
import { rel } from "../../../sources/Religiones";

export default function Filter(params) {
    return(
        <>
            <section>
                <select defaultValue="0" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="0">Seccion</option>
                    {secciones.secciones.map((elem, index) => {
                        return (
                            <option key={index} value={index}>{elem}</option>
                        )
                    })}
                </select>
            </section>
            <section>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Catolico</label>
                </div>
            </section>
        </>
    )
}
