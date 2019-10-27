import React from 'react';
import ArticulosController from '../../controller/articulos/articulos_controller';
import Table from '../common/table';
import {isEmpty} from '../../controller/common/utils';

class ArticulosList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articulos: [],
            headers: []
        };
    }
    

    componentDidMount(){
        ArticulosController.getInstance().getArticulos(responce => {
            var articulos = responce.data;
            const headers =  ['#', 'Artículo', 'Descripción', 'Cantidad', 'Precio'];
            this.setState({articulos, headers});
        });
    }

    render(){
        return isEmpty(this.state.articulos) ? <div>Loading...</div>: <Table headers={this.state.headers} content={this.state.articulos} />
    }
};

export default ArticulosList;