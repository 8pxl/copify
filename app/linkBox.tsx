"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

type LinkBoxProps = {
  action: (formData: FormData) => Promise<void>;
};

export function LinkBox({ action }: LinkBoxProps) {
  const [url, setUrl] = useState("");
  const handleSubmit = () => {
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} action={action}>
      <Input
        name="content"
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="paste your link here!"
      />
    </form>
  );
}
