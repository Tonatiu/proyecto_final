import React from 'react';
import HeaderController from '../../controller/header/header_controller';
import {isEmpty} from '../../controller/common/utils';

class CategoriasSelector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categorias: []
        }
    };

    componentDidMount(){
        HeaderController.getInstance().getCategorias(responce => {
            let categorias = responce.data;
            this.setState({categorias});
        });
    };   

    render(){
        return isEmpty(this.state.categorias) ? <div className="dropdown-menu" aria-labelledby="navbarDropdown">Loading...</div> :
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {this.state.categorias.map(categoria => <a className="dropdown-item" href="#">{categoria.descripcion}</a>)}
        </div>
    };
}

export default CategoriasSelector;