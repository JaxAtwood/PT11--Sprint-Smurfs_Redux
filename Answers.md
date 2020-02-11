1. What problem does the context API help solve?

answer: prop-drilling. when you use context, you can manage your state and store data in the context itself

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

answer: actions are the action (what you want to be done or the event), reducers are a way to pass in the initial state or value, update it as defined by the code or with user input (like a text field or a button click), then returning the updated state. Store is where state is being held. The only way to change it is by dispatching an action.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

answer: The way I understand it is that Application state is "global" whereas component state is "lcoal" or specific to the component. Redux allows us to have dumb components and manage state in the store. I think a small app with minimal state would be fine using application state concepts whereas the more state there is to manage, the more it may be better to compartmentalize them.. or maybe it is vice-versa where you would want to factor in performance and manage state globally as opposed to componently because it may bog things down.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

answer: to explain this, I have to break it down a bit. Synchronous means it can only do one thing at a time. Asynchronous means that more than one, or multiple, thing(s) can be done at a time. it also means you don't have to wait for the first thing to be done before the next one fires. Middleware is a fucntion or set of functions that allow access the actions simply put. Like in an API call for example. That being said, redux-thunk is middleware that works with Redux. A promise is what we use after we have dispatched our action and outlines the next event to occur like get and then in an API call. Thunk takes the data and manipulates it. If it is an action, it sends it through the reducer for the action to be completed if it's a function, it passes the dispatch to it instead. I hope this makes sense becayse it makes sense in my noggin.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

answer: I am conflicted. I appreciate Redux but there's so much to it. Hooking up this and that and mapping state to props when I could just use context. Maybe I don't fully understad them enough?