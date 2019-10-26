import React from 'react';
import ArticulosController from '../../controller/articulos/articulos_controller';
import Table from '../common/table';

class ArticulosList extends React.Component{
    constructor(props){
        this.state = {
            articulos: []
        };
        this.headers = ['#', 'Artículo', 'Descripción', 'Cantidad', 'Precio'];
    }
    

    componentDidMount(){
        ArticulosController.getInstance().getArticulos(responce => {
            const articulos = responce.data;
            this.setState({articulos});
        });
    }

    render(){
        return <Table header={this.headers} content={this.state.articulos} />
    }
};

export default ArticulosList;