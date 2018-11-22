import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, observable } from 'mobx';

// @inject("store")   => we don't need the entire store injected here! only:
// we're injecting only our "addIceCream" function => used a function inside the @inject decorator.
//  In this function, we can choose any property we want to add to our props. In this example we only added the addIceCream function.

@inject(allStores => ({
    addIceCream: allStores.store.addIceCream,
    getIndexById: allStores.store.getIndexById
}))
@observer
class IceCreamForm extends Component {

    @observable iceCream = {flavor:"",  color:""};

    @action handleInputChange = (e) => {
        this.iceCream[e.target.name] = e.target.value;
    }

    submitForm = (e) => {
        this.props.addIceCream(this.iceCream.flavor, this.iceCream.color)
        this.iceCream = {flavor:"",  color:""}; // clearing inputs
    }

    render() {
        let iceCream = this.iceCream;
        return (
            <div className="form">
                <header className="form-header">
                    <h1 className="form-title"> My IceCreams ♥ </h1>
                </header>

                <input
                    className="flavor"
                    type="text"
                    name="flavor"
                    value={iceCream.flavor}
                    onChange={this.handleInputChange}
                    placeholder="type flavor here" />
                <input
                    className="color"
                    type="text"
                    name="color"
                    value={iceCream.color}
                    onChange={this.handleInputChange}
                    placeholder="type color here" />
                <button
                    onClick={this.submitForm}
                    value="submit"> ADD </button>
            </div>
        );
    }
}
export default IceCreamForm;

// we wanted the form component to observe the icecream object 
// and to re-render the view according to the changes made 
// in the icecream, we added an @observe decorator to the component.

// Since we didn't use the setState function to change the data,
// React is not aware of the changes in the input value and it keeps 
// on rendering the first value of the input: "".
// Of course, this is where MobX's Observable comes in! 
// Let's make our iceCream object into an
// observable and let's make our IcecreamForm to an observer class.

// provider and it's a great solution for our mobx store. 
// We can provide the iceCreamStore to all child components 
// of the App component and then inside each child component 
// just inject the 
// store if the component needs it, using the inject decorator.

// We will want to provide the IceCreamStore to the highest 
// component in the components tree that uses it =>  then, we can inject the store from any child component.

// when we inject a part of the store we need to explicitly define the correct
//  function or use a arrow function inside the store so the reference will stay... 