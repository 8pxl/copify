"use client";
import { LinkBox } from "@/app/linkBox"
import { useState } from 'react';
import { answer } from "./answer";
import { Button } from "@/components/ui/button"
import { CopyIcon } from "@/app/icon/copy"
// import {Input} from "@/components/ui/input";

type HalfWrapperProps = {
  children: React.ReactNode;
  css?: string;
};

function HalfWrapper({ children, css }: HalfWrapperProps) {
  return (
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
        <div className="w-[60%]">
          a simple way to copy title/artists from spotify songs (cause for some reason you can&apos;t do it in spotify)
        </div>
      </div>
      <div className={"w-screen absolute top-1/2 flex content-center flex-col items-center gap-2"}>
        <HalfWrapper>
          <LinkBox
            action={async (formData: FormData) => {
              const x = await answer(formData);
              setResponse(x);
              setHidden(false);
            }}
          />
        </HalfWrapper>

        <HalfWrapper css={"duration-300 ease-out text-gray-300 flex items-center justify-between " + (hidden ? "pre-anim" : "")}>
          {/* <LinkBox/> */}
          {response}
          <Button className={"hover:scale-115"} variant="ghost" onClick={() => {
            navigator.clipboard.writeText(response);
          }} size="icon">
            {<CopyIcon />}
          </Button>
        </HalfWrapper>
      </div>
    </div>
  );
}
