import React from "react";

function Item(props) {
    function handleChange() {
        props.deleteItem(props.id);
    }
    return (
        <div className="item">
            <form >
                <input className="checkbox"
                    type="checkbox" onClick={handleChange} name="checkbox"></input>
                    <span className="box"></span>
                <p className="white"  style={{ display: "inline-block" }}>{props.text}</p>
            </form>
        </div>
    )
}

export default Item;