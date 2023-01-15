import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './apiFunctions';
import OqueComprar from './OqueComprar';

class Categorias extends Component {
  state = {
    categories: [],
    produtosPorCategoria: [],
  }

  componentDidMount() {
    getCategories()
      .then((categories) => { this.setState({ categories }); });

  }

  handleClick = async ({target: { id }}) => {
    const produtos = await getProductsFromCategoryAndQuery(id, '');
    const produtosPorCategoria = produtos.results;
    this.setState({
      produtosPorCategoria,
    })

  }

  render() {
    const { categories, produtosPorCategoria } = this.state;
    return (
      <div>
        <h3>
          Categorias
        </h3>
        <aside>
        {
          categories.map(({id, name}) => (
            <>
            <label className="categoria" htmlFor={ id } key={ id }>
                <input
                  type="radio"
                  id={ id }
                  value={ id }
                  name="category"
                  onClick={ this.handleClick }
                />
                { name }
            </label>
            </>
          ))
        }
        </aside>
        <main>
          {/* <OqueComprar listaprodutosCategoria={ produtosPorCategoria }/> */}
          {
            produtosPorCategoria.map(({ id, title, thumbnail, price }) => (
              <div className="card" key={id}>
              <h2>{title}</h2>
              <img src={thumbnail} alt={title}></img>
              <h3>{price}</h3>
              </div>
            ))
          }
        </main>
      </div>
    );
  }
}

export default Categorias;