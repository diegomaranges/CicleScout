import React, { useEffect } from "react";
import "./EspArea.css";
import * as espiritualidadU from "../../../sources/Unidad/EspiritualidadUnidad";
import reactDom from "react-dom";

export default function EspArea(params) {
    const loadUBu = () => {
        return (
            <>
                <th scope="row" className="text-center">Budistas</th>
                {espiritualidadU.espUBudista.Budistas.map((e, i) => {
                    return <th className="fit text-center" key={"uBu" + i}>{e}</th>
                })}
            </>
        )
    }

    const loadUCa = () => {
        return (
            <>
                <th scope="row" className="text-center">Católicos</th>
                {espiritualidadU.espUCatolico.Catolicos.map((e, i) => {
                    return <th className="fit text-center" key={"uCa" + i}>{e}</th>
                })}
            </>
        )
    }

    const loadUCE = () => {
        return (
            <>
                <th scope="row" className="text-center">Cristianos Evangélicos</th>
                {espiritualidadU.espUCrisEvan.CristianosEvangelicos.map((e, i) => {
                    return <th className="fit text-center" key={"uCE" + i}>{e}</th>
                })}
            </>
        )
    }

    const loadUJu = () => {
        return (
            <>
                <th scope="row" className="text-center">Judíos</th>
                {espiritualidadU.espUJudios.Judios.map((e, i) => {
                    return <th className="fit text-center" key={"uJu" + i}>{e}</th>
                })}
            </>
        )
    }

    const loadUSa = () => {
        return (
            <>
                <th scope="row" className="text-center">Santos de los Últimos Días</th>
                {espiritualidadU.espUSanUDias.SantosDeLosUltimosDias.map((e, i) => {
                    return <th className="fit text-center" key={"uSa" + i}>{e}</th>
                })}
            </>
        )
    }

    const loadUMu = () => {
        return (
            <>
                <th scope="row" className="text-center">Musulmanes</th>
                {espiritualidadU.espUMus.Musulmanes.map((e, i) => {
                    return <th className="fit text-center" key={"uMu" + i}>{e}</th>
                })}
            </>
        )
    }

    useEffect(() => {
        let especialidades = [];
        especialidades = params.rel;

        let uBu = reactDom.findDOMNode(document.querySelector("#UBu"));
        let uCa = reactDom.findDOMNode(document.querySelector("#UCa"));
        let uCE = reactDom.findDOMNode(document.querySelector("#UCE"));
        let uJu = reactDom.findDOMNode(document.querySelector("#UJu"));
        let uSa = reactDom.findDOMNode(document.querySelector("#USa"));
        let uMu = reactDom.findDOMNode(document.querySelector("#UMu"));
    
        uBu.classList.add("d-none");
        uCa.classList.add("d-none");
        uCE.classList.add("d-none");
        uJu.classList.add("d-none");
        uSa.classList.add("d-none");
        uMu.classList.add("d-none");

        if (params.sec === "1") {

        } else if (params.sec === "2") {
            especialidades.map(e => {
                console.log("element = " + e);
                switch (e) {
                    case 0:
                        uBu.classList.remove("d-none");
                        break;
                    case 1:
                        uCa.classList.remove("d-none");
                        break;
                    case 2:
                        uCE.classList.remove("d-none");
                        break;
                    case 3:
                        uJu.classList.remove("d-none");
                        break;
                    case 4:
                        uSa.classList.remove("d-none");
                        break;
                    case 5:
                        uMu.classList.remove("d-none");
                        break;
                    default:
                        break;
                }
                return 0;
            });
        } else if (params.sec === "3") {
            
        } else if (params.sec === "4") {
            
        }
    }, [params.sec, params.rel])

    return (
        <>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UBu" className="d-none">
                        {loadUBu()}
                    </tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UCE" className="d-none">
                        {loadUCE()}
                    </tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UCa" className="d-none">
                        {loadUCa()}
                    </tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UJu" className="d-none">
                        {loadUJu()}
                    </tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="USa" className="d-none">
                        {loadUSa()}
                    </tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UMu" className="d-none">
                        {loadUMu()}
                    </tr>
                </tbody>
            </table>
        </>
    )    
}
