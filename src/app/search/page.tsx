'use client'
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Image from "next/image";

export default function Search() {
  const handleInputChange = (e:any) => {
    console.log('Input changed:', e.target.value);
  };

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <>
      <PlaceholdersAndVanishInput onChange={handleInputChange}
        onSubmit={handleFormSubmit} placeholders={['Enter your name', 'Enter your email', 'Enter your password']} />
    </>
  );
}
