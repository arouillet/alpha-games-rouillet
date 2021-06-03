import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar bg-dark navbar-expand-sm navbar-dark fixed-top">
        <a class="navbar-brand" href="index.html">Alpha Games</a>   
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarItems">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarItems">
            <ul class="navbar-nav ml-auto">
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