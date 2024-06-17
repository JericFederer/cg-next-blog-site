import Image from "next/image";
import Link from "next/link";
import ProductCard from "./users/components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Next JS Demo App</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
