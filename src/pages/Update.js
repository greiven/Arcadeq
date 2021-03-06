//Used to update arcade machines for a location

import React from "react";
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header';


function Update(props) {
    return (
     
        <div>
        <NavigationBar></NavigationBar>
        
      <div className="wrapper">
        <Header></Header>
    
        <div className="form"> 
            <form className="newMachine">

                <label>Name of Game</label>
                <input type="text" id="game"/>

                <br></br>

                <label>Type of Game</label>
                <select id="gameType">
                    <option></option>
                    <option>Shooting</option>
                    <option>Pinball</option>
                    <option>Fighting</option>
                    <option>Platforming</option>
                    <option>Racing</option>
                    <option>Rhythm</option>
                    <option>Redemption/Ticket</option>
                    <option>Other</option>
                </select>
                
                <br></br>

                <input type="submit" id="submit"></input>
            </form>
        </div>
  </div>
</div>
    )
}

export default Update;