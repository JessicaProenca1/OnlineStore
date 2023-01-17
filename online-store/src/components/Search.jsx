import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
   render() {
    const { handleClick, handleChange } = this.props; 
    return (
      <div>
        <form onSubmit={handleClick}>
          <input
            type="text"
            onChange={handleChange}
          />

          <button
            type="submit"
            id="searchButton"
          >
            Pesquisar
          </button>
        </form>        
        <Link to="/carrinho">Seu Carrinho de Compras</Link>    
        
      </div>
    );
  }
}

export default Search;