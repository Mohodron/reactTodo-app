import React, { useState } from "react";
import Top from "./Top";
import CreateItem from "./CreateItem";
import Item from "./Item";

function App() {

    let [items, setItems] = useState([]);
    let [mode , setMode] = useState(false);

    function isChecked(isOrNot){
        setMode(isOrNot);
        console.log(mode);
    }

    function addItem(newitem) {
        setItems(prevItems => {
            return [
                ...prevItems, newitem]
        });
    }
    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <body  className={mode ===true ? "light-mode" : "dark-mode"}>
        <img className="img" src={mode ===true ? "./assets/images/679728.jpg" :"./assets/images/919248.jpg" } alt="background Image"></img>
           <div className="main-container">
                <Top checked= {isChecked} />
                <CreateItem addItem={addItem} />
                <div className="item-box" style={mode === true ? {backgroundColor: "#FAF2D3"} : {backgroundColor: "#050325"}}>
                    {
                        items.map((item, index) => {
                            return (
                                <Item key={index}
                                    id={index}
                                    text={item}
                                    deleteItem={deleteItem}
                                />
                            );

                        })
                    }
                </div>
            </div>
            
        </body>

    )
}
export default App;