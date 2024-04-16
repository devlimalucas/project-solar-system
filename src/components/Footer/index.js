import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './styles.css';

function Footer() {
  return (
    <footer className="container footer col-mp-12">
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
      <div className="container icons">
        <div className="container icon">
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
        <div className="container icon">
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
