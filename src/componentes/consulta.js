import React, {Component} from 'react';
import './consulta.css'
import './consulta.scss'

class Consulta extends Component{
    state = {
        pages: 10
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
        let tabla ='';
        if(this.state.datos===undefined){

        } else {
            console.log(typeof(this.state.datos))
            only_id = this.state.datos.map( element => {
                return(
                    <tr>
                        <td>{element._id}</td>
                    </tr>
                )
            })
            
        }
        
        if(this.state.data===undefined){

        } else {
            
            //console.log(this.state.data.results)
            tabla = this.state.data.results.map( (element,index) => {
                if(index<this.state.pages && index>this.state.pages-10){
                    if(element.probabilityofprecip>=60 || element.relativehumidity>50){
                        return(
                            <tr>
                                <td onClick={this.desplegar}>{element._id}</td>
                                <td>{element.cityid}</td>
                                <td>{element.name}</td>
                                <td>{element.state}</td>
                                <td className='celda-humedad'>{element.probabilityofprecip}</td>
                                <td>{element.relativehumidity}</td>
                                <td>{element.lastreporttime}</td>
                                <td>Sí</td>
                            </tr>
                        )
    
                    } else {
                        return(
                            <tr>
                                <td>{element._id}</td>
                                <td>{element.cityid}</td>
                                <td>{element.name}</td>
                                <td>{element.state}</td>
                                <td className='celda-humedad'>{element.probabilityofprecip}</td>
                                <td>{element.relativehumidity}</td>
                                <td>{element.lastreporttime}</td>
                                <td>No</td>
                            </tr>
                        )
    
                    }

                }
                //console.log(element._id)
                
            })

        }
        if(this.state.pages>10 && this.state.pages<90){
            return(
                <div>
                    <table>
                    <thead>
                        <tr className='tabla-titulos'>
                            <th >_id</th>
                            <th >cityid</th>
                            <th >name</th>
                            <th >state</th>
                            <th className='celda-titulo'>probabilityofprecip</th>
                            <th >relativehumidity</th>
                            <th>Lastreporttime</th>
                            <th >Llueve</th>
                        </tr>
                        </thead>
                        {tabla}
                    </table>
                    <div className='botones'>
                    <div onClick={this.atras} className='button'>Atras</div>
                    <div onClick={this.siguiente} className='button'>Siguiente</div>
                    
                    </div>

                    <table className='second-table'>
                        <thead >
                    
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
        } else if(this.state.pages>=90){
            console.log("Entr!")
            return(
                <div>
                    <table>
                        <thead>
                    <tr className='tabla-titulos'>
                        <th >_id</th>
                        <th >cityid</th>
                        <th >name</th>
                        <th >state</th>
                        <th className='celda-titulo'>probabilityofprecip</th>
                        <th >relativehumidity</th>
                        <th >Lastreporttime</th>
                        <th >Llueve</th>
                    </tr>
                    </thead>
                    {tabla}
                    </table>
                    <div className='botones'>
                    
                    <div onClick={this.atras} className='button'>Atras</div>
                    
                    </div>

                    <table className='second-table'>
                        <thead>
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
        } else {
            return(
                <div>
                    <table>
                    <thead>
                    <tr className='tabla-titulos'>
                        <th >_id</th>
                        <th >cityid</th>
                        <th >name</th>
                        <th >state</th>
                        <th className='celda-titulo'>probabilityofprecip</th>
                        <th >relativehumidity</th>
                        <th >Lastreporttime</th>
                        <th >Llueve</th>
                    </tr>
                    </thead>
                    {tabla}
                    </table>
                    <div className='botones'>
                    
                    <div onClick={this.siguiente} className='button'>Siguiente</div>
                    
                    </div>

                    <table className='second-table'>
                        <thead>
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
}
export default Consulta;