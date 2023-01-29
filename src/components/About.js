import React, { useState } from 'react'

export default function About() {
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white' 

    })
    const [btntext, setbtntext] =  useState("Enable Dark Mode")

    const ChangeTheme = () =>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color: 'white',
                backgroundColor: 'black' 
            })
            setbtntext("Enable Light Mode")
        }
        else{
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'  
            })
            setbtntext("Enable Dark Mode")
        }
    }
    
  return (
    
    <div className='container' style={myStyle}>
        <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      About Website
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong></strong> This website is designed to help you in solving text related problems, many time it is hard to do some text modification manually . This website is for you if you are also struggling with the same problem
Jump into the website paste or type your problem you want to solve ,which is in constraint of website feature , boom you will see the result!

      </div>
    </div>
  </div>
  
</div>
<div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      About Me
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong></strong> Honestly, I possess all the skills and experience that you're looking for. I'm pretty confident that I am the best candidate for this job role. It's not just my background in the past projects, but also my people skills, which will be applicable in this position. On the other hand, I am a self-motivated person and I try to exceed my superior's expectations with high-quality work. Being a fast learner, I quickly pick up business knowledge related to my project. Lastly, I would like to add that I work well both as an individual contributor and also as a team member. Collectively, all these skills put together makes me a complete package for this job. Currently learning React and Angular so the time you are reading this I can work on React as well as Angular.
      </div>
    </div>
  </div>
  
</div>
<div className="container my-3">
<button onClick={ChangeTheme} type="button" className="btn btn-dark">{btntext}</button>

</div>
    </div>
  )
}
