import FooterStyle from "../scss/footer.module.scss";

function Footer() {
  return (
    <div className={FooterStyle.footer}>
      <p className={FooterStyle.title}>
        Copyright® Eypes LLC {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
