import { observable, action } from "mobx";
import IceCream from "../../components/IceCream";

class IceCreamStore {
    id = 0;
    @observable iceCreams = [{ flavor: "vanilla", color: "cream" }];

    @action addIceCream = (flavor, color) => {
        this.id++;
        this.iceCreams.push(new IceCream(flavor, color));
    }

    @action deleteIcecream = (id) => {
        let index = this.getIndexById(id);
        this.iceCreams.splice(index, 1);
    }

    getIndexById = (id) => {
        let index;
        for (let i = 0; i < this.iceCreams.length; i++) {
            let currentId = this.iceCreams[i].id;
            if (currentId === id) {
                index = i
                return index;
            }
        }
    }
}

    // @action deleteIcecream = (id) => {
    //     this.iceCreams.find(i => i.id = id) ;
    //     this.iceCreams.splice(id, 1)
    // }



    const store = new IceCreamStore();
    export default store;

// For debugging purpose, let's save the store as a property of the window object
// (we will have the ability to approach it wherever we want)

// In the code above we declared the iceCreams property as observable. 
// Now we can observe the iceCreams property from a component that
//  uses this property, and through that invoke the render
//   function for every change in the iceCreams array.

//  MobX recommends marking functions that cause changes in the 
// data with an action decorator:
// In strict mode we can ask mobx to enforce actions. This strictness will limit 
// the ability to change the store data outside of an action function.
