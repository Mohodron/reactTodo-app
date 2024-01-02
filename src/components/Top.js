import React, { useState } from "react";

function Top(props)  {
    let [isChecked, setChecked] = useState(false);

    function handleChange(event) {
      
      if(isChecked){
        setChecked(false);
        props.checked(false);
      } else {
        setChecked(true);
        props.checked(true);
      }
      console.log();
    }

    return (
<div class="top-elements">
      <h1>TODO</h1>
      <label>
        <input id="blue" onChange={handleChange} value={isChecked} type="checkbox" name="checkbox"></input>
        <ion-icon class="sun" name="sunny-sharp"></ion-icon>
        <ion-icon class="moon" name="moon-sharp"></ion-icon>
        <span class="toggle"></span>
      </label>
    </div>
    );
}

export default Top;