import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";


    function Filter() {
        const [hogArray, setHogArray] = useState(hogs)
        const searchbar = document.getElementById('search')
        console.log(hogArray)
    }



export default Filter