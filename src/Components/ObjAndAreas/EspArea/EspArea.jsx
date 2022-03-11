import React, { useEffect } from "react";
import reactDom from "react-dom";

import { loadBu, loadCE, loadCa, loadJu, loadMu, loadSa } from "./Utils";

import "./EspArea.css";

export default function EspArea(prop) {

    const loadObj = rel => {
        switch (rel) {
            case 0:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UBu" className="d-none">{loadBu()}</tr>
                        </tbody>
                    </table>
                );
            case 1:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UCE" className="d-none">{loadCE()}</tr>
                        </tbody>
                    </table>
                );
            case 2:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UCa" className="d-none">{loadCa()}</tr>
                        </tbody>
                    </table>
                );
            case 3:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UJu" className="d-none">{loadJu()}</tr>
                        </tbody>
                    </table>
                );
            case 4:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="USa" className="d-none">{loadSa()}</tr>
                        </tbody>
                    </table>
                );
            case 5:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UMu" className="d-none">{loadMu()}</tr>
                        </tbody>
                    </table>
                );
            default:
                break;
        }
    }

    const loadTable = () => {
        const bu = prop.rel.find(elem => { elem === 0 })
        const ce = prop.rel.find(elem => { elem === 1 })
        const ca = prop.rel.find(elem => { elem === 2 })
        const ju = prop.rel.find(elem => { elem === 3 })
        const sa = prop.rel.find(elem => { elem === 4 })
        const mu = prop.rel.find(elem => { elem === 5 })

        return (
            <>
                { bu ? loadObj(0) : <></> }
                { ce ? loadObj(1) : <></> }
                { ca ? loadObj(2) : <></> }
                { ju ? loadObj(3) : <></> }
                { sa ? loadObj(4) : <></> }
                { mu ? loadObj(5) : <></> }
            </>
        );
    }

    return (
        <>
            <div>{loadTable()}</div>
        </>
    )    
}
