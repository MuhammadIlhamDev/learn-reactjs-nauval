import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const param = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      document.title = `Blog Detail ${param.id}`;
      async function getBlog() {
        try {
          const request = await fetch(
            `https://equran.id/api/v2/surat/${param.id}`
          );
          if (!request.ok) {
            const errorData = await request.json();
            throw new Error(errorData.message);
          }
          const respon = await request.json();
          setData(respon);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
      getBlog();
    },
    // eslint-disable-next-line
    [param]
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <section className="blog-detail">
        <h1>Blog Detail</h1>
        {loading ? (
          <p>loading...</p>
        ) : (
          <article className="blog-detail-article">
            {data.data && (
              <>
                <h2>{data.data.nomor}</h2>
                <p>{data.data.namaLatin}</p>
                <p>{data.data.arti}</p>
                <p>{data.data.tempatTurun}</p>
              </>
            )}
          </article>
        )}
      </section>
    </>
  );
}
