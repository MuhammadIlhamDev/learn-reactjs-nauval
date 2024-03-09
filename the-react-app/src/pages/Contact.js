import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <>
      <section className="contact">
        <h1>Contact page</h1>
        <p className="contact-p">kamu dapat menghubingku disini:</p>
        <ul className="contact-ul">
          <li>Wa : 09278292</li>
          <li>Gmail : ilham@gantengbanget.com1</li>
        </ul>
        <p className="contact-p">atau kamu dapat pansos di sosmed ku</p>
        <ul className="contact-ul">
          <li>
            <a href="https://facebook.com">facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">twiter</a>
          </li>
        </ul>
      </section>
    </>
  );
}
