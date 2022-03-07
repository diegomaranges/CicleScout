import { afectividadU, caracterU, corporalidadU, creatividadU, sociabilidadU, areasC } from "../../../Backend/Backend";

const LoadAreas = (param) => {
    let allAreas = [];
    if (param === "1") {} else if (param === "2") {
        areasC.forEach((area, i) => {
            if (i !== 5) {
                allAreas.push(area);
            }
        })
    } else if (param === "3") {} else if (param === "4") {} else {}
    return allAreas;
}

const LoadAfect = (param) => {
    let afect = [];
    if (param === "1") {} else if (param === "2") {
        afectividadU.forEach(obj => {
            afect.push(obj);
        });
    } else if (param === "3") {} else if (param === "4") {} else {}
    return afect;
}

const LoadCarc = (param) => {
    let carac = [];
    if (param === "1") {} else if (param === "2") {
        caracterU.forEach(obj => {
            carac.push(obj);
        });
    } else if (param === "3") {} else if (param === "4") {} else {}
    return carac;
}

const LoadCorp = (param) => {
    let corpo = [];
    if (param === "1") {} else if (param === "2") {
        corporalidadU.forEach(obj => {
            corpo.push(obj);
        });
    } else if (param === "3") {} else if (param === "4") {} else {}
    return corpo;
}

const LoadCreat = (param) => {
    let creat = [];
    if (param === "1") {} else if (param === "2") {
        creatividadU.forEach(obj => {
            creat.push(obj);
        });
    } else if (param === "3") {} else if (param === "4") {} else {}
    return creat;
}

const LoadSocia = (param) => {
    let socia = [];
    if (param === "1") {} else if (param === "2") {
        sociabilidadU.forEach(obj => {
            socia.push(obj);
        });
    } else if (param === "3") {} else if (param === "4") {} else {}
    return socia;
}

export const LoadSections = (param) => {
    let allAreas = LoadAreas(param);
    let afect = LoadAfect(param);
    let carac = LoadCarc(param);
    let corpo = LoadCorp(param);
    let creat = LoadCreat(param);
    let socia = LoadSocia(param);
    let length = 0;

    length = Math.max(
        afect.length,
        carac.length,
        corpo.length,
        creat.length,
        socia.length
    );

    if (afect.length < length) {
        for (let i = afect.length; i <= length; i++) {
            afect.push(" ");
        }
        for (let i = carac.length; i <= length; i++) {
            carac.push(" ");
        }
        for (let i = corpo.length; i <= length; i++) {
            corpo.push(" ");
        }
        for (let i = corpo.length; i <= length; i++) {
            creat.push(" ");
        }
        for (let i = socia.length; i <= length; i++) {
            socia.push(" ");
        }
    }

    return {allAreas, afect, carac, corpo, creat, socia, length}
}
