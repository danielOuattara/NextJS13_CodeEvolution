import { useRouter } from "next/router";

export default function ReviewDetails() {
  console.log(useRouter().query);
  const productId = useRouter().query.productId;
  return <p>simple details for product {productId}</p>;
}
