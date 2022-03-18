import React from "react";
import reactDom from "react-dom";
import { useDispatch } from "react-redux";

//import { cleanGoal } from "../../actions";
import ObjAndAreas from "../ObjAndAreas/ObjAndAreas";

export default function Activities(prop) {
    const dispatch = useDispatch();

    function tempFunc() {
        return 0;
    }

    function SelecObjs(event) {
        event.preventDefault();
        //dispatch(cleanGoal());
        const objDis = reactDom.findDOMNode(document.getElementById("objDisplay"));
        objDis.classList.toggle("d-none");
    }

    return(
        <>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Nombre</span>
                    <input type="text" className="form-control" placeholder="Nombre de actividad" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Objetivos</span>
                    <input type="text" className="form-control" placeholder="Nombre de actividad" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <button onClick={e => SelecObjs(e)} className="btn btn-primary mb-3">Seleccionar objetivos educativos</button>
                <div id="objDisplay" className="d-none">
                    <ObjAndAreas hundleClick={tempFunc}></ObjAndAreas>
                </div>
                <div id="selectObj"></div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Introduccion</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Desarrollo</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Cierre</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Introduccion</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <label htmlFor="basic-url" className="form-label">Recupero</label>
                <div className="input-group mb-3">
                    <span className="input-group-text">Reflexion</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Iluminacion</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className="d-sm-flex flex-md-row bd-highlight justify-content-md-around align-items-md-center flex-wrap mb-1">
                    <button type="submit" className="btn btn-primary mb-3" onClick={prop.save}>Guardar</button>
                    <button type="submit" className="btn btn-primary mb-3" onClick={prop.cancel}>Cancelar</button>
                </div>
            </form>
        </>
    );
}
