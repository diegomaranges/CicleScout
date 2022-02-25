import React, { useEffect } from "react";
import reactDom from "react-dom";

import * as afectividadU from "../../../sources/Unidad/AfectividadUnidad";
import * as caracterU from "../../../sources/Unidad/CaracterUnidad";
import * as corporalidadU from "../../../sources/Unidad/CorporalidadUnidad";
import * as creatividadU from "../../../sources/Unidad/CreatividadUnidad";
import * as sociabilidadU from "../../../sources/Unidad/SociabilidadUnidad";
import * as areas from "../../../sources/Areas";
import "./BaseAreas.css";

export default function BaseAreas(params) {

    useEffect(() => {
        let allAreas = [];
        let afect = [];
        let carac = [];
        let corpo = [];
        let creat = [];
        let socia = [];
        let length = 0;

        const LoadSections = () => {
            if (params.sec === "1") {
            } else if (params.sec === "2") {
                areas.areas.AreaDeCrecimiento.forEach((area, i) => {
                    if (i !== 5) {
                        allAreas.push(area);
                    }
                })
                afectividadU.afecU.Afectividad.forEach(obj => {
                    afect.push(obj);
                });
                caracterU.carU.Caracter.forEach(obj => {
                    carac.push(obj);
                });
                corporalidadU.corpU.Corporalidad.forEach(obj => {
                    corpo.push(obj);
                });
                creatividadU.creatU.Creatividad.forEach(obj => {
                    creat.push(obj);
                });
                sociabilidadU.socU.Sociabilidad.forEach(obj => {
                    socia.push(obj);
                });
    
                length = Math.max(afect.length, carac.length, corpo.length, creat.length, socia.length);
    
                if (afect.length < length) {
                    for (let i = afect.length; i <= length; i++) {
                        afect.push(" ");
                    }
                    for (let i = carac.length; i <= length; i++) {
                        carac.push(" ");
                    }
                    for (let i = corpo.length; i <= length; i++) {
                        corpo.push(" ");
                    }
                    for (let i = corpo.length; i <= length; i++) {
                        creat.push(" ");
                    }
                    for (let i = socia.length; i <= length; i++) {
                        socia.push(" ");
                    }
                }
            } else if (params.sec === "3") {
            } else if (params.sec === "4") {
            } else {
            }
        }
    
        const loadAreasRow = () => {
            return(
                <tr>
                    <th scope="col">#</th>
                    {allAreas.map((area, i) => {
                        return <th className="fit" key={"area" + i} scope="col">{area}</th>
                    })}
                </tr>
            )
        }
    
        const loadDocRows = () => {
            let total = [];
            total = [...Array(length).keys()]
            return (
                <>
                    {total.map(e => {
                            return <tr key={"tr" + e}>
                                <th key={"number" + (e+1)} scope="row">{e + 1}</th>
                                <th className="fit" key={"afect" + e}>{afect[e]}</th>
                                <th className="fit" key={"carac" + e}>{carac[e]}</th>
                                <th className="fit" key={"corpo" + e}>{corpo[e]}</th>
                                <th className="fit" key={"creat" + e}>{creat[e]}</th>
                                <th className="fit" key={"socia" + e}>{socia[e]}</th>
                            </tr>
                    })}
                </>
                );
        }

        const loadTable = () => {
            if (params.sec !== 0) {
                LoadSections();
                return (
                    <table className="table table-success table-striped">
                        <thead>
                            {loadAreasRow()}
                        </thead>
                        <tbody>
                            {loadDocRows()}
                        </tbody>
                    </table>
                )
            } else {
                return <div></div>
            }
        }
    
        return(reactDom.render(loadTable(), document.querySelector("#objetives")))
    }, [params.sec])

    return (
        <>
            <div id="objetives"></div>
        </>
    )    
}
