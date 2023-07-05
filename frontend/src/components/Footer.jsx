import './Footer.css';
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer-home">
      <div className="footer-left">
        <h2>FIQUE POR  DENTRO DO NOSSO <span className="strong-footer"> CONTEÚDO: </span></h2>
        <nav className="nav-footer-link">
          <a className="link"><AiOutlineInstagram /></a>
          <a className="link"><AiOutlineWhatsApp /></a>
          <a className="link"><AiOutlineYoutube /></a>
        </nav>
      </div>
      <div className="footer-right">
        <h2>QUER SER NOSSO <span className="strong-footer"> PARCEIRO? </span></h2>
        <p>Conheça o clube NP, e venha integrar nossa rede técnica de empresas e profissionais.</p>
        <a className="link-partners">saiba mais <span className="t">&gt;&gt;&gt;</span></a>
        {/* <button className="btn-plans">CONHEÇA OS PLANOS</button> */}
      </div>
    </footer>
  );
}

export default Footer;
