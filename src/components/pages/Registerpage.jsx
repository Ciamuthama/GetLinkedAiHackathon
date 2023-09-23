import "../constant/index.css";
import './register.css'
import Navigation from "../navigation";
import { useState } from "react";
import Popup from "reactjs-popup";

export default function Registerpage() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Navigation />
      <div className="lens1"></div>
      <img
        src="../../../public/assets/star.png"
        style={{ position: "absolute" }}
      />
      <div className="main_reg">
        <div className="man_img_reg">
          <img src="../../../public/assets/man_reg.png" className="man_reg" />
          <img
            src="../../../public/assets/star.png"
            style={{ position: "absolute" }}
          />
          <img
            src="../../../public/assets/star.png"
            style={{ position: "absolute" }}
          />
        </div>
        <div className="container">
          <img
            src="../../../public/assets/star.png"
            style={{ position: "absolute" }}
          />
          <h2 className="container_h2">Register</h2>
          <p className="container_p">
            Be part of this movement!
            <span className="walkers">
              <img src="../../../public/assets/manwalk.png" />
              <img src="../../../public/assets/girlwalk.png" />
            </span>
          </p>
          <h1 className="intro_h1">CREATE YOUR ACCOUNT</h1>
          <form action="" method="post">
            <label htmlFor="Team’s Name">
              <input type="text" name="Team’s Name" />
            </label>

            <label htmlFor="Phone">
              <input type="tel" name="Phone" />
            </label>

            <label htmlFor="Email">
              <input type="email" name="Email" />
            </label>

            <label htmlFor="Project Topic">
              <input type="text" name="Project Topic" />
            </label>

            <label htmlFor="Category">
              <select name="Category" placeholder="Select your category">
                <option value="None">None</option>
              </select>
            </label>

            <label htmlFor="Group Size">
              <select
                name="Group Size"
                placeholder="Select"
                className="groupsize"
              >
                <option value="None">0</option>
              </select>
            </label>
            <h5 className="form_h5">
              Please review your registration details before submitting
            </h5>
            <div className="termsandcondition">
              <input type="checkbox" name="Terms and Condition" />{" "}
              <h3>
                I agreed with the event terms and conditions and privacy policy
              </h3>
            </div>

            <button type="submit" className="button_form" onClick={closeModal}>
              Register Now
            </button>
          </form>
          <img
            src="../../../public/assets/star.png"
            style={{ position: "absolute" }}
          />
        </div>
        <div className="lens2"></div>
      </div>

      <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
        <div className="container2">
          <img src="../../../public/assets/star.png" />
          <div className="modal">
            <div>
              <img src="../../../public/assets/star.png" />
              <img
                src="../../../public/assets/successful-man.png"
                className="success"
              />
              <img src="../../../public/assets/done.png" className="done" />
            </div>

            <h2>Congratulations you have successfully Registered!</h2>
            <p>
              Yes, it was easy and you did it! check your mail box for next step
              <img
                src="../../../public/assets/emoji.png"
                style={{
                  width: "clamp( 0.875rem,50%,1.25rem)",
                  height: "clamp( 0.875rem,50%,1.25rem)",
                }}
              />
            </p>
            <button type="button" className="back_button" onClick={closeModal}>
              Back
            </button>
            <img src="../../../public/assets/star.png" />
          </div>
        </div>
      </Popup>
    </>
  );
}
