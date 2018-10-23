#  the communication between the components became more and more complicated using the props only. We had to bubble some data up and down from one place in the application to other places.

# That's where a state management architecture becomes necessary. Today we will learn one of many state management solutions - MobX

# What is MobX? => MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP). The philosophy behind MobX is very simple: 
Anything that can be derived from the application state, should be derived. Automatically.

# In other words, MobX is a JS library that applies an application data-flow architecture that organizes and manages the application data.

# MobX follows four clearly distinguishable concepts that help manage the application:
* Observable State: A global object that holds the application data - going back to one place for the data.

* Computed values: These observe the data object and compute information for the component.

* Reactions: Side effects that happen automatically when the state changes - like view changes.

* Actions: Functions that modify the state

# It all starts with an event (like a button click). The events trigger some actions (concept number 4). The action modifies the state (concept number 1) The changes in the state trigger changes in the computed values (concept number 2). The changes in the values will trigger the reactions - (concept number 3). The reactions may trigger some more actions, and then the circle will restart.
<!-- https://s3-us-west-2.amazonaws.com/learn-app/mobx+data+flow.png -->

# The Store => So far our data was spread in between the components, in the components' state. The idea behind MobX, is to manage all the data in one place only. We call it the Store.

# CREATING A STORE
* Start by creating a new project => create-react-app
*  inside project => npm install mobx --save , npm install mobx-react --save
* Create a new folder for the store => src/js/store
* In the new folder create a new file - IcecreamStore.js and finally initialize a new store:

class IceCreamStore {
    iceCreams = [];
 
    addIceCream(flavor ,color) {
	this.iceCreams.push({ flavor, color });
    }
}

const store = new IceCreamStore();
export default store;

* Add the following to your index.js:

import store from './js/store/IcecreamStore';
console.log(store)

window.store = store;

* npm start

# Since we didn't use the setState function, React wasn't notified about the changes we made in the data. Therefore react didn't render the view accordingly.

# So how will MobX work? => MobX gives us a solution to the limitation above. It uses observables to avoid calling the setState function for every change in the data.

* WHAT IS OBSERVABLE? The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods

# There are two sides to the observable pattern - the Observable and the Observer. 
* The Observer observes any change in the Observable subject.

In our case, we want to observe all the changes that will be done in the store. 
we want our store to become an observable and we want the components to be observers of the store, and thereby observe it. This way, for every change in our store, the component will react and re-render if necessary.

* DECLARING THE STORE AS OBSERVABLE => To enable observing the store all we need to do is declare the store as an observable store. => To enable observing the store all we need to do is declare the store as an # observable # store.
 To make the syntax easier for us, we will use es7 decorators syntax that gives us the @ sign.

 # npm run eject
