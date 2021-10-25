import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn , faGoogle } from '@fortawesome/free-brands-svg-icons'

import Container from 'react-bootstrap/Container'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white  flex ">

<div className=" ">


      <section className="mb-4">

        <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/BryanHankins5" title="Twitter">
        <FontAwesomeIcon icon={faTwitter} />
   </a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
        <FontAwesomeIcon icon={faGoogle} />
            <i className="fab fa-google"></i></a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/bryan-hankins-8668811ab/"
          role="button">
                    <FontAwesomeIcon icon={faLinkedinIn} />
            <i className="fab fa-linkedin-in"></i></a>
      </section>

      <section className="mb-3 d-flex flex-row row-cols-3 mx-1  ">
        <div className="m-auto">
          <h3 className="text-secondary fs-6">Contact Me</h3>
          <p class="text-white fs-6"> (812) 549-1887 </p>
        </div>
        <div className="m-auto">
          <h3 className="text-secondary fs-6">Email Me</h3>
          <p className="text-white fs-6">BryanHankins@graphic-designer.com</p>
        </div>
        <div className="m-auto">
          <h3 className="text-secondary fs-6">Address</h3>
          <p className="text-white fs-6">Evansville Indiana</p>
        </div>
      </section>

  </div>
  </footer>
    )
}

export default Footer
