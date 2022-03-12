import React, { useState } from "react";
import reactDom from "react-dom";

import Filter from "./Filter/Filter";

export default function Program() {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const [seccion, setSeccion] = useState(0);
    const [religiones, setReligiones] = useState([]);

    const handleStart = () => {
        const filter = reactDom.findDOMNode(document.getElementById("filter"));
        const activities = reactDom.findDOMNode(document.getElementById("activities"));
        filter.className.add("d-none");
        activities.className.remove("d-none");
        activities.appendChild(reactDom.render(
            <div class="row">
                <div class="col">Horario de inicio</div>
                <div class="col">Horario de fin</div>
                <div class="col">Nombre de la actividad</div>
                <div class="col">Responsable</div>
            </div>
        ));
        reactDom.findDOMNode(document.getElementById("buttons")).className.remove("d-none");
    }
    
    const handleAdd = () => {
        const activities = reactDom.findDOMNode(document.getElementById("activities"));

        navigate("/activitie");
        
        activities.appendChild(reactDom.render(
            <div class="row">
                <div class="col">Horario de inicio</div>
                <div class="col">Horario de fin</div>
                <div id={index} class="col">Nombre de la actividad</div>
                <div class="col">Responsable</div>
            </div>
        ));

        setIndex(index++);
    }

    return (
        <>
            <div id="filter">
                <Filter sec={setSeccion} rel={setReligiones} handle={handleStart}></Filter>
            </div>
            <div id="activities" className="container d-none mb-1"></div>
            <div id="buttons" className="d-sm-flex flex-md-row bd-highlight justify-content-md-around align-items-md-center mb-1 d-none">
                <button className="btn btn-outline-success">imprimir</button>
                <button className="btn btn-outline-secondary" onClick={handleAdd}>agregar actividad</button>
                <button className="btn btn-outline-warning">limpiar</button>
            </div>
        </>
    );
}
