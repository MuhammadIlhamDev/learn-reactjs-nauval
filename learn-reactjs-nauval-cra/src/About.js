import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>
        Halo ini adalah Halaman about untuk selanjutnya tentang kami bisa klik
        di bawah ini
      </p>
      <ul>
        <li>
          <Link to={"/about/team"}>Team</Link>
        </li>
        <Outlet />
      </ul>
    </>
  );
}
