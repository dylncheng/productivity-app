import { Link } from "react-router-dom";
import React, {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../styles/Home.css'
import { render } from "@testing-library/react";

function Profile() {
    const d = new Date;
    let month = d.getMonth().toString();
    month = Number(month) + 1;

    if(month == 4 || month == 6 || month == 9 || month == 11)  {
        var days = 31;
    } else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        var days = 30;
    } else { 
        var days = 29;
    }

    let blocks = new Array(days).fill(0);


    console.log(month.toString());

    return(
        <div className="button-container">
            {blocks.map(() => (
               <button className="gradient">hi</button>
            ))}
        </div>
    );
}

export default Profile;