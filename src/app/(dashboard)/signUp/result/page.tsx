"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const acId: any = searchParams.get("acId");
  const acName: any = searchParams.get("acName");

  useEffect(() => {
    if (acId) {
      window.opener.location.href = `/signUp?acId=${acId}&acName=${acName}`;
      window.close();
    }
  }, []);
}
