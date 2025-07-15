import logo from "../../public/logo.png";
import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
    return(
        <div className="flex item-center justify-between pl-4 pr-4 border-b-[1px]">
            <Image src={logo}
                className="cursor-pointer rounded-4xl"
                alt = "Logo"
                width={80}
                height={80}
            />
            <div className="hidden md:flex gap-5 items-center ">
                <h2 className="hover:bg-blue-500 rounded-full p-4 hover:text-white cursor-pointer ">Home</h2>
                <h2 className="hover:bg-blue-500 p-4 rounded-full hover:text-white cursor-pointer">History</h2>
                <h2 className="hover:bg-blue-500 p-4 rounded-full hover:text-white cursor-pointer">Contact</h2>
            </div>
                <UserButton />
        </div>
    )
}