import React from 'react';
import Board from "react-trello";
import '../Trello/Trello.css'
import data from "../../data.json";
// import data1 from "../../data1.json"

function App() {
    return (
        <div>
            
            <Board
                data={data}
                draggable
                editable
                canAddLanes
                editLaneTitle
                className="boardContainer"/>
               
        </div>
    );
}

export default App;