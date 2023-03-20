import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Image1 from "../lotty/login.json";
import axios from "axios";

export default function ContactUs(props) {
  useEffect(() => {
    localStorage.removeItem("email");
  }, []);
  const [email, setemail] = useState();
  const [check, setcheck] = useState();
  const [submited, setsubmited] = useState(true);
  const [verifycode, setverifycode] = useState();
  const [buttonclick, setbuttonclick] = useState(true)

  const min = 100000;
  const max = 999999;
  const navigate = useNavigate();
  function sendemail() {
    const verificationCode = Math.floor(Math.random() * (max - min + 1) + min);
    setbuttonclick(false)
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
          setbuttonclick(true)
        }
      );
  }

  async function checkverify() {
    setbuttonclick(true)
    console.log(buttonclick);
    if (check == verifycode) {
      localStorage.setItem("email", email);
      localStorage.removeItem('id')
      const { data } = await axios.post(
        "http://localhost:8639/user/createUser",
        {
          email:email,
        }
      );
      console.log(data._id)
      localStorage.setItem("id", data._id);
      navigate("/enter");
      window.location.reload();
    }
    else{
      alert('wrong code')
      setbuttonclick(false)

    }
  }

  return (
    <div className="relative isolate  bg--50  h-auto py-16 flex-row sm:py-24 lg:py-32 ">
      <div className="mx-auto max-w-7xl px-6  flex-row lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 flex-row lg:max-w-none lg:grid-cols-2 ">
          <Lottie animationData={Image1} loop={true} className="w-96 h-auto place-self-center" />
          {submited ? (
            <div className="max-w-xl lg:max-w-lg place-self-center">
              <h2 className="text-3xl font-bold tracking-tight text--900 sm:text-4xl">
                Easy login via email.
              </h2>
              <p className="mt-4 text-lg leading-8 text--700">
                Sign in with email to contribute a video or rate others' videos
                to improve our system and help children on the spectrum
                understand emotions
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring--500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                  onChange={(e) => setemail(e.target.value)}
                />
             {buttonclick ? (
  <button
  type="submit"
  className="flex-none rounded-md bg--500 py-2.5 px-3.5 text-sm font-semibold   text-white shadow-sm bg-blue-500 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline--500"
  onClick={() => sendemail()}
>
  Get a verification code
</button>
             ):(
              <button
              type="submit"
              className="flex-none rounded-md bg--500 py-2.5 px-3.5 text-sm font-semibold !cursor-wait text-white shadow-sm  bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline--500"
            >
              Get a verification code
            </button>
             )} 
              </div>
            </div>
          ) : (
            <div className="max-w-xl flex-row lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                Enter the verification code you received in the email.
              </h2>
              <div className="mt-6 flex max-w-md gap-x-4">
                <input
                  id="email-address"
                  name="email"
                  type="number"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring--500 sm:text-sm sm:leading-6"
                  placeholder="Enter your verification code"
                  onChange={(e) => {
                    setcheck(e.target.value);
                  }}
                />
               {buttonclick ? ( <button
                  type="submit"
                  className="flex-none rounded-md py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm bg-slate-500 !cursor-wait focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Log in
                </button>):(
                  <button
                  type="submit"
                  onClick={() => checkverify()}
                  className="flex-none rounded-md bg-blue-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Log in
                </button>

                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
