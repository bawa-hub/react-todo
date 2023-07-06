import React from "react";
import InputWrapper from "./InputWrapper";

export default function Header(props) {
    console.log("Header props", props);
    return (
        <header>
            <h1>Things To Do</h1>
            <InputWrapper {...props} />
        </header>
    );
}
