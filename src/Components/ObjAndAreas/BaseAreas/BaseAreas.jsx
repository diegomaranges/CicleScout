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
                            <button id={"afect" + e} onClick={event => prop.onClick("afect", e, obj.afect[e], event)}>{obj.afect[e]}</button>
                        </th>
                        <th className="fit text-center" key={"carac" + e}>
                            <button id={"carac" + e} onClick={event => prop.onClick("carac", e, obj.carac[e], event)}>{obj.carac[e]}</button>
                        </th>
                        <th className="fit text-center" key={"corpo" + e}>
                            <button id={"corpo" + e} onClick={event => prop.onClick("corpo", e, obj.corpo[e], event)}>{obj.corpo[e]}</button>
                        </th>
                        <th className="fit text-center" key={"creat" + e}>
                            <button id={"creat" + e} onClick={event => prop.onClick("creat", e, obj.creat[e], event)}>{obj.creat[e]}</button>
                        </th>
                        <th className="fit text-center" key={"socia" + e}>
                            <button id={"socia" + e} onClick={event => prop.onClick("socia", e, obj.socia[e], event)}>{obj.socia[e]}</button>
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
