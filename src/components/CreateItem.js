import React , {useState} from "react";

function CreateItem(props) {
    const [item , setitem] = useState("");
    function change(event){
        setitem(event.target.value);
    }

    function handleSubmit(event) {
        props.addItem(item);
        setitem("");
        event.preventDefault();
    }
    
    return (
        <div className="submit-area">
            <form className="submit-form" >
                <input type="text" onChange={change} value={item}  placeholder="Enter something new on the list..." autoComplete="off" autoFocus="on"></input>
                <button onClick={handleSubmit}>+</button>
            </form>
        </div>
    );
}

export default CreateItem;