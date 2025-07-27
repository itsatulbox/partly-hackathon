'use client';

import Image from "next/image";
import {getVechicleInformation} from "@/api/apiCalls";
import {useEffect} from "react";
import {router} from "next/client";
import Link from "next/link";

export default function Home() {

  useEffect(() => {

    getVechicleInformation().then(
        (vechicleInformation) => {console.log(vechicleInformation)}
    );

  }, []);


  return (
    <div>
      <Link href="/LicenseEnteringPage">
            Go to License Entering Page
      </Link>
    </div>
  );
}
