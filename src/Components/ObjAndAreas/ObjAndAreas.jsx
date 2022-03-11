import React, { useState } from "react";
import reactDom from "react-dom";

import BaseAreas from "./BaseAreas/BaseAreas";
import EspArea from "./EspArea/EspArea";
import Filter from "./Filter/Filter";

import { addElem, deleteElem } from "../../../actions";

export default function ObjAndAreas(params) {
    const [seccion, setSeccion] = useState(0);
    const [religiones, setReligiones] = useState([]);

    function hundleObjClick(area, index, obj) {
        let domElem = reactDom.findDOMNode(document.getElementById(area + index));
        domElem
            .classList
            .toggle("check");
        if (domElem.classList.contains("check")) {
            let element = {
                id: area + index,
                area: area,
                obj: obj
            }
            dispatch(addElem(element))
        } else {
            dispatch(deleteElem(area + index))
        }
    }
    
    const saveReligions = index => {
        let i = religiones.indexOf(index);

        if (i < 0) {
            setReligiones(religiones.concat(index));
        } else {
            setReligiones(religiones.filter(item => item !== index));
        }
    }

    return(
        <>
            <Filter sec={setSeccion} sRel={saveReligions} onClick={hundleObjClick}></Filter>
            <BaseAreas sec={seccion}></BaseAreas>
            <EspArea sec={seccion} rel={religiones}></EspArea>
        </>
    )
}
