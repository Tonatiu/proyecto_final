import React from 'react';
import Primera from '../../static/img/Primera.png'
import Segunda from '../../static/img/Segunda.png'
import Tercera from '../../static/img/Tercera.png'

class HomePage extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return <div className="container-fluid">
            <div className="row">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Primera} className="img-fluid"/>
                        </div>
                        <div className="carousel-item">
                            <img src={Segunda} className="img-fluid"/>
                        </div>
                        <div className="carousel-item">
                            <img src={Tercera} className="img-fluid"/>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>    
            </div>
            <div className="row">
                :v
            </div>
        </div>
    };
};

export default HomePage;