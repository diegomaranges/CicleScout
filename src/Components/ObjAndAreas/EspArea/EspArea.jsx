import React, { useEffect } from "react";
import "./EspArea.css";
import { espiritualidadC, espiritualidadM, espiritualidadR, espiritualidadU } from "../../../Backend/Backend";
import reactDom from "react-dom";

export default function EspArea(params) {
    const loadUBu = () => {
        if (params.sec === "1") {
            return (
                <>
                    {espiritualidadM.Budistas.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uBu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uBu" + i}>{espiritualidadU.Budistas[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "2") {
            return (
                <>
                    {espiritualidadU.Budistas.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uBu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uBu" + i}>{espiritualidadU.Budistas[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "3") {
            return (
                <>
                    {espiritualidadC.Budistas.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uBu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uBu" + i}>{espiritualidadU.Budistas[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "4") {
            return (
                <>
                    {espiritualidadC.Budistas.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uBu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uBu" + i}>{espiritualidadU.Budistas[0]}</th>)
                    })}
                </>
            )
        }
    }

    const loadUCa = () => {
        if (params.sec === "1") {
            return (
                <>
                    {espiritualidadM.Catolicos.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uCa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCa" + i}>{espiritualidadU.Catolicos[0]}</th>)
                    })}
                </>
            )

        } else if (params.sec === "2") {
            return (
                <>
                    {espiritualidadU.Catolicos.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uCa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCa" + i}>{espiritualidadU.Catolicos[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "3") {
            return (
                <>
                    {espiritualidadC.Catolicos.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uCa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCa" + i}>{espiritualidadU.Catolicos[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "4") {
            return (
                <>
                    {espiritualidadR.Catolicos.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uCa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCa" + i}>{espiritualidadU.Catolicos[0]}</th>)
                    })}
                </>
            )
        }
    }

    const loadUCE = () => {
        if (params.sec === "1") {
            return (
                <>
                    {espiritualidadM.CristianosEvangelicos.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uCE" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCE" + i}>{espiritualidadU.CristianosEvangelicos[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "2") {
            return (
                <>
                    {espiritualidadU.CristianosEvangelicos.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uCE" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCE" + i}>{espiritualidadU.CristianosEvangelicos[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "3") {
            return (
                <>
                    {espiritualidadC.CristianosEvangelicos.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uCE" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCE" + i}>{espiritualidadU.CristianosEvangelicos[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "4") {
            return (
                <>
                    {espiritualidadR.CristianosEvangelicos.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uCE" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCE" + i}>{espiritualidadU.CristianosEvangelicos[0]}</th>)
                    })}
                </>
            )
        }
    }

    const loadUJu = () => {
        if (params.sec === "1") {
            return (
                <>
                    {espiritualidadM.Judios.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uJu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uJu" + i}>{espiritualidadU.Judios[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "2") {
            return (
                <>
                    {espiritualidadU.Judios.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uJu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uJu" + i}>{espiritualidadU.Judios[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "3") {
            return (
                <>
                    {espiritualidadC.Judios.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uJu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uJu" + i}>{espiritualidadU.Judios[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "4") {
            return (
                <>
                    {espiritualidadR.Judios.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uJu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uJu" + i}>{espiritualidadU.Judios[0]}</th>)
                    })}
                </>
            )
        }
    }

    const loadUSa = () => {
        if (params.sec === "1") {
            return (
                <>
                    {espiritualidadM.SantosDeLosUltimosDias.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uSa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uSa" + i}>{espiritualidadU.SantosDeLosUltimosDias[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "2") {
            return (
                <>
                    {espiritualidadU.SantosDeLosUltimosDias.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uSa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uSa" + i}>{espiritualidadU.SantosDeLosUltimosDias[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "3") {
            return (
                <>
                    {espiritualidadC.SantosDeLosUltimosDias.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uSa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uSa" + i}>{espiritualidadU.SantosDeLosUltimosDias[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "4") {
            return (
                <>
                    {espiritualidadR.SantosDeLosUltimosDias.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uSa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uSa" + i}>{espiritualidadU.SantosDeLosUltimosDias[0]}</th>)
                    })}
                </>
            )
        }
    }

    const loadUMu = () => {
        if (params.sec === "1") {
            return (
                <>
                    {espiritualidadM.Musulmanes.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uMu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uMu" + i}>{espiritualidadU.Musulmanes[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "2") {
            return (
                <>
                    {espiritualidadU.Musulmanes.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uMu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uMu" + i}>{espiritualidadU.Musulmanes[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "3") {
            return (
                <>
                    {espiritualidadC.Musulmanes.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uMu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uMu" + i}>{espiritualidadU.Musulmanes[0]}</th>)
                    })}
                </>
            )
        } else if (params.sec === "4") {
            return (
                <>
                    {espiritualidadR.Musulmanes.map((e, i) => {
                        return i > 0 ? (<th className="fit text-center" key={"uMu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uMu" + i}>{espiritualidadU.Musulmanes[0]}</th>)
                    })}
                </>
            )
        }
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
        especialidades.map(e => {
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
    }, [params.sec, params.rel])

    return (
        <>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UBu" className="d-none">{loadUBu()}</tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UCE" className="d-none">{loadUCE()}</tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UCa" className="d-none">{loadUCa()}</tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UJu" className="d-none">{loadUJu()}</tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="USa" className="d-none">{loadUSa()}</tr>
                </tbody>
            </table>
            <table className="table table-success table-striped">
                <tbody>
                    <tr id="UMu" className="d-none">{loadUMu()}</tr>
                </tbody>
            </table>
        </>
    )    
}
