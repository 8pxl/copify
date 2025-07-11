"use client";
import {LinkBox} from "@/app/linkBox"
import { Result } from "./result";
import {useState} from 'react';
import { answer } from "./answer";
import { Button } from "@/components/ui/button"
// import {Input} from "@/components/ui/input";

function HalfWrapper({children, css}: any) {
  return(
    <div className={"w-[50%] " + css}>
      {children}
    </div>
  )
}
export default function Home() {
  const [hidden, setHidden] = useState(true);
  const [response, setResponse] = useState("");
  return (
      <div>
        <div className="font-space font-bold text-gray-300 text-4xl w-screen justify-center flex m-4">
          copify
        </div>
        <div className={"w-screen absolute top-1/2 flex content-center flex-col items-center gap-2"}>
          <HalfWrapper>
            <LinkBox
            action={async (formData: FormData)=>{
              const x = await answer(formData);
              console.log(x);
              setResponse(x);
              setHidden(false);
            }}
            />
          </HalfWrapper>
            
            
          <HalfWrapper css={"duration-300 ease-out text-gray-300 flex " + (hidden ? "pre-anim" : "")}>
            {/* <LinkBox/> */}
            {response}
            <Button variant="secondary" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg>
              {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            </Button>
          </HalfWrapper>
        </div>
      </div>
  );
}
