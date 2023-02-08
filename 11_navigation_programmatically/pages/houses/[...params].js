import { useRouter } from "next/router";

const Houses = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h2>
        Viewing houses for prices betw. - {params[0]} - and - {params[1]} -
      </h2>
    );
  }
  if (params.length === 1) {
    return <h2>Viewing houses for prices mim. ${params[0]} </h2>;
  }

  return <h1>Docs Home Page</h1>;
};

export default Houses;
