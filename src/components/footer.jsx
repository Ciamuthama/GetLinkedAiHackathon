import './footer.css'

export default function Footer() {
  return (
      <>
      <div className='footer'>
        <img src='../../assets/star.svg' style={{position:'absolute',}}/>
            <div className='footer_getlinked'>
            <h2>get<span>linked</span></h2>
             <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>     
              </div>
              
             <div> <div className='footer_list1'>
                  <h2>Useful Links</h2>
                  <ul>
                    <li>Overview</li>
                    <li>Timeline</li>
                      <li>FAQs</li>
                      <li>Register</li>
                  </ul>
              </div>
              <div className='footer_list2'>
                  <h2>Contact Us</h2>
                  <img src='../../assets/star.svg' style={{position:'absolute',}}/>
                  <ul>
                    <li>+234 697 81819</li>
                    <li>27,Alara Street Yaba 100012 Lagos State</li>
                      <li>FAQs</li>
                      <li>Register</li>
                  </ul>
          </div>
        </div>

        <div className='horizontal_text'>
          <div className='terms'>
            <h1>Terms of Use  <span></span>  Privacy Policy</h1>
          </div>
          <div className='socials'>
            <h3>Follow us</h3>
            <img src='../../assets/instagram.svg'/>
            <img src='../../assets/x.svg'/>
            <img src='../../assets/facebook.svg'/>
            <img src='../../assets/linkedin.svg'/>
          </div>
        </div>
        <img src='../../assets/star.svg'/>
        <p className='last_text'>All rights reserved. © getlinked Ltd.</p>
        
          </div>  
    </>
  )
}
