import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-brand">
              <h3>Media Info Kreasindo</h3>
              <p>Solusi kreatif digital terdepan untuk mengembangkan bisnis Anda di era digital dengan inovasi dan teknologi terkini.</p>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Layanan</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">Branding & Design</a></li>
              <li><a href="#services">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Perusahaan</h4>
            <ul>
              <li><a href="#about">Tentang Kami</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Kontak</a></li>
              <li><a href="#">Karir</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Ikuti Kami</h4>
            <div class="social-links">
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">Twitter</a>
            </div>
            <div class="contact-info">
              <p>📞 +62 21 1234 5678</p>
              <p>✉️ info@mediainfokreasindo.com</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Media Info Kreasindo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #2c3e50;
      color: white;
      padding: 60px 0 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 5%;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-section h3,
    .footer-section h4 {
      margin-bottom: 1.5rem;
      color: #3498db;
    }

    .footer-section h3 {
      font-size: 1.5rem;
    }

    .footer-section h4 {
      font-size: 1.2rem;
    }

    .footer-brand p {
      line-height: 1.8;
      opacity: 0.9;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section li {
      margin-bottom: 0.8rem;
    }

    .footer-section a {
      color: white;
      text-decoration: none;
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    .footer-section a:hover {
      opacity: 1;
      color: #3498db;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-bottom: 2rem;
    }

    .social-link {
      display: inline-block;
      padding: 0.5rem 0;
    }

    .contact-info p {
      margin-bottom: 0.5rem;
      opacity: 0.9;
    }

    .footer-bottom {
      border-top: 1px solid #34495e;
      padding-top: 2rem;
      text-align: center;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .footer {
        padding: 40px 0 20px;
      }
    }
  `]
})
export class FooterComponent {

}
