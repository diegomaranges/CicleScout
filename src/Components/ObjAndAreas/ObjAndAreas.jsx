import React, { useEffect, useState } from "react";
import BaseAreas from "./BaseAreas/BaseAreas";
import EspArea from "./EspArea/EspArea";
import Filter from "./Filter/Filter";

export default function ObjAndAreas(params) {
    const [seccion, setSeccion] = useState("");
    const [religiones, setReligiones] = useState([]);

    
    const saveReligions = index => {
        let i = religiones.indexOf(index);

        if (i < 0) {
            setReligiones(religiones.concat(index));
        } else {
            setReligiones(religiones.filter(item => item !== index));
        }
    }

    useEffect(() => {
        console.log(religiones);
    }, [religiones])
    

    return(
        <>
            <Filter sec={setSeccion} sRel={saveReligions}></Filter>
            <BaseAreas sec={seccion}></BaseAreas>
            <EspArea sec={seccion} rel={religiones}></EspArea>
        </>
    )
}
