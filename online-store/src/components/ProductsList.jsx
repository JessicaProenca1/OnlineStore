import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {
  state = {
    produtoPorPesquisa: '',
    resultsProdutos: [],
    erro: false,
  }

  render() {
    const { resultsProdutos, erro, saveProduct } = this.props;
    return (
      <div>
        {erro ? <h2>Nenhum produto encontrado. Faça uma nova busca.</h2> : <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>}
        {
          resultsProdutos.map(({ id, title, thumbnail, price }) => (
            <div className="card" key={id}>
              <h2>{title}</h2>
              <img src={thumbnail} alt={title}></img>
              <h3>{price}</h3>
              <Link
                to={{
                  pathname: `/${id}`,
                  state: { title, thumbnail, price, id }
                }}
              >
                Detalhes
              </Link>
              <button
                type="button"
                onClick={() => saveProduct(title, thumbnail, price, id)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))
        }
      </div>
    )
  }
}
