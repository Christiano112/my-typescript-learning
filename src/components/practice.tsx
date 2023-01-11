import React from "react";
import { myFirstName } from "./variable";
import { myObject } from "./variable";

const Practice = () => {
    return (
        <div>
            <section>
                <h1>I am Learning TypeScript</h1>

                <h3>React + Typescript</h3>
                <br />
                <p>{myFirstName}</p>
                <p>{myObject.lastName + " " + myObject.firstName}</p>
            </section>
        </div>
    )
};

export default Practice;
