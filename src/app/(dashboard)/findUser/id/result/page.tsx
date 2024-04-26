"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const acId: any = searchParams.get("acId");

  useEffect(() => {
    if (acId) {
      window.opener.location.href = "/findUser/id?acId=" + acId;
      window.close();
    }
  }, []);
}
