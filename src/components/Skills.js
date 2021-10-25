import React from 'react'
import CSS3 from '../img/CSS3_logo.svg.png'
import Django from '../img/Django_logo_PNG2.png'
import bootstrap from '../img/bootstrap-social-logo.png'
import fontawesomelogo from '../img/font_awesome_logo.png'
import Githubs from '../img/GitHub-logo-.png'
import js from '../img/JavaScript_logo_PNG1.png'
import jquery from '../img/jquery.png'
import excel from '../img/Microsoft_Excel_logo_PNG1.png'
import powerpoint from '../img/Microsoft_PowerPoint_logo_PNG2.png'
import word from '../img/Microsoft_Word_logo_PNG1.png'
import Nextjs from '../img/Nextjs-logo.svg.png'
import node from '../img/Node.js_logo.svg.png'
import raptor from '../img/Raptor.gif'
import react from '../img/react-2.png'
import redux from '../img/Redux.png'
import sass from '../img/Sass_logo_PNG1.png'
import vsc from '../img/Visual-Studio-Logo-500x313.png'
import vue from '../img/Vue.js.svg.png'
import i2djs from '../img/i2djsLogo.png'
import lodash from '../img/Lodash.png'


const Skills = () => {
    return (
        <div>
            <section id="about-skills" class=" my-3  mx-5 ">
    <h2 className="section-title  text-white ">My SkillSet</h2>
    <div className="shadow-lg bg-dark justify-content-center  flex-wrap alignT alignI  lg:mx-40 mx-5 py-4 rounded-2 card-body ">

      <span className="alignT alignI ">
          <img className="w-20 h-20 block mx-auto logoSize " src={bootstrap}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src= {CSS3}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={Django}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={fontawesomelogo}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={Githubs}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={js}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={jquery}
          alt="Python"/></span>

      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={excel}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize"
          src={powerpoint} alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={word}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={Nextjs}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={node}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={raptor}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={react}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={redux} alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={sass}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={vsc}
          alt="Python"/></span>
      <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={vue}
          alt="Python"/></span>
          <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={i2djs}
            alt="Python"/></span>
        <span className="text-center"><img className="w-20 h-20 block mx-auto logoSize" src={lodash}
            alt="Python"/></span>


    </div>

  </section>
        </div>
    )
}

export default Skills
