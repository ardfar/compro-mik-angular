import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <img src="assets/logo.png" alt="Media Info Kreasindo" class="logo" />
          <span class="brand-text">Media Info Kreasindo</span>
        </div>
        <ul class="nav-menu">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#services">Layanan</a></li>
          <li><a href="#portfolio">Portofolio</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <button class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 5%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo {
      height: 40px;
      width: auto;
    }

    .brand-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2c3e50;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-menu a {
      text-decoration: none;
      color: #2c3e50;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-menu a:hover {
      color: #3498db;
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
    }

    .nav-toggle span {
      width: 25px;
      height: 3px;
      background: #2c3e50;
      margin: 3px 0;
      transition: 0.3s;
    }

    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }
      
      .nav-toggle {
        display: flex;
      }
    }
  `]
})
export class Header {

}
