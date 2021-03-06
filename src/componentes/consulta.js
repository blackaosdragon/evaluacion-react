import React, {Component} from 'react';
import './consulta.css'

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
            this.setState({
                data
            })
            
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
        
        let tabla ='';
        
        if(this.state.data===undefined){

        } else {
            console.log(this.state.data.results)
            tabla = this.state.data.results.map( (element,index) => {
                if(index<this.state.pages && index>this.state.pages-10){
                    if(element.probabilityofprecip>=60 || element.relativehumidity>50){
                        return(
                            <tr>
                                <td onClick={this.desplegar}>{element._id}</td>
                                <td>{element.cityid}</td>
                                <td>{element.name}</td>
                                <td>{element.state}</td>
                                <td>{element.probabilityofprecip}</td>
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
                                <td>{element.probabilityofprecip}</td>
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
                    <tr>
                        <th>_id</th>
                        <th>cityid</th>
                        <th>name</th>
                        <th>state</th>
                        <th>probabilityofprecip</th>
                        <th>relativehumidity</th>
                        <th>Lastreporttime</th>
                        <th>Llueve</th>
                    </tr>
                    {tabla}
                    <div className='botones'>
                    <div onClick={this.atras} className='button-back'>Atras</div>
                    <div onClick={this.siguiente} className='button-next'>Siguiente</div>
                    
                    </div>
                    
                </div>
            )
        } else if(this.state.pages>=90){
            console.log("Entr!")
            return(
                <div>
                    <tr>
                        <th>_id</th>
                        <th>cityid</th>
                        <th>name</th>
                        <th>state</th>
                        <th>probabilityofprecip</th>
                        <th>relativehumidity</th>
                        <th>Lastreporttime</th>
                        <th>Llueve</th>
                    </tr>
                    {tabla}
                    <div className='botones'>
                    
                    <div onClick={this.atras} className='button-back'>Atras</div>
                    
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <tr>
                        <th>_id</th>
                        <th>cityid</th>
                        <th>name</th>
                        <th>state</th>
                        <th>probabilityofprecip</th>
                        <th>relativehumidity</th>
                        <th>Lastreporttime</th>
                        <th>Llueve</th>
                    </tr>
                    {tabla}
                    <div className='botones'>
                    
                    <div onClick={this.siguiente} className='button-next'>Siguiente</div>
                    
                    </div>
                </div>
            )

        }
        
        
    }
}
export default Consulta;