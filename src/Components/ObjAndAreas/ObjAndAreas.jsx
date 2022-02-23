import React, { useEffect, useState } from "react";
import BaseAreas from "./BaseAreas/BaseAreas";
import EspArea from "./EspArea/EspArea";
import Filter from "./Filter/Filter";

export default function ObjAndAreas(params) {
    const [seccion, setSeccion] = useState("")
    const [religiones, setReligiones] = useState([])

    useEffect(() => {
    }, [])


    return(
        <>
            <Filter sec={setSeccion} rel={setReligiones} ></Filter>
            <BaseAreas sec={seccion}></BaseAreas>
            <EspArea sec={seccion} rel={religiones}></EspArea>
        </>
    )
}
