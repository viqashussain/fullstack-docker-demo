import React, { Component } from 'react';
import autobind from 'class-autobind';
import './ShoppingList.css';

export class ShoppingList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shoppingListItems: [],
            isLoading: false,
            newItem: {
                name: '',
                price: ''
            }
        }

        autobind(this);
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetch('http://localhost:5005/api/shoppinglist')
            .then(response => response.json())
            .then(data => this.setState({ shoppingListItems: data }))
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });
    }

    addItem() {
        this.setState({
            isLoading: true
        });
        fetch("http://localhost:5005/api/shoppinglist",
            {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                body: JSON.stringify(this.state.newItem)
            }).then(() => {
                this.setState({
                    shoppingListItems: [...this.state.shoppingListItems, this.state.newItem],
                    newItem: {
                        name: '',
                        price: ''
                    }
                });
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });;
    }

    newItemNameChange(event) {
        const val = event.target.value;
        this.setState(prevState => ({
            newItem: {
                ...prevState.newItem,
                name: val
            }
        }));
    }

    newItemPriceChange(event) {
        const val = event.target.value;
        this.setState(prevState => ({
            newItem: {
                ...prevState.newItem,
                price: val
            }
        }));
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? (<div className="spinner"></div>) : ('')}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shoppingListItems.map((item, i) =>
                            <tr key={i}>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                                <th></th>
                            </tr>
                        )}
                        <tr>
                            <td><input onChange={this.newItemNameChange} value={this.state.newItem.name} /></td>
                            <td><input onChange={this.newItemPriceChange} value={this.state.newItem.price} /></td>
                            <td><button onClick={this.addItem} type="button" className="btn btn-primary">Add New Item</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}