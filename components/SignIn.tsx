import { SignInButton } from "@clerk/nextjs";
import React from "react";

const  SignIn = () => {
  return (
    <SignInButton mode="modal" >
    <button className="  cursor-pointer hover:text-[#d94f7c]  text-[#755b44] text-[15px] ">
      Sign In
    </button>
    </SignInButton>
  );
};

export default SignIn;
//  display: flex;
//   align-items: center;
//   gap: clamp(34px, 4.4vw, 82px);
//   margin-left: 5%;
//   font-size: 15px;
//   color: #755b44;d94f7c
