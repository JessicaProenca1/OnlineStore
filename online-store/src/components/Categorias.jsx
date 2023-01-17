import React, { Component } from 'react';

class Categorias extends Component {
  // state = {
  //   categories: [],
  //   produtosPorCategoria: [],
  // }

  // componentDidMount() {
  //   getCategories()
  //     .then((categories) => { this.setState({ categories }); });

  // }

  // handleClick = async ({target: { id }}) => {
  //   const produtos = await getProductsFromCategoryAndQuery(id, '');
  //   const produtosPorCategoria = produtos.results;
  //   this.setState({
  //     produtosPorCategoria,
  //   })

  // }

  render() {
    // const { categories, produtosPorCategoria } = this.state;
    const { handleClick, categories } = this.props; 

    return (
      <div>
        <h3>
          Categorias
        </h3>
        <aside>
        {
          categories.map(({id, name}) => (
            <div key={ id }>
            <label className="categoria" htmlFor={ id } >
                <input
                  type="radio"
                  id={ id }
                  value={ id }
                  name="category"
                  onClick={ handleClick }
                />
                { name }
            </label>
            </div>
          ))
        }
        </aside>
        <main>
          {/* {
            produtosPorCategoria.map(({ id, title, thumbnail, price }) => (
              <div className="card" key={id}>
              <h2>{title}</h2>
              <img src={thumbnail} alt={title}></img>
              <h3>{price}</h3>
              <Link
                to={ { pathname: `/${id}`,
                  state: { title, thumbnail, price, id } } }
              >
                Detalhes
              </Link>
              <button
                type="button"
                onClick={ () => this.saveProduct(title, thumbnail, price, id) }
              >
                Adicionar ao carrinho
              </button>
              </div>
            ))
          } */}
        </main>
      </div>
    );
  }
}

export default Categorias;