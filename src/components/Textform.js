import React, { useState } from 'react'

export default function Textform(props) {
      const [text, setText] = useState("Enter text here....");
      const handleUpClick = () => {
            console.log("uppercase  was clicked");
            let newtext = text.toUpperCase();
            setText(newtext);
            props.showAlert("converted to uppercase", "Success");
      }
      const handleLowerClick = () => {
            console.log("lowercase  was clicked");
            let newtext = text.toLowerCase();
            setText(newtext);
            props.showAlert("converted to lowercase", "Success");

      }
      const handleClearClick = () => {
            let newtext = "";
            setText(newtext);
            props.showAlert("text has been copied", "Success");

      }
      const handleOnChange = (event) => {
            console.log("on change");
            setText(event.target.value);
      }
      const handleCopy = () => {
            console.log("copy is clicked");
            let text = document.getElementById("myBox");
            text.select();
            text.setSelectionRange(0, 9999);
            navigator.clipboard.writeText(text.value);
            props.showAlert("text has been copied", "Success");
      }
      const handleExtraSpace = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("text has been copied", "Success");

      }
      const handleWordReplace = () => {
            let paragaraph = text.split(" ");
            let searchWord = document.getElementById("text_to_replace").value;
            let newWord = document.getElementById("text_to_add").value;
            if (searchWord === "" || newWord === "") {
                  props.showAlert("please enter a valid word", "Failure");
            }
            else {
                  let flag = false;
                  for (let i = 0; i < paragaraph.length; i++) {
                        if (searchWord === paragaraph[i] || searchWord.charAt(0).toUpperCase() + searchWord.slice(1) === paragaraph[i] || searchWord.toUpperCase() === paragaraph[i] || searchWord.charAt(0).toLowerCase() + searchWord.slice(1) === paragaraph[i] || searchWord.toLowerCase() === paragaraph[i]) {
                              paragaraph[i] = newWord;
                              flag = true;
                        }
                  }
                  if (flag === false) {
                        props.showAlert("Word is not found in text", "Failure");
                  }
                  else {
                        setText(paragaraph.join(" "));
                        props.showAlert("word is replaced successfully", "Success");
                  }
            }

      }


      return (
            <>
                  <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : 'black', caret_color: props.mode === 'dark' ? 'white' : 'dark' }}>
                        <h1>Enter Your Text Below:</h1>
                        <label className="me-2 my-2" htmlFor="text_to_search">Existing word</label>
                        <br />
                        <input type="text" id="text_to_replace"></input>
                        <br />
                        <label className="me-2 my-2" htmlFor="text_to_search">New word</label>
                        <br />
                        <input type="text" id="text_to_add"></input>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleWordReplace}>replace</button>
                        <div className="mb-3 mt-1">
                              {/* <label htmlFor="myBox" className="form-label">TextArea</label> */}
                              <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="9"></textarea>
                        </div>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button>

                  </div>
                  <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                  <h3>Preview:</h3>
                        <p>{text}</p>
                  <h3>Text Summary:</h3>
                        <p>{(text.split(" ")[0] !== "") ? text.split(" ").length : 0} words and {text.length} characters</p>
                        <p>{0.008 * ((text.split(" ")[0] !== "") ? text.split(" ").length : 0)} minutes to read this paragaraph</p>
                       
                  </div>
            </>
      )
}



