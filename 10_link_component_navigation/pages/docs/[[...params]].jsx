import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  console.log(router.query);
  const { params = [] } = router.query; // initial value pre-rendering = []
  console.log("params = ", params);

  if (params.length === 2) {
    return (
      <h2>
        Viewing docs for feature - {params[0]} - and concept - {params[1]} -
      </h2>
    );
  }
  if (params.length === 1) {
    return <h2>Viewing docs for feature - {params[0]} </h2>;
  }

  return <div>Doc</div>;
}
