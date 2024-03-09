import {useEffect} from 'react';

export default function Profile() {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <>
      <section className="profile">
        <h1>Profile page</h1>
        <p className="profile-p">
          halo namaku ilham saya adalah seorang web developer lulusan harvard
        </p>
      </section>
    </>
  );
}
