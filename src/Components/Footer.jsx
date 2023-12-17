import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by Mohammad Saifuddin</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer