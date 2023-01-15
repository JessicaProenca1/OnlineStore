import React, { Component } from 'react'

export default class OqueComprar extends Component {
  render() {
    const { listaprodutosSearch, listaprodutosCategoria } = this.props;

    return (
      <>
        <div>
          {
            listaprodutosSearch.map(({ title, thumbnail, price }) => (
              <div className="card">
                <h2>{title}</h2>
                <img src={thumbnail} alt={title}></img>
                <h3>{price}</h3>
              </div>
            ))
          }
        </div>
        <div>
          {
            listaprodutosCategoria.map(({ id, title, thumbnail, price }) => (
              <div className="card" key={id}>
                <h2>{title}</h2>
                <img src={thumbnail} alt={title}></img>
                <h3>{price}</h3>
              </div>
            ))
          }
        </div>
      </>
    )
  }
}
