import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order OK");
    router.push("/products");
  };

  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blogs">go to blogs</Link>
      <Link href="/products">go to products</Link>

      <button onClick={handleClick}>Place order</button>
    </div>
  );
}
