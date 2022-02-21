import React, { useEffect, useState } from "react";
import { obj } from '../../sources/Objectives';

export default function ObjAndAreas(params) {
    const [areas, setAreas] = useState([])
    const [row1, setRow1] = useState([])
    const [row2, setRow2] = useState([])
    const [row3, setRow3] = useState([])
    const [row4, setRow4] = useState([])
    const [row5, setRow5] = useState([])
    const [row6, setRow6] = useState([])
    const [row7, setRow7] = useState([])

    useEffect(() => {
        console.log(obj);
        for (let i = 0; i < obj.AreaDeCrecimiento.length; i++) {
            for (let j = 0; j < obj.ObjetivosEducativos.Unidad[i].length; j++) {
                switch (j) {
                    case 0:
                        setAreas(areas.push(obj.ObjetivosEducativos.Unidad[i][j]));
                        break;
                    case 1:
                        setRow1(row1.push(obj.ObjetivosEducativos.Unidad[i][j]));
                        break;
                    case 2:
                        setRow2(row2.push(obj.ObjetivosEducativos.Unidad[i][j]));
                        break;
                    case 3:
                        setRow3(row3.push(obj.ObjetivosEducativos.Unidad[i][j]));
                        break;
                    case 4:
                        setRow4(row4.push(obj.ObjetivosEducativos.Unidad[i][j]));
                        break;
                    case 5:
                        setRow5(row5.push(obj.ObjetivosEducativos.Unidad[i][j]));
                        break;
                    case 6:
                        setRow6(row6.push(obj.ObjetivosEducativos.Unidad[i][j]));
                        break;
                    case 7:
                        setRow7(row7.push(obj.ObjetivosEducativos.Unidad[i][j]));
                        break;
                }
                
            }
        }
        console.log(areas);
        console.log(row1);
        console.log(row5);
        console.log(row6);
        console.log(row7);
    }, [])


    return(
        <>
        {/*
            <div className="table table-success table-striped row">
                <section className="col-2 d-inline-block">
                    <div className="text-center row">{obj.AreaDeCrecimiento[0]}</div>
                    {obj.ObjetivosEducativos.Unidad.Corporalidad.map((objetive, index) =>{
                        return (
                            <div key={"corp" + index} className="row">{objetive}</div>
                        )
                    })}
                </section>
                <section className="col-2 d-inline-block">
                    <div className="text-center">{obj.AreaDeCrecimiento[1]}</div>
                    {obj.ObjetivosEducativos.Unidad.Creatividad.map((objetive, index) =>{
                        return (
                            <div key={"crea" + index} className="">{objetive}</div>
                        )
                    })}
                </section>
                <section className="col-2 d-inline-block">
                    <div className="text-center">{obj.AreaDeCrecimiento[2]}</div>
                    {obj.ObjetivosEducativos.Unidad.Afectividad.map((objetive, index) =>{
                        return (
                            <div key={"afec" + index} className="">{objetive}</div>
                        )
                    })}
                </section>
                <section className="col-2 d-inline-block">
                    <div className="text-center">{obj.AreaDeCrecimiento[3]}</div>
                    {obj.ObjetivosEducativos.Unidad.Caracter.map((objetive, index) =>{
                        return (
                            <div key={"cara" + index} className="">{objetive}</div>
                        )
                    })}
                </section>
                <section className="col-2 d-inline-block">
                    <div className="text-center">{obj.AreaDeCrecimiento[4]}</div>
                    {obj.ObjetivosEducativos.Unidad.Sociabilidad.map((objetive, index) =>{
                        return (
                            <div key={"soc" + index} className="">{objetive}</div>
                        )
                    })}
                </section>
                <section className="col-2 d-inline-block">
                    <div className="text-center">{obj.AreaDeCrecimiento[5]}</div>
                    {obj.ObjetivosEducativos.Unidad.Corporalidad.map((objetive, index) =>{
                        return (
                            <div key={"Esp" + index} className="">{objetive}</div>
                        )
                    })}
                </section>
            </div>
                */}
        </>
    )
}
