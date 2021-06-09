import React, { Component } from "react";

class ItemListContainer extends Component {
    render() {
      return (
        <div class="containerItemList">
            <h1>Bienvenido {this.props.name}</h1>
        </div>
      );
    }
  }
  
  
  export default ItemListContainer;