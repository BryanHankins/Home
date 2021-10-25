import React from 'react'
import resume from "../img/Bryan_Hankins_Resume.PDF"

const Resume = () => {
    return (
      
<section className="accoplishments my-3">
<h2 className="section-title text-white">My Resume</h2>
<div className="bottom-line"></div>
<div id="Resume">
  <a href={resume} className="Resumebutton"><button type="button"
      className="blackbutton py-2 px-3 mx-2">View In full</button></a>
</div>
</section>
    
    )
}

export default Resume
