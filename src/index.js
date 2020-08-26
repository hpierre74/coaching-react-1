import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <Button variant="contained" color="primary">
      Hello clicked ... times
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
