import React, {Component} from 'react';
import {TableContainer, Table, TableBody, TableHead, TableRow, TableCell} from '@mui/material'
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
                            <TableBody className='tabla-temperaturas'>
                                <TableRow >
                                <TableCell onClick={this.desplegar}>{element._id}</TableCell>
                                <TableCell>{element.cityid}</TableCell>
                                <TableCell>{element.name}</TableCell>
                                <TableCell>{element.state}</TableCell>
                                <TableCell>{element.probabilityofprecip}</TableCell>
                                <TableCell>{element.relativehumidity}</TableCell>
                                <TableCell>{element.lastreporttime}</TableCell>
                                <TableCell>Sí</TableCell>
                                </TableRow>
                            </TableBody>
                        )
    
                    } else {
                        return(
                            <TableBody className='tabla-temperaturas'>
                                <TableRow>
                                <TableCell >{element._id}</TableCell>
                                <TableCell>{element.cityid}</TableCell>
                                <TableCell>{element.name}</TableCell>
                                <TableCell>{element.state}</TableCell>
                                <TableCell>{element.probabilityofprecip}</TableCell>
                                <TableCell>{element.relativehumidity}</TableCell>
                                <TableCell>{element.lastreporttime}</TableCell>
                                <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        )
    
                    }

                }
                //console.log(element._id)
                
            })

        }
        if(this.state.pages>10 && this.state.pages<90){
            return(
                <TableContainer>
                    <Table>
                    <TableHead className='tabla-titulo'>
                    
                    <TableRow >
                        
                    <p className='texto-titulo'><TableCell>_id</TableCell></p>
                        <TableCell style={{color: 'white'}}>cityid</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>state</TableCell>
                        <TableCell>probabilityofprecip</TableCell>
                        <TableCell>relativehumidity</TableCell>
                        <TableCell>Lastreporttime</TableCell>
                        <TableCell>Llueve</TableCell>
                        
                    </TableRow>
                    
                    </TableHead>
                    {tabla}
                    <div className='botones'>
                    <div onClick={this.atras} className='button-back'>Atras</div>
                    <div onClick={this.siguiente} className='button-next'>Siguiente</div>
                    
                    </div>
                    </Table>
                </TableContainer>
            )
        } else if(this.state.pages>=90){
            console.log("Entr!")
            return(
                <TableContainer>
                    <Table>
                    <TableHead className='tabla-titulo'>
                    
                        <TableRow >
                        
                        <TableCell >_id</TableCell>
                        <TableCell>cityid</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>state</TableCell>
                        <TableCell>probabilityofprecip</TableCell>
                        <TableCell>relativehumidity</TableCell>
                        <TableCell>Lastreporttime</TableCell>
                        <TableCell>Llueve</TableCell>
                        
                        </TableRow>
                        
                    </TableHead>
                    {tabla}
                    <div className='botones'>
                    
                    <div onClick={this.atras} className='button-back'>Atras</div>
                    
                    </div>
                    </Table>
                </TableContainer>
            )
        } else {
            return(
                <TableContainer>
                    <Table>
                    <TableHead className='tabla-titulo'>
                    
                    <TableRow >
                    
                        <TableCell>_id</TableCell>
                        <TableCell>cityid</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>state</TableCell>
                        <TableCell>probabilityofprecip</TableCell>
                        <TableCell>relativehumidity</TableCell>
                        <TableCell>Lastreporttime</TableCell>
                        <TableCell>Llueve</TableCell>
                        
                    </TableRow>
                    
                    </TableHead>
                    {tabla}
                    <div className='botones'>
                    
                    <div onClick={this.siguiente} className='button-next'>Siguiente</div>
                    
                    </div>
                    </Table>
                </TableContainer>
            )

        }
        
        
    }
}
export default Consulta;