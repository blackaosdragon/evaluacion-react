import React, {Component} from 'react';
import './consulta.css'
import './consulta.scss'

class Consulta extends Component{
    state = {
        pages: 10,
        'index-start': 0,
        'index-end': 9
    }
    
    componentDidMount(){
        fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
        .then( response => {
            return response.json();
        })
        .then( data => {
            //console.log(data.results);
            this.setState({
                datos: data.results
            })
            this.setState({
                data
            })
            console.log(this.state)
        }).catch( err => {
            console.log(err);
        })
    }
    siguiente = () => {
        if(this.state.pages>90){

        } else {
            this.setState({
                pages: this.state.pages+10
            })
        }
        console.log(this.state.pages)
        
    }
    atras = () => {
        if(this.state.pages<=10){

        } else {
            this.setState({
                pages: this.state.pages-10
            })
        }
        console.log(this.state.pages)
    }
    desplegar = () => {
        console.log("Desplegar")
    }
    
    render(){
        
        let only_id = '';
        if(this.state.datos===undefined){

        } else {

            //only_id =
            let list = this.state.datos.slice(this.state['index-start'],this.state['index-end']);
            only_id = list.map( (element,index) => {
                return(
                    <tr >
                        <td > {element._id}</td>
                    </tr>
                )
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
                
            </div>
        )
        
    }
}
export default Consulta;