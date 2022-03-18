import React from "react";
import reactDom from "react-dom";
import { useDispatch } from "react-redux";

import BaseAreas from "./BaseAreas/BaseAreas";
import EspArea from "./EspArea/EspArea";

import { addGoal, deleteGoal } from "../../actions";

export default function ObjAndAreas(prop) {
    const dispatch = useDispatch();

    function hundleObjClick(area, index, obj, event) {
        event.preventDefault();
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
            dispatch(addGoal(element))
        } else {
            dispatch(deleteGoal(area + index))
        }
    }

    return(
        <>
            <BaseAreas sec={"1"} onClick={hundleObjClick}></BaseAreas>
            <EspArea sec={"1"} rel={[1, 0]} onClick={hundleObjClick}></EspArea>
            <button className="btn btn-primary mb-1 float-end" onClick={prop.hundleClick}>Guardar Objetivos y Areas</button>
        </>
    )
}
