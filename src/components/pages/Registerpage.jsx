import Navigation from "../navigation";


export default function Registerpage() {

  return (
    <>
          <Navigation />
          <div className='lens1'>
              
          </div>
          <img src='../../../public/assets/star.png' style={{position:'absolute', }}/>
          <div className="main_reg">
              <div className="man_img_reg">
                  <img src='../../../public/assets/man_reg.png' className='man_reg'/>
                  <img src='../../../public/assets/star.png' style={{ position: 'absolute', }} />
                  <img src='../../../public/assets/star.png' style={{position:'absolute', }}/>
              </div>
              <div className="container" >
              <img src='../../../public/assets/star.png' style={{position:'absolute', }}/>
                  <h2 className="container_h2" >Register</h2>
                  <p className="container_p">Be part of this movement! 
                      <span className="walkers">
                          <img src="../../../public/assets/manwalk.png" />
                          <img src="../../../public/assets/girlwalk.png"/>
                      </span>
                  </p>
                  <h1 className="intro_h1">CREATE YOUR ACCOUNT</h1>
                  <form action="" method="post">
                      <label htmlFor="Team’s Name">
                          <input type="text" name="Team’s Name"  />
                    </label>
                      
                      <label htmlFor="Phone">
                          <input type="tel" name="Phone"  />
                      </label>

                      <label htmlFor="Email">
                          <input type="email" name="Email"  />
                      </label>

                      <label htmlFor="Project Topic">
                          <input type="text" name="Project Topic"  />
                      </label>

                      <label htmlFor="Category">
                          <select name="Category"  placeholder="Select your category">
                              <option value="None">None</option>
                          </select>
                      </label>

                      <label htmlFor="Group Size">
                          <select name="Group Size"  placeholder="Select" className='groupsize'>
                              <option value="None">0</option>
                          </select>
                      </label>
                      <h5 className="form_h5">Please review your registration details before submitting</h5>
                      <div className="termsandcondition">
                          <input type="checkbox" name="Terms and Condition"  /> <h3>I agreed with the event terms and conditions and privacy policy</h3>
                      </div>

                      <button type="submit" className="button_form" >Register Now</button>
                  </form>
                  <img src='../../../public/assets/star.png' style={{position:'absolute', }}/>
          </div>
          <div className='lens2'></div>
          </div>
          
      </>
  )
}
