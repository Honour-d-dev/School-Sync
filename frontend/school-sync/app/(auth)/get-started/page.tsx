"use client";

import React from "react";
import Image from "next/image";
import SignUpButton from "@/components/SignUpButton";
import { useActiveSectionContext } from "@/context/active-section-context";
import { cn } from "@/lib/utils";
import MetamaskPrompt, {
  useMetamaskInstalled,
} from "@/components/MetamaskPrompt";

const Page = () => {
  const {
    isStaffClicked,
    isSchoolClicked,
    isStudentClicked,
    setIsStaffClicked,
    setIsSchoolClicked,
    setIsStudentClicked,
    setIsButtonEnabled,
  } = useActiveSectionContext();

  const metamaskInstalled = useMetamaskInstalled();

  const handleStudentClicked = () => {
    setIsStaffClicked(false);
    setIsSchoolClicked(false);
    setIsStudentClicked((prevIsStudentClicked) => !prevIsStudentClicked);
    setIsButtonEnabled(true);
    console.log(isStudentClicked);
  };

  const handleStaffClicked = () => {
    setIsSchoolClicked(false);
    setIsStudentClicked(false);
    setIsButtonEnabled(true);
    setIsStaffClicked((prevIsStaffClicked) => !prevIsStaffClicked);
  };

  const handleSchoolClicked = () => {
    setIsStaffClicked(false);
    setIsStudentClicked(false);
    setIsButtonEnabled(true);
    setIsSchoolClicked((prevIsSchoolClicked) => !prevIsSchoolClicked);
  };

  return !metamaskInstalled ? (
    <MetamaskPrompt />
  ) : (
    <section className="flex flex-col padding bg-signUp bg-center h-screen w-screen bg-no-repeat">
      <div className="flex self-end flex-col max-w-[540px] max-h-[645px] w-[80vw] min-w-fit rounded-[12px] signUpCard  ">
        <div className="flex flex-row  items-center  md:gap-2">
          <Image src="/icons/logo.png" alt="logo" width={100} height={100} />
          <h1 className="text-[32px] font-Tomorrow font-semibold leading-[32px] tracking-[0.32px] text-[#1C364D]">
            SchoolSync
          </h1>
        </div>

        <div className="flex flex-col pl-[40px] md:pl-[70px] p-2">
          <h1 className="text-[36px] font-semibold font-Inconsolata leading-[36px] tracking-[0.36px] text-secondary_text">
            Sign Up
          </h1>
          <p className="text-[12px] font-SpaceGrotesk font-normal leading-[18px] tracking-[0.4px] text-secondary_text">
            New to Payclick, create an account with few clicks
          </p>

          <div className="flex flex-col gap-[36px] md:mt-[40px] mt-[25px] p-4">
            <button
              className={cn(
                isStaffClicked ? "bg-primary-200 " : "bg-white",
                "text-center hover:scale-105 active:scale-105 transition-all py-[12px] px-[4px]  border-secondary_text rounded-[8px]"
              )}
              onClick={handleStaffClicked}
            >
              School Staff
            </button>
            <button
              className={cn(
                isStudentClicked ? "bg-primary-200 " : "bg-white",
                "text-center hover:scale-105 active:scale-105 transition-all py-[12px] px-[4px]  border-secondary_text rounded-[8px]"
              )}
              onClick={handleStudentClicked}
            >
              Student
            </button>
            <button
              className={cn(
                isSchoolClicked ? "bg-primary-200 " : "bg-white",
                "text-center hover:scale-105 active:scale-105 transition-all py-[12px] px-[4px]  border-secondary_text rounded-[8px]"
              )}
              onClick={handleSchoolClicked}
            >
              School Admin
            </button>

            <div className="mt-[50px]">
              <SignUpButton
                text="Next Step"
                background=" bg-[#6695D8]"
                fontStyle="font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
