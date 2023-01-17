import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
  // state = {
  //   produtoPorPesquisa: '',
  //   resultsProdutoPorPesquisa: [],
  //   erro: false,
  // }

  // handleChange = ({ target }) => {
  //   this.setState({
  //     produtoPorPesquisa: target.value,
  //   })
  // }

  // handleClick = async (event) => {
  //   event.preventDefault();
  //   const { produtoPorPesquisa } = this.state;
  //   const produtos = await getProductsFromCategoryAndQuery('', produtoPorPesquisa);
  //   const resultsProdutoPorPesquisa = produtos.results;
  //   this.setState({
  //     resultsProdutoPorPesquisa,    
  //     erro: false,
  //   }, () => {
  //     if (resultsProdutoPorPesquisa.length === 0){
  //       this.setState({erro: true})
  //     }      
  //   })  
  // }

  getSavedProducts = () => {
    const cartProducts = localStorage.getItem('products');
    return cartProducts ? JSON.parse(cartProducts) : [];
  };

  saveProduct = (title, thumbnail, price, id) => {
    const cartProducts = this.getSavedProducts();
    // se o id já existir, vamos aumentar o qtd, se não existir, vamos setar em 1 e aumentar a quantidade de produtos no carrinho
    const has = cartProducts.some((element) => element.id === id);
    if (has) {
      const existingProduct = cartProducts.map((element) => {
        if (element.id === id) {
          element.qtd += 1;
        }
        return element;
      });
      localStorage.setItem('products', JSON.stringify(existingProduct));
    } else {
      const newCartProducts = [...cartProducts, {
        title,
        thumbnail,
        price,
        id,
        qtd: 1,
      }];
      localStorage.setItem('products', JSON.stringify(newCartProducts));
    }
  };

  render() {
    const { handleClick, handleChange } = this.props; 
    // console.log(resultsProdutoPorPesquisa); 

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
        {/* {erro ? <h2>Nenhum produto encontrado. Faça uma nova busca.</h2> : <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>} */}
        {/* {resultsProdutoPorPesquisa.map(({ id, title, thumbnail, price }) => (
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
                onClick={ () => this.saveProduct(id, title, thumbnail, price) }
              >
                Adicionar ao carrinho
              </button>
          </div>
        ))
        } */}
        
      </div>
    );
  }
}

export default Search;