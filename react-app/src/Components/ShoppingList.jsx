import React, { Component } from 'react';

export class ShoppingList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shoppingListItems: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/shoppinglist')
            .then(response => response.json())
            .then(data => this.setState({ shoppingListItems: data }));
    }

    render() {
        return (
            <table>
                {this.state.shoppingListItems.map((item, i) =>
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                )}
            </table>
        )
    }
}