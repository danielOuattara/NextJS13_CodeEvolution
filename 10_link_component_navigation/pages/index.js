import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blogs">go to blogs</Link>
      <Link href="/products">go to products</Link>
    </div>
  );
}
