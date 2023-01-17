import React, { Component } from 'react'
import Search from './Search'
import Categorias from './Categorias';
import ProductsList from './ProductsList';
import { getProductsFromCategoryAndQuery, getCategories } from './apiFunctions';


export default class Home extends Component {
  state = {
    produtoPorPesquisa: '',
    resultsProdutoPorPesquisa: [],
    categories: [],
    produtosPorCategoria: [],
    erro: false,
  }

  componentDidMount() {
    getCategories()
      .then((categories) => { this.setState({ categories }); });

  }

  handleChange = ({ target }) => {
    this.setState({
      produtoPorPesquisa: target.value,
    })
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { id } = event.target;
    const { produtoPorPesquisa } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(id, produtoPorPesquisa);
    const resultsProdutoPorPesquisa = produtos.results;
    const produtosPorCategoria = produtos.results;
    console.log(resultsProdutoPorPesquisa);
    console.log(produtosPorCategoria);
    this.setState({
      resultsProdutoPorPesquisa,  
      produtosPorCategoria,  
      erro: false,
    }, () => {
      if (resultsProdutoPorPesquisa.length === 0){
        this.setState({erro: true})
      }      
    })  
  }

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
    // const {resultsProdutoPorPesquisa} = this.state
    // console.log(resultsProdutoPorPesquisa);
    return (
      <>
      <Search {...this.props} {...this.state} handleClick={this.handleClick} handleChange={this.handleChange}/>
      <Categorias {...this.props} {...this.state} handleClick={this.handleClick}/>
      <ProductsList {...this.props} {...this.state}/>
      </>
    )
  }
}
