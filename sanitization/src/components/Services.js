import React, { Component } from 'react'

export default class Services extends Component {
    render() {
           //Destructing
           const {title,text}=this.props;
           return (
               //<h3 style={{textAlign:"center",color:"red"}}>Nabvar App</h3>
               <div class="card text-center" style={{width:"18rem",height:"15%",backgroundColor:"lightskyblue",float:"left"}}>
                   <div class="card-body" style={{float:"left",display:"inline"}}>
                                <h3 class="card-title" style={{color:"darkblue"}}>{title}</h3>
                                <p class="card-text" style={{fontSize:"14px"}}>{text}</p>
                                <a href="#" class="btn btn-primary">Daha Fazla Bilgi</a>
                    </div>
                    &nbsp;
               </div>

           )
    }
}
