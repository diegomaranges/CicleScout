import { espiritualidadC, espiritualidadM, espiritualidadR, espiritualidadU } from "../../../Backend/Backend";

export const loadBu = section => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.Budistas.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uBu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uBu" + i}>{espiritualidadU.Budistas[0]}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.Budistas.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uBu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uBu" + i}>{espiritualidadU.Budistas[0]}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.Budistas.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uBu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uBu" + i}>{espiritualidadU.Budistas[0]}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadC.Budistas.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uBu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uBu" + i}>{espiritualidadU.Budistas[0]}</th>)
                })}
            </>
        )
    }
}

export const loadCa = section => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.Catolicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uCa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCa" + i}>{espiritualidadU.Catolicos[0]}</th>)
                })}
            </>
        )

    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.Catolicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uCa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCa" + i}>{espiritualidadU.Catolicos[0]}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.Catolicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uCa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCa" + i}>{espiritualidadU.Catolicos[0]}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.Catolicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uCa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCa" + i}>{espiritualidadU.Catolicos[0]}</th>)
                })}
            </>
        )
    }
}

export const loadCE = section => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.CristianosEvangelicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uCE" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCE" + i}>{espiritualidadU.CristianosEvangelicos[0]}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.CristianosEvangelicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uCE" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCE" + i}>{espiritualidadU.CristianosEvangelicos[0]}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.CristianosEvangelicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uCE" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCE" + i}>{espiritualidadU.CristianosEvangelicos[0]}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.CristianosEvangelicos.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uCE" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uCE" + i}>{espiritualidadU.CristianosEvangelicos[0]}</th>)
                })}
            </>
        )
    }
}

export const loadJu = section => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.Judios.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uJu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uJu" + i}>{espiritualidadU.Judios[0]}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.Judios.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uJu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uJu" + i}>{espiritualidadU.Judios[0]}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.Judios.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uJu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uJu" + i}>{espiritualidadU.Judios[0]}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.Judios.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uJu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uJu" + i}>{espiritualidadU.Judios[0]}</th>)
                })}
            </>
        )
    }
}

export const loadSa = section => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.SantosDeLosUltimosDias.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uSa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uSa" + i}>{espiritualidadU.SantosDeLosUltimosDias[0]}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.SantosDeLosUltimosDias.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uSa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uSa" + i}>{espiritualidadU.SantosDeLosUltimosDias[0]}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.SantosDeLosUltimosDias.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uSa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uSa" + i}>{espiritualidadU.SantosDeLosUltimosDias[0]}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.SantosDeLosUltimosDias.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uSa" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uSa" + i}>{espiritualidadU.SantosDeLosUltimosDias[0]}</th>)
                })}
            </>
        )
    }
}

export const loadMu = section => {
    if (section === "1") {
        return (
            <>
                {espiritualidadM.Musulmanes.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uMu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uMu" + i}>{espiritualidadU.Musulmanes[0]}</th>)
                })}
            </>
        )
    } else if (section === "2") {
        return (
            <>
                {espiritualidadU.Musulmanes.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uMu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uMu" + i}>{espiritualidadU.Musulmanes[0]}</th>)
                })}
            </>
        )
    } else if (section === "3") {
        return (
            <>
                {espiritualidadC.Musulmanes.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uMu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uMu" + i}>{espiritualidadU.Musulmanes[0]}</th>)
                })}
            </>
        )
    } else if (section === "4") {
        return (
            <>
                {espiritualidadR.Musulmanes.map((e, i) => {
                    return i > 0 ? (<th className="fit text-center" key={"uMu" + i}>{e}</th>) : (<th scope="row" className="text-center" key={"uMu" + i}>{espiritualidadU.Musulmanes[0]}</th>)
                })}
            </>
        )
    }
}
