"use client";
import Link from "next/link";

export default function Studentlist() {
  return (
    <div>
      <h2>Studentlist </h2>
      <br></br>
      <ul>
        <li>
          <Link href="/studentlist/1">Tony</Link>
        </li>
        <li>
          <Link href="/studentlist/2">Captian</Link>
        </li>
        <li>
          <Link href="/studentlist/3">Hulk</Link>
        </li>
        <li>
          <Link href="/studentlist/4">Thor</Link>
        </li>
      </ul>
    </div>
  );
}
