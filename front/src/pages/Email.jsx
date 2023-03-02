import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "./css/Email.css";
import Arrow from "../lotty/arrowdown.json";
import Lottie from "lottie-react";

export default function ContactUs() {
  useEffect(() => {
    localStorage.removeItem("email");
  }, []);
  const [email, setemail] = useState();
  const [check, setcheck] = useState();
  const [submited, setsubmited] = useState(true);
  const [verifycode, setverifycode] = useState();
  const min = 100000;
  const max = 999999;
  const navigate = useNavigate();
  function sendemail() {
    const verificationCode = Math.floor(Math.random() * (max - min + 1) + min);

    const templateParams = {
      to_email: email,
      verificationCode: verificationCode,
    };
    setverifycode(verificationCode);
    emailjs
      .send(
        "service_xrl3dpq",
        "template_w2kkkbc",
        templateParams,
        "N_38oe5UXxI5n1GKz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setsubmited(false);
        },
        (error) => {
          console.log(error.text);
          alert("Please insert a normal email address ");
        }
      );
  }
  function checkverify() {
    if (check == verifycode) {
      localStorage.setItem("email", email);
    }
    if (localStorage.getItem("email") == email) {
      navigate("/enter");
    }
  }
  return (
    <div>
      {submited ? (
        <div className="emailpage">
          <h3>Enter your email to verify</h3>
          <Lottie animationData={Arrow} loop={true} className="w-50 h-auto " />
          <input
            type="text"
            placeholder="your email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Button variant="primary" type="submit" onClick={() => sendemail()}>
            submit
          </Button>
        </div>
      ) : (
        <div className="emailpage">
         <h3>Enter your email to verify</h3>
          <Lottie animationData={Arrow} loop={true} className="w-50 h-auto " />
          <input
            type="number"
            defaultValue={""}
            placeholder="verification Code"
            onChange={(e) => {
              setcheck(e.target.value);
            }}
          />{" "}
          <Button
            onClick={() => {
              checkverify();
            }}
          >
            submit verify
          </Button>
        </div>
      )}
    </div>
  );
}
