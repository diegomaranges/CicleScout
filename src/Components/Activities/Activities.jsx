import React from "react";

export default function Activities(params) {
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
                <button className="btn btn-primary mb-3">Seleccionar objetivos educativos</button>
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
                <label for="basic-url" className="form-label">Recupero</label>
                <div className="input-group mb-3">
                    <span className="input-group-text">Reflexion</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Iluminacion</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
        </>
    );
}
