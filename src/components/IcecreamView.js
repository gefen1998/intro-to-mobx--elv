import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

@inject('store')
@observer
class IcecreamView extends Component {
    store = this.props.store;
    
    @observable iceCream = { flavor: "", color: "" };

    handleDeleteButton = (e) => {
        let parsed = parseInt(e.target.id);
        this.props.store.deleteIcecream(parsed)
    }

    render() {
        return (
            <ul>
                {this.store.iceCreams.map((iceCream, i) =>
                    <li key={i} id={i}>
                        <b> flavor: </b> {iceCream.flavor},
                        <b> color: </b> {iceCream.color}
                        <button
                            onClick={this.handleDeleteButton}
                            value={iceCream.id} > DELETE ME :( </button>
                    </li>)}
            </ul>
        );
    }
}
export default IcecreamView;