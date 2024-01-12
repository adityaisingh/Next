import Image from "next/image";
import Profile from "../../public/random.webp";
export default function Home() {
  return (
    <main>
      <h1> </h1>
    </main>
  );
}

// <Image src={Profile} width={700} height={700} />;

// "use client";
// import { useState } from "react";
// import style from "./style.module.css";

// export default function Home() {
//   const [color, setColor] = useState("red");
//   return (
//     <main>
//       <h1 className={color == "red" ? style.red : style.green}>
//         condition with style
//       </h1>
//       <button onClick={() => setColor("green")}>Click Here</button>
//     </main>
//   );
// }

// "use client";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main>
//       {/* <Link href="/productlist"> Go to proudct list </Link> */}
//       {/* <h1>Basic Routing </h1>
//       <Link href="/about/aboutcollge">Go to about Page</Link>
//       <br></br>
//       <Link href="/login">Go to login Page</Link> */}
//     </main>
//   );
// }

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
