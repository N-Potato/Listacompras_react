import React from "react";

import Button from "./Button";

import './AppLista.css' 

import Lista from "./Lista";

export default class AppLista extends React.Component{
    constructor(props){
        super(props)
        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
        this.state = {
            isLogged: false
        }
    }

    sair(){
        this.setState({
            isLogged: false
        })
    }

    entrar(){
        this.setState({
            isLogged: true
        })
    }
    
    render(){
       return(
           <div className="divAppLista">
               {this.state.isLogged? <h1>Seja bem vindo</h1>:<h1>Entre para fazer sua lista</h1>}
                {this.state.isLogged === true ?
                <div>
                    <Button onClick={this.sair} className="logado">
                        Sair
                    </Button>
                    <Lista />
                </div>
                :<div>
                    <Button onClick={this.entrar} className="deslogado">
                        Entrar
                    </Button>
                </div>}
           </div>
       ) 
    }
}