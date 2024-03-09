import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog";
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <section className="blog">
        <h1>blog page</h1>
        {loading ? (
          <p>loading...</p>
        ) : (
          data.data.map((item) => {
            return (
              <article key={item.nomor} className="blog-article">
                <h2>
                  <Link to={`/blog/${item.nomor}`}> {item.namaLatin} </Link>
                </h2>
              </article>
            );
          })
        )}
      </section>
    </>
  );
}
