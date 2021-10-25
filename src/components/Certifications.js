import React from 'react'
import CertRWD from '../img/CertRWD.PNG'
import cert3 from '../img/cert3.PNG'
import cert2 from '../img/cert2.jpg'
import WebFoundationsCert from '../img/WebFoundationsCert-1.png'

const Certifications = () => {
    return (
        <div>
        <div id="Certifications"></div>
        <section className="accoplishments my-3">
          <h2 className="section-title text-white">My Certifications</h2>
          <div className="bottom-line"></div>
  
          <div className="card-group my-3 mx-1">
            <div className="card bg-dark mx-1">
              <img src={CertRWD} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-white">Responsive Web Design </h5>
  
                <a className="btn-dark txt-decor-none" href="img/CertRWD.PNG">
                  <p type="button" className="card-text card-footer text-sm-center btn-outline-primary btn-primary ">See in Full
                  </p>
                </a>
              </div>
            </div>
      
            <div className="card bg-dark mx-1">
              <img src={cert3}class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-white">Javascript Algorithms and Data Structures</h5>
                
                <a className="btn-dark txt-decor-none" href="img/cert3.PNG">
                  <p type="button" className="card-text card-footer text-sm-center btn-outline-primary btn-primary ">See in Full
                  </p>
                </a>
              </div>
            </div>
            <div className="card bg-dark mx-1">
              <img src={cert2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-white">Modern HTML & CSS</h5>
           
                <a className="btn-dark txt-decor-none" href="img/cert2.jpg">
                  <p type="button" className="card-text card-footer text-sm-center btn-outline-primary btn-primary ">See in Full
                  </p>
                </a>
              </div>
            </div>
          </div>
          <h2 className="section-title text-white">My College Certification</h2>
          <div className="card-group my-2 mx-1 mx-sm-5">
            <div className="card bg-dark mx-1 mx-sm-5">
              <img src={WebFoundationsCert} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-white">Web Foundations</h5>
           
                <a className="btn-dark txt-decor-none" href="https://www.parchment.com/u/award/b5d238f8d9179dc27ed6269f13847b22">
                  <p type="button" className="card-text card-footer text-sm-center btn-outline-primary btn-primary ">See
                    credential</p>
                </a>
              </div>
            </div>
          </div>
          </section>
          </div>
      
    )
}

export default Certifications
