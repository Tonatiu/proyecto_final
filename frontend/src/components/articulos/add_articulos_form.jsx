import React from 'react';
import '../../styles/add_articulos_form.css';

function AddArticulosForm(){
    return(
        <div className="row">
            <form className="add-article-form">
                <div className="form-group">
                    <label for="articulo-name">Nombre del artículo</label>
                    <input type="text" className="form-control" id="articulo-name" placeholder="Nombre del artículo"/>
                </div>
                <div className="form-group">
                    <label for="articulo-price">Precio del artículo</label>
                    <input type="text" className="form-control" id="articulo-price" placeholder="Precio del artículo"/>
                </div>
                <div className="form-group">
                    <label for="articulo-quantity">Cantidad de artículos</label>
                    <input type="text" className="form-control" id="articulo-quantity" placeholder="Cantidad de artículos"/>
                </div>
                <div className="form-group">
                    <label for="articuloDescripcion">Descripción del artículo</label>
                    <textarea className="form-control no-resize" id="articuloDescripcion" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" multiple className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
        </div>
    );
}

export default AddArticulosForm;