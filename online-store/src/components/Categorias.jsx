import React, { Component } from 'react';

class Categorias extends Component {
  render() {
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
      </div>
    );
  }
}

export default Categorias;