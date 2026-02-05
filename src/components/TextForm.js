import React, { useState } from "react";
import { useFormState } from "react-dom";
 

export default function TextForm(props) {
    const hanleClick = () => {
        // console.log("uppercase was clicked" + text);
        setText("You have cliked on handle");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const hanlelowClick = () => {
        // console.log("uppercase was clicked" + text);
        setText("You have cliked on handle");
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleonChange = (event) => {
        // console.log(" on Change");
        setText(event.target.value);
    };

    const handleClear = () => {
        setText("");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
    };

    const maxChars = 200;




    const [text, setText] = useState("");
    // text= "new text";  wrong way
    // setText('Enter the text 2');  this is the wright way
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <p>{text.length}/{maxChars} characters</p>

                <textarea
                    className="form-control mb-3"
                    id="mybox"
                    maxLength={maxChars} 
                    rows="8"
                    value={text}
                    onChange={handleonChange}
                />

                <button className="btn btn-primary mx-2" onClick={hanleClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={hanlelowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-danger mx-2" onClick={handleClear}>
                    Clear Text
                </button>

                <button className="btn btn-success mx-2" onClick={handleCopy}>
                    Copy Text
                </button>

                <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>

            </div>

            <div className="container my-3">
                <h1>Text Summary</h1>

                <p>
                    {text.split(" ").filter(word => word !== "").length} words and{" "}
                    {text.length} characters
                </p>

                <h2>
                    {(0.008 * text.split(" ").filter(word => word !== "").length).toFixed(2)}
                    {" "}Minutes Required to Read
                </h2>

                <h2>Preview</h2>
                <textarea className="form-control" rows="8" value={text.length > 0 ? text : "Nothing to preview"} readOnly />
            </div>
        </>
    );
}