import React, { Component } from 'react';
import Filters from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

let PRODUCTS = {
    '1': {id: 1, category: 'Home Decor', price: '$49.99', name: 'Candle'},
    '2': {id: 2, category: 'Music', price: '$400', name: 'Guitar'},
    '3': {id: 3, category: 'Music', price: '$500', name: 'Tabla'},
    '4': {id: 4, category: 'Furniture', price: '$799', name: 'Bed Frame'},
    '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$100', name: 'Desk'}
 };

 class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            products: PRODUCTS
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    handleSave(product) {
        if (!product.id) {
            product.id = new Date().getTime()
        }
        this.setState((prevState) => {
            let products = prevState.products
            products[product.id] = product
            return { products }
        });
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h1 className="col-md-4">My Inventory </h1> <br/>
                <Filters onFilter={this.handleFilter} />
                <ProductTable products={this.state.products} filterText={this.state.filterText} onDestroy={this.handleDestroy} />
                <ProductForm onSave={this.handleSave} />
            </div>
        )
    }
}

 export default Product