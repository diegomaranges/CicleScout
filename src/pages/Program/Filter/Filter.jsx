import React from "react";
import { secciones } from "../../../sources/Secciones";
import { rel } from "../../../sources/Religiones";

export default function Filter(prop) {
    return(
        <>
            <article className="d-sm-flex flex-md-row bd-highlight justify-content-md-around align-items-md-center flex-wrap mt-4">
                <section>
                    <select onChange={e => {prop.sec(e.target.value)}} defaultValue="0" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="0">Seccion</option>
                        {secciones.secciones.map((elem, index) => {
                            return (
                                <option key={elem} value={index + 1}>{elem}</option>
                            )
                        })}
                    </select>
                </section>
                {rel.Religiones.map((elem, index) => {
                    return(
                        <section key={elem + "0"} className="form-check form-switch ms-4">
                            <input onChange={() => prop.sRel(index)} key={elem + "1"} className="form-check-input" type="checkbox" role="switch" id={"switch" + index} />
                            <label key={elem + "2"} className="form-check-label" htmlFor={"switch" + index}>{elem}</label>
                        </section>
                    )
                })}
            </article>
            <button onClick={prop.handle} className="btn btn-submit position-relative start-50">elementos seleccionados</button>
        </>
    )
}
