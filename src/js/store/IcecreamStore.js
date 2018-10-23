
class IceCreamStore  {

    iceCreams = [];

    addIceCream(flavor , color) {
        this.iceCreams.push({flavor , color});
    }
}

const store = new IceCreamStore();
export default store;

// For debugging purpose, let's save the store as a property of the window object
// (we will have the ability to approach it wherever we want)