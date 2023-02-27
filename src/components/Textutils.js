import React,{useState} from 'react'

export default function Textutils(props) {

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const eventUpHandler=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","Success")
      }
      const eventLoHandler=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","Success")
      }
      
      const copyText=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard !","Success")
      }
      
      const removeSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra space has been removed","Success")
    }

    const[text,setText]=useState("")
  return (
    <>
      <div className="container">
        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black",border:props.mode==="dark"?"3px solid white":"3px solid black"}} placeholder='Enter Text Here' value={text} onChange={handleOnChange}  rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={eventUpHandler}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={eventLoHandler}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={copyText}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={removeSpace}>Remove Extra Spaces</button>
      </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text===""?0:text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
    </div>
    </>
  )
}
