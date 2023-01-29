import React, {useState} from 'react'





export default function TextForm(props) {

    const [text, setText] = useState(''); 

    
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
        

        
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
        
    }
    const handleClear = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Clear","danger")
        
    }
    const handleInverse = ()=>{
        let str = text.split("");
        let reverseArray = str.reverse();
        let joinArray = reverseArray.join("");
        props.showAlert("Converted to Inverse","warning")
        return setText(joinArray)
        
    }
    const handleCopy =()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied","success")
         
    }
    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/) 
        setText(newText.join(" "))
        props.showAlert("Removed extra space","success")
         

    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const count = ()=>{
        if (text.length>0){
        return text.trim().split(/[ ]+/).length;
        }
        else{
        return 0;
        }
        }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleInverse}>Inverse</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>
    <div className='container my-2' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Yout text summary</h1>
        <p>{count()} words, {text.length} characters</p>
        
        <p>{0.008 * text.split(" ").length} Minute to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
