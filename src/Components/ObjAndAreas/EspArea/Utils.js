import { espiritualidadC, espiritualidadM, espiritualidadR, espiritualidadU } from "../../../Backend/Backend";

export const loadBu = (section, onClick) => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.Budistas.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espBu" + i}><button id={"espBu" + i} onClick={() => onClick("espBu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espBu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.Budistas.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espBu" + i}><button id={"espBu" + i} onClick={() => onClick("espBu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espBu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.Budistas.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espBu" + i}><button id={"espBu" + i} onClick={() => onClick("espBu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espBu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.Budistas.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espBu" + i}><button id={"espBu" + i} onClick={() => onClick("espBu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espBu" + i}>{e}</th>)
                })}
            </>
        )
    }
}

export const loadCa = (section, onClick) => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.Catolicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espCa" + i}><button id={"espCa" + i} onClick={() => onClick("espCa", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espCa" + i}>{e}</th>)
                })}
            </>
        )

    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.Catolicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espCa" + i}><button id={"espCa" + i} onClick={() => onClick("espCa", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espCa" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.Catolicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espCa" + i}><button id={"espCa" + i} onClick={() => onClick("espCa", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espCa" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.Catolicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espCa" + i}><button id={"espCa" + i} onClick={() => onClick("espCa", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espCa" + i}>{e}</th>)
                })}
            </>
        )
    }
}

export const loadCE = (section, onClick) => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.CristianosEvangelicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espCe" + i}><button id={"espCe" + i} onClick={() => onClick("espCe", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espCe" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.CristianosEvangelicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espCe" + i}><button id={"espCe" + i} onClick={() => onClick("espCe", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espCe" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.CristianosEvangelicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espCe" + i}><button id={"espCe" + i} onClick={() => onClick("espCe", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espCe" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.CristianosEvangelicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espCe" + i}><button id={"espCe" + i} onClick={() => onClick("espCe", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espCe" + i}>{e}</th>)
                })}
            </>
        )
    }
}

export const loadJu = (section, onClick) => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.Judios.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espJu" + i}><button id={"espJu" + i} onClick={() => onClick("espJu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espJu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.Judios.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espJu" + i}><button id={"espJu" + i} onClick={() => onClick("espJu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espJu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.Judios.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espJu" + i}><button id={"espJu" + i} onClick={() => onClick("espJu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espJu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.Judios.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espJu" + i}><button id={"espJu" + i} onClick={() => onClick("espJu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espJu" + i}>{e}</th>)
                })}
            </>
        )
    }
}

export const loadSa = (section, onClick) => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.SantosDeLosUltimosDias.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espSa" + i}><button id={"espSa" + i} onClick={() => onClick("espSa", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espSa" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.SantosDeLosUltimosDias.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espSa" + i}><button id={"espSa" + i} onClick={() => onClick("espSa", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espSa" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.SantosDeLosUltimosDias.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espSa" + i}><button id={"espSa" + i} onClick={() => onClick("espSa", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espSa" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.SantosDeLosUltimosDias.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espSa" + i}><button id={"espSa" + i} onClick={() => onClick("espSa", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espSa" + i}>{e}</th>)
                })}
            </>
        )
    }
}

export const loadMu = (section, onClick) => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.Musulmanes.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espMu" + i}><button id={"espMu" + i} onClick={() => onClick("espMu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espMu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.Musulmanes.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espMu" + i}><button id={"espMu" + i} onClick={() => onClick("espMu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espMu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.Musulmanes.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espMu" + i}><button id={"espMu" + i} onClick={() => onClick("espMu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espMu" + i}>{e}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.Musulmanes.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"espMu" + i}><button id={"espMu" + i} onClick={() => onClick("espMu", i, e)}>{e}</button></th>) : (<th scope="row" className="text-center" key={"espMu" + i}>{e}</th>)
                })}
            </>
        )
    }
}
