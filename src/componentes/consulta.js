import React, {Component} from 'react';
import './consulta.css'
import './consulta.scss'



class Consulta extends Component{
    state = {
        pages: 10,
        'index-start': 0,
        'index-end': 9,
        info: 'data'
    }
    
    componentDidMount(){
        fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
        .then( response => {
            return response.json();
        })
        .then( data => {            
            this.setState({
                datos: data.results
            })
                       
        }).catch( err => {
            console.log(err);
        })
    } 
    componentDidUpdate = () => {

    }
    desplegar = (event) => {        
        const selected = event.target.innerText;
        const encontrado = this.state.datos.find( element => element._id===selected)
        this.setState({
            seleccionado: encontrado
        })
    }
    handleNext = () => {
        this.setState({
            'index-start': this.state['index-start']+10,
            'index-end': this.state['index-end']+10
        })
        console.log(this.state)
    }
    handleBack = () => {
        this.setState({
            'index-start': this.state['index-start']-10,
            'index-end': this.state['index-end']-10
        })
        console.log(this.state)
    }
    
    render(){
        
        let only_id = '';
        if(this.state.datos===undefined){

        } else {

            //only_id =
            let list = this.state.datos.slice(this.state['index-start'],this.state['index-end']);
            only_id = list.map( (element,index) => {
                if(this.state.seleccionado===undefined){
                    return(
                        <tr key={index}>
                            <td onClick={this.desplegar} > {element._id}</td>
                        </tr>
                    )
                } else {
                    if(this.state.seleccionado===element){
                        return(
                            <tr key={index}>
                            <td onClick={this.desplegar} > {element._id}</td>
                            <td > {element.cityid}</td>
                            <td > {element.name}</td>
                            <td > {element.state}</td>
                            <td > {element.probabilityofprecip}</td>
                            <td > {element.relativehumidity}</td>
                            <td > {element.lastreporttime}</td>
                            </tr>
                        )
                    } else {
                        return(
                            <tr key={index}>
                                <td onClick={this.desplegar} > {element._id}</td>
                            </tr>
                        )
                    }
                    
                }
                
            })
        }
        return(
            <div>
                <table className='second-table'>
                    <thead className='second-title'>                    
                        <tr>
                            <th>_id</th>
                            <th>City ID</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Probabilidad de precipitación</th>
                            <th>Humedad relativa</th>
                            <th>fecha</th>
                            <th>Lluvia</th>
                        </tr>
                    
                    </thead>
                    {only_id}
                </table>
                <div className='botones'>
                {this.state['index-start']>1 ? <div className='button' onClick={this.handleBack}>Atras</div>: <div></div>}
                <div>{this.state['index-start']+1} - {this.state['index-end']+1}</div>
                {this.state['index-end']<90 ? <div className='button' onClick={this.handleNext}>Siguiente</div>: <div></div>}
                </div>
            </div>
        )
        
    }
}
export default Consulta;