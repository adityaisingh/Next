"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
const login = () => {
  const Router = useRouter();
  return (
    <div>
      <h4>login page</h4>

      <button onClick={() => Router.push("/")}>Go to Home Page </button>
    </div>
  );
};

export default login;
