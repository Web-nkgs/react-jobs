import React from "react";

const App = () => {
  const name = 'Jane'
  const x = 10
  const y = 12
  const names = ['Brad', 'Mary', 'Jimmy', 'Sara']
  const loggedIn = true

  return (
    <>
      <div className="text-5xl">App</div>
      <p>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x+y}
      </p>
      <ul>
        { names.map((name, index) => 
          <li key={index}>{name}</li>
        )}
      </ul>
      {/* {loggedIn ? <h1>Hello Member!</h1> : <h1>Hello Guest</h1>} */}
      {loggedIn && <h1>Hello Member!</h1>}
    </>
  );
};

export default App;
