import "./Footer.css";
let currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="social">
        <a href="https://github.com/AxMar1221" target="blank">
          <img src="/img/github.png" alt="Github" />
        </a>

        <a href="https://twitter.com/flako_7inc" target="blank">
          <img src="/img/twitter.png" alt="Twitter" />
        </a>

        <a href="https://www.instagram.com/tachidito_7inc/" target="blank">
          <img src="/img/instagram.png" alt="Instagram" />
        </a>

        <a href="https://www.linkedin.com/in/mario-hern%C3%A1ndez-ram%C3%ADrez-jim%C3%A9nez-aa5b8a237/" target="blank">
          <img src="/img/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="logo-org" />
      <strong>
        Desarrollado por Mario Hernández
        <span> &copy; {currentYear}</span>
      </strong>
    </footer>
  );
};
