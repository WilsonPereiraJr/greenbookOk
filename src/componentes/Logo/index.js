import "./styles.css";
import logoGreenbook from "/Users/Wills/OneDrive/Documentos/Estudos/greenbook-react/greenbook/src/imagens/logo-greenbook.png";
export default function Logo() {
  return (
    <div className="logo">
      <img src={logoGreenbook} alt="Logo Greenbook" />
    </div>
  );
}
