"use client";
import {LinkBox} from "@/app/linkBox"
import { useRouter } from "next/router";
import {useState} from 'react';
import { answer } from "./answer";
import { Button } from "@/components/ui/button"
import { CopyIcon } from "@/app/icon/copy"
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
        <div className="font-space font-bold text-gray-600 w-screen justify-center flex m-4">
          a spotify title/artist copier-fy-er
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
            
            
          <HalfWrapper css={"duration-300 ease-out text-gray-300 flex items-center justify-between " + (hidden ? "pre-anim" : "")}>
            {/* <LinkBox/> */}
            {response}
            <Button className={"hover:scale-115" } variant="ghost" onClick={()=>{
              navigator.clipboard.writeText(response);
            }} size="icon">
              {<CopyIcon/>}
            </Button>
          </HalfWrapper>
        </div>
      </div>
  );
}
