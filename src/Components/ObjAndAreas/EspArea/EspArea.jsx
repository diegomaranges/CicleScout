import React from "react";

import { loadBu, loadCE, loadCa, loadJu, loadMu, loadSa } from "./Utils";

import "./EspArea.css";

export default function EspArea(prop) {

    const loadObj = rel => {
        switch (rel) {
            case 0:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UBu">{loadBu(prop.sec, prop.onClick)}</tr>
                        </tbody>
                    </table>
                );
            case 1:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UCE">{loadCE(prop.sec, prop.onClick)}</tr>
                        </tbody>
                    </table>
                );
            case 2:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UCa">{loadCa(prop.sec, prop.onClick)}</tr>
                        </tbody>
                    </table>
                );
            case 3:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UJu">{loadJu(prop.sec, prop.onClick)}</tr>
                        </tbody>
                    </table>
                );
            case 4:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="USa">{loadSa(prop.sec, prop.onClick)}</tr>
                        </tbody>
                    </table>
                );
            case 5:
                return (
                    <table className="table table-success table-striped">
                        <tbody>
                            <tr id="UMu">{loadMu(prop.sec, prop.onClick)}</tr>
                        </tbody>
                    </table>
                );
            default:
                break;
        }
    }

    const loadTable = () => {
        let rel = [];
        rel = prop.rel;

        const bu = rel.findIndex(elem => elem === 0);
        const ce = rel.findIndex(elem => elem === 1);
        const ca = rel.findIndex(elem => elem === 2);
        const ju = rel.findIndex(elem => elem === 3);
        const sa = rel.findIndex(elem => elem === 4);
        const mu = rel.findIndex(elem => elem === 5);

        return (
            <>
                { bu + 1 ? loadObj(0) : <></> }
                { ce + 1 ? loadObj(1) : <></> }
                { ca + 1 ? loadObj(2) : <></> }
                { ju + 1 ? loadObj(3) : <></> }
                { sa + 1 ? loadObj(4) : <></> }
                { mu + 1 ? loadObj(5) : <></> }
            </>
        );
    }

    return (
        <>
            <div>{loadTable()}</div>
        </>
    )    
}
