import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './styles.css';

function Footer() {
  return (
    <footer className="footer-container col-mp-12">
      <div>
        <p>
          Desenvolvido por
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dev-lucas-lima-pe/"
            rel="noreferrer"
          >
            Lucas Lima
          </a>
        </p>
      </div>
      <div className="icons-container col-mp-12">
        <div>
          <a
            className="a-linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/dev-lucas-lima-pe/"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://github.com/devlimalucas"
            rel="noreferrer"
          >
            <AiFillGithub className="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
