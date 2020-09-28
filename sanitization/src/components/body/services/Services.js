import React, { Component } from 'react'
import "./Services.css"

export default class Services extends Component {
    render() {
           //Destructing
           const {title,text}=this.props;
           return (
               //<h3 style={{textAlign:"center",color:"red"}}>Nabvar App</h3>
               <div class="card text-center">
                   <div class="card-body">
                                <h3 class="card-title">{title}</h3>
                                <p class="card-text">{text}</p>
                                <a href="#" class="btn btn-primary">Daha Fazla Bilgi</a>
                    </div>
                    &nbsp;
               </div>

           )
    }
}
