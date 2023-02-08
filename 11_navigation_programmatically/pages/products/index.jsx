import Link from "next/link";

export default function Product({ productId = 23 }) {
  return (
    <>
      <h1>Product page</h1>
      <p>
        <Link href="/products/1">product 1</Link>
      </p>
      <p>
        <Link href="/products/2">product 2</Link>
      </p>
      <p>
        <Link href={`/products/${productId}`}>product {productId}</Link>
      </p>
      <Link href="/">go home</Link>
    </>
  );
}
