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
            href="https://www.linkedin.com/in/devlimalucas/"
            rel="noreferrer"
          >
            Lucas Lima
          </a>
        </p>
      </div>
      <div className="linkedin icons-container col-mp-12">
        <div className="icon-container col-mp-6">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/devlimalucas/"
            rel="noreferrer"
          >
            <AiFillLinkedin
              size={ 50 }
            />
          </a>
        </div>
        <div className="icon-container col-mp-6">
          <a
            target="_blank"
            href="https://github.com/devlimalucas"
            rel="noreferrer"
          >
            <AiFillGithub
              size={ 50 }
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
