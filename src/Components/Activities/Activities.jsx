import React from "react";

function Activities(params) {
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
                <button>Seleccionar objetivos educativos</button>
                <div class="input-group">
                    <span class="input-group-text">Introduccion</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="input-group">
                    <span class="input-group-text">Desarrollo</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="input-group">
                    <span class="input-group-text">Cierre</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="input-group">
                    <span class="input-group-text">Introduccion</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <label for="basic-url" class="form-label">Recupero</label>
                <div class="input-group">
                    <span class="input-group-text">Reflexion</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="input-group">
                    <span class="input-group-text">Iluminacion</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Activities;
