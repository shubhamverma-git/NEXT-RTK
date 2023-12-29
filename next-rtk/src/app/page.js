import Image from "next/image";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";

export default function Home() {
  return (
    <main>
      <h1>Redux Toolkit</h1>
      <AddUsers />
      <DisplayUsers />
    </main>
  );
}
