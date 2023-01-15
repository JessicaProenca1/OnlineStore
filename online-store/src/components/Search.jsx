import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';
import { getProductsFromCategoryAndQuery } from './apiFunctions';
import OqueComprar from './OqueComprar';

class Search extends Component {
  state = {
    produtoPorPesquisa: '',
    resultsProdutoPorPesquisa: [],
  }

  handleChange = ({target}) => {
    this.setState({
      produtoPorPesquisa: target.value,
    })
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { produtoPorPesquisa } = this.state;
    const produtos = await getProductsFromCategoryAndQuery('', produtoPorPesquisa);
    const resultsProdutoPorPesquisa = produtos.results;
    this.setState({
      resultsProdutoPorPesquisa,
    })

  }

    render() {
      const { listaprodutos } = this.props;
      const { resultsProdutoPorPesquisa } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleClick }>
          <input
            type="text"
            onChange={ this.handleChange }
          />

          <button
            type="submit"
            id="searchButton"
          >
            Pesquisar
          </button>
        </form>
        <p>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>  
        <Link to="/carrinho">Seu Carrinho de Compras</Link> 
        {
            resultsProdutoPorPesquisa.map(({ id, title, thumbnail, price }) => (
              <div className="card" key={id}>
              <h2>{title}</h2>
              <img src={thumbnail} alt={title}></img>
              <h3>{price}</h3>
              </div>
            ))
          }
        <Categorias/> 
        {/* <OqueComprar listaprodutos={ resultsProdutoPorPesquisa }/> */}
      </div>
    );
  }
}

export default Search;