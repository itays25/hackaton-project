import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Image1 from '../lotty/login.json'
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
  return(
    <div class="relative isolate overflow-hidden bg-indigo-50  h-screen py-16 flex-row sm:py-24 lg:py-32 " >
  <div class="mx-auto max-w-7xl px-6  flex-row lg:px-8 ">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 flex-row lg:max-w-none lg:grid-cols-2 ">
      {submited ? ( 
      <div class="max-w-xl flex-row lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">Easy login via email.</h2>
        <p class="mt-4 text-lg leading-8 text-indigo-700">Sign in with email to contribute a video or rate others' videos to improve our system and help children on the spectrum understand emotions</p>
        <div class="mt-6 flex max-w-md gap-x-4">
          <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email"   onChange={(e) => setemail(e.target.value)}/>
          <button type="submit" class="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={() => sendemail()}>Get a verification code</button>
        </div>
      </div>):(
        <div class="max-w-xl flex-row lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">Enter the verification code you received in the email.</h2>
        <div class="mt-6 flex max-w-md gap-x-4">
          <input id="email-address" name="email" type="number" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your verification code"  onChange={(e) => {setcheck(e.target.value)}} />
          <button type="submit" class="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"  onClick={() => {checkverify()}}>Log in</button>
        </div>
      </div>
      )  }
      <Lottie animationData={Image1} loop={true} className="w-96 h-auto " />
      </div></div> 
</div>
  )
}
