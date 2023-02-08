import { useRouter } from "next/router";

export default function BookDetails() {
  console.log(useRouter().query);
  const bookId = useRouter().query.bookId;
  return <p>details for book {bookId}</p>;
}
