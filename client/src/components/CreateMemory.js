import React, { useState } from "react";

const CreateMemory = props => {

    const [memory, setMemory] = useState({
        img: "",
        description: ""

    });
    const changeHandler = event => {
        setMemory({...memory, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMemory(memory);
        setMemory({ img: "", description: ""})
    }
    return (
      <form onSubmit={submitForm}>
        <label for="img"></label>
        <input
          name="img"
          id="img"
          type="image"
          placeholder=" Image Here "
          onChange={changeHandler}
          value= {memory.img}
        />
        <label for="description"> Description: </label>
        <input
          name="discription"
          id="description"
          type="text"
          placeholder="Memory description"
          onChange={changeHandler}
          value= {memory.description}
        />
        <button type = "submit"> Submit </button>
      </form>
    )
}

export default CreateMemory;