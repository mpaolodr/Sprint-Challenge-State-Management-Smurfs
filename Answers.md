1. What problem does the context API help solve?

-- context API provides another way of passing data to other components without props drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-- ACTIONS - actions triggered by an event that determines which part of state should be modified
REDUCERS - takes those actions and checks specifically which part of state should be modified
STORE - holds all data that you want to be accesed by other components in your app and modified by reducers

STORE's considered single source of truth maybe because it holds the data that determines your UI

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-- APPLICATION STATE is global and can be accessed or modified by any other components in your App while COMPONENT STATE is local
meaning it can only be managed within the component

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

--redux thunk allows us to intercept an action and instead of returning an action with our action creators, we return a function
which allows us to make api calls when that action is triggered

5. What is your favorite state management system you've learned and this sprint? Please explain why!

--REDUX. because of how organized I feel it is.
