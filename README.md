# Tic Tac Toe with React

The purpose of creating this game with React is to learn about concepts like:

- Scope
- State
- Rendering in React

The code works like this:

We have individual `<Square />` components to whom we pass, as a prop, the current `state` of the gameboard.

Each `<Square />` also handles a function that changes the `state`, specifically for their position. Inmeadiately after that, because `state` has just changed, our `<Square />` is updated.

Finally, we added some extra features to store our players name's and to conditionally render them regarding who's turn it is to play. We also use these to render the winner.

You can see the live version at:
https://andresborn.github.io/ttt-react/
