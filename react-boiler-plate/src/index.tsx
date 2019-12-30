import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

class App extends React.Component{
  render(){
      return(
        <React.Fragment>
          <div className="App">
           <Hello compiler="TypeScript" framework="React" />
          </div>        
        </React.Fragment>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
