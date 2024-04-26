"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const userId: any = searchParams.get("userId");

  useEffect(() => {
    if (userId) {
      window.opener.location.href = `/findUser/password?userId=${userId}`;
      window.close();
    }
  }, []);
}
