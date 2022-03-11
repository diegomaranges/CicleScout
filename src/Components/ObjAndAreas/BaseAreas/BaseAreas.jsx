import React from "react";

import { LoadSections } from "./Utils";

import "./BaseAreas.css";

export default function BaseAreas(prop) {
    let obj = {};

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
                            <button id={"afect" + e} onClick={() => prop.onClick("afect", e, obj.afect[e])}>{obj.afect[e]}</button>
                        </th>
                        <th className="fit text-center" key={"carac" + e}>
                            <button id={"carac" + e} onClick={() => prop.onClick("carac", e, obj.carac[e])}>{obj.carac[e]}</button>
                        </th>
                        <th className="fit text-center" key={"corpo" + e}>
                            <button id={"corpo" + e} onClick={() => prop.onClick("corpo", e, obj.corpo[e])}>{obj.corpo[e]}</button>
                        </th>
                        <th className="fit text-center" key={"creat" + e}>
                            <button id={"creat" + e} onClick={() => prop.onClick("creat", e, obj.creat[e])}>{obj.creat[e]}</button>
                        </th>
                        <th className="fit text-center" key={"socia" + e}>
                            <button id={"socia" + e} onClick={() => prop.onClick("socia", e, obj.socia[e])}>{obj.socia[e]}</button>
                        </th>
                    </tr>);
                })
            } </>
        );
    }

    const loadTable = () => {
        obj = LoadSections(prop.sec);
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
    }

    return (
        <>
            <div>{loadTable()}</div>
        </>
    )
}
