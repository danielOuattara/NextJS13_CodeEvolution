import { useRouter } from "next/router";

export default function ProductReview() {
  console.log(useRouter().query);
  const productId = useRouter().query.productId;
  const reviewId = useRouter().query.reviewId;
  return (
    <p>
      reviews {reviewId} for product {productId}
    </p>
  );
}
