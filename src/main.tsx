import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1 className="App-title">template</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;