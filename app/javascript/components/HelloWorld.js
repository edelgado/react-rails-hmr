import { hot } from 'react-hot-loader/root'
import React, {useState} from "react"

const HelloWorld = (props) => {
    const [name, setName] = useState(props.name);
    const updateName = (name) => {
      setName(name);
    }
    return (
      <div>
          <label>What is your name?</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => updateName(e.target.value)}
          />
        <hr />
        <h3>Hello, {name}!</h3>
      </div>
    );

}

export default hot(HelloWorld)
