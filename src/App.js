import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Georgie",
          id: "lala1",
        },
        {
          name: "Mok",
          id: "lala2",
        },
        {
          name: "Giuseppe",
          id: "lala3",
        },
        {
          name: "Karen",
          id: "lala4",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
