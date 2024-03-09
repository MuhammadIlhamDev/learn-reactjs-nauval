import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
      <section className="home">
        <h1>selamat datang di website ku</h1>
        <p className="home-p">
          Halo semua. ini adalah website baruku disini kalian bisa melihat atau
          mendapatkan informasi pribadiku
        </p>
      </section>
    </>
  );
}
