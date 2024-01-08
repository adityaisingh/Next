"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Basic Routing </h1>
      <Link href="/about">Go to about Page</Link>
      <br></br>
      <Link href="/login">Go to login Page</Link>
    </main>
  );
}

// "use client";
// import { useState } from "react";
// import styles from "./page.module.css";

// export default function Home() {
//   const [name, setName] = useState();

//   const New = () => {
//     setName("Singh");
//   };

//   const InnerComp = () => {
//     return (
//       <div>
//         <h4>Bye Bye</h4>
//       </div>
//     );
//   };
//   return (
//     <main className={styles.main}>
//       <h4>Hello ! Myself Aditya {name}</h4>
//       <button onClick={() => New}>click Me</button>
//       <InnerComp />
//     </main>
//   );
// }
