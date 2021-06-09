import React, { Component } from "react";
import CartWidget from "./CartWidget"
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar bg-light navbar-expand-sm navbar-light fixed-top">
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarItems">
        <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarItems">
        
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="#compras"><CartWidget/></a></li>
                <li class="nav-item"><a class="nav-link" href="#games">Juegos</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">Acerca de</a></li>
            </ul>
        </div>
    </nav>
    );
  }
}


export default NavBar;