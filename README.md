Context API Implementation:

The Context API is a React feature that enables components to share some data without passing props through every level of the component tree.

In the Todo List application, the Context API is used to manage the global state of the todos list,
which includes the todos themselves and functions to manipulate them (add or remove todos).

A TodoContext is created to provide a way to pass the todos data and functions down the component tree
without having to pass props manually at every level.

A TodoProvider component is implemented to encapsulate the state and functions. 
It uses the useState hook to maintain the todos array and provides functions to add and remove todos.

The TodoProvider wraps the root App component, making the context available to all child components within the application.

The TodoList and TodoForm components consume the context using the useContext hook, 
which allows them to access the todos state and functions directly without prop drilling.
