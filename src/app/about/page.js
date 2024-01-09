"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
  const Router = useRouter();
  return (
    <div>
      <h4>about use</h4>
      <button onClick={() => Router.push("/")}>Go to Home Page </button>
      <br />
      <Link href={"/about/aboutcollge"}>Go to about collge page </Link>
    </div>
  );
};

export default About;
