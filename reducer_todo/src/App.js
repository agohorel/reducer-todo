import React, {useReducer} from 'react';

import {todoReducer, initialState} from "./reducers/reducer"

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div>

    </div>
  );
}

export default App;
