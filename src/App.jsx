import React from "react";

const App = () => {
  const name = 'Jane'
  const x = 10
  const y = 12
  const names = ['Brad', 'Mary', 'Jimmy', 'Sara']
  const loggedIn = true
  const styles = {
    color: 'red',
    fontSize: '30px'
  }

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={{ color: 'red', fontSize: '23px' }}>Hello {name}</p>
      <p style={styles}>
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
