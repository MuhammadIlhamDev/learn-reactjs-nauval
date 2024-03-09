import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const urlParams = useParams();
  console.log(urlParams);
  return (
    <>
      <h1>Halaman Blog Detail</h1>
      <p>Halo ini adalah Halaman Blog Detail {urlParams.id}</p>
    </>
  );
}
