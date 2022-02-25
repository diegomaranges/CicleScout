import React, { useEffect, useState } from "react";
import * as afectividadU from "../../../sources/Unidad/AfectividadUnidad";
import * as caracterU from "../../../sources/Unidad/CaracterUnidad";
import * as corporalidadU from "../../../sources/Unidad/CorporalidadUnidad";
import * as creatividadU from "../../../sources/Unidad/CreatividadUnidad";
import * as sociabilidadU from "../../../sources/Unidad/SociabilidadUnidad";
import * as areas from "../../../sources/Areas";

export default function BaseAreas(params) {
    const [allAreas, setAllAreas] = useState([])
    const [afect, setAfect] = useState([]);
    const [carac, setCarac] = useState([]);
    const [corpo, setCorpo] = useState([]);
    const [creat, setCreat] = useState([]);
    const [socia, setSocia] = useState([]);
    const [length, setlength] = useState(0);

    function LoadSections() {
        if (params.sec === "1") {
        } else if (params.sec === "2") {
            setAllAreas([]);
            setAfect([]);
            setCarac([]);
            setCorpo([]);
            setCreat([]);
            setSocia([]);
            setlength(0);
            areas.areas.AreaDeCrecimiento.forEach((area, i) => {
                if (i !== 5) {
                    setAllAreas(...allAreas, area);
                }
            })
            afectividadU.afecU.Afectividad.forEach(obj => {
                setAfect([...afect, obj]);
            });
            caracterU.carU.Caracter.forEach(obj => {
                setCarac([...carac, obj]);
            });
            corporalidadU.corpU.Corporalidad.forEach(obj => {
                setCorpo([...corpo, obj]);
            });
            creatividadU.creatU.Creatividad.forEach(obj => {
                setCreat([...creat, obj]);
            });
            sociabilidadU.socU.Sociabilidad.forEach(obj => {
                setSocia([...socia, obj]);
            });

            setlength(Math.max(afect.length, carac.length, corpo.length, creat.length, socia.length));

            if (afect.length < length) {
                for (let i = afect.length; i <= length; i++) {
                    setAfect(...afect, " ");
                    console.log(afect);
                }
                for (let i = carac.length; i <= length; i++) {
                    setCarac(...carac, " ");
                }
                for (let i = corpo.length; i <= length; i++) {
                    setCorpo(...corpo, " ");
                }
                for (let i = corpo.length; i <= length; i++) {
                    setCorpo(...creat, " ");
                }
                for (let i = socia.length; i <= length; i++) {
                    setSocia(...socia, " ");
                }
            }
        } else if (params.sec === "3") {
        } else if (params.sec === "4") {
        } else {
            setAllAreas([]);
            setAfect([]);
            setCarac([]);
            setCorpo([]);
            setCreat([]);
            setSocia([]);
            setlength(0);
        }
    }

    function loadAreasRow() {
        return(
            <tr>
                <th scope="col">#</th>
                {allAreas.map((area, i) => {
                    return <th key={"areaO" + i} scope="col">{area}</th>
                })}
            </tr>
        )
    }

    function loadDocRows() {
        for (let i = 0; i < length; i++) {
            return (
                <tr>
                    <th scope="row">{i + 1}</th>
                    <th>{afect[i]}</th>
                    <th>{carac[i]}</th>
                    <th>{corpo[i]}</th>
                    <th>{creat[i]}</th>
                    <th>{socia[i]}</th>
                </tr>
            );
        }
    }

    function loadTable () {
        if (params.sec !== 0) {
            LoadSections();
            return (
                <table className="table">
                    <thead>
                        {loadAreasRow()}
                    </thead>
                    <tbody>
                        {loadDocRows()}
                    </tbody>
                </table>
            )
        }
        return <div></div>
    }

    useEffect(() => {
        loadTable();
    }, [params.sec])

    return (
        <>
            
        </>
    )    
}
