import React from "react";
import reactDom from "react-dom";
import { useDispatch } from 'react-redux';

import {addElem, cleanElems, deleteElem} from "../../../actions";
import { LoadSections } from "./Utils";

import "./BaseAreas.css";

export default function BaseAreas(params) {
    const dispatch = useDispatch();
    let obj = {};

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

    const loadAreasRow = () => {
        return (
            <tr>
                <th scope="col" className="text-center">#</th>
                {
                    obj.allAreas.map((area, i) => {
                        return <th className="fit text-center" key={"area" + i} scope="col">{area}</th>
                    })
                }
            </tr>
        )
    }

    const loadDocRows = () => {
        let total = [];
        total = [...Array(obj.length).keys()]
        return (
            <>
            {
                total.map(e => {
                    return (<tr key={"tr" + e}>
                        <th key={"number" + (e + 1)}
                            scope="row"
                            className="text-center">{e + 1}</th>
                        <th className="fit text-center" key={"afect" + e}>
                            <button id={"afect" + e} onClick={() => hundleObjClick("afect", e, obj.afect[e])}>{obj.afect[e]}</button>
                        </th>
                        <th className="fit text-center" key={"carac" + e}>
                            <button id={"carac" + e} onClick={() => hundleObjClick("carac", e, obj.carac[e])}>{obj.carac[e]}</button>
                        </th>
                        <th className="fit text-center" key={"corpo" + e}>
                            <button id={"corpo" + e} onClick={() => hundleObjClick("corpo", e, obj.corpo[e])}>{obj.corpo[e]}</button>
                        </th>
                        <th className="fit text-center" key={"creat" + e}>
                            <button id={"creat" + e} onClick={() => hundleObjClick("creat", e, obj.creat[e])}>{obj.creat[e]}</button>
                        </th>
                        <th className="fit text-center" key={"socia" + e}>
                            <button id={"socia" + e} onClick={() => hundleObjClick("socia", e, obj.socia[e])}>{obj.socia[e]}</button>
                        </th>
                    </tr>);
                })
            } </>
        );
    }

    const loadTable = () => {
        dispatch(cleanElems())
        if (params.sec && params.sec !== 0) {
            obj = LoadSections(params.sec);
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

    return (
    <>
        <div id="objetives">{loadTable()}</div>
    </>)
}
