// THIS IS REACT SELECT

import { useState } from "react";
import Select from "react-select";

export default function SelectOption () {
    const option = [
        {value: "ferrari", label: "Ferrari"},
        {value: "lambo", label: "Lambo"},
        {value: "pagani", label: "Pagani"},
    ]

    const [Optionis, setOptionis] = useState(null)

    const Changes = (selected) => {
        setOptionis(selected)
    }

    return(
        <div>
            <br/>
            <h1 className="bold">THIS IS REACT SELECT</h1>
            <h1>Car Selection:</h1>

            <Select value={Optionis} onChange={Changes} options={option} className="text-black"/>
            <h2>Selected Car : {Optionis ? Optionis.label : "None"}</h2>
        </div>
    )
}