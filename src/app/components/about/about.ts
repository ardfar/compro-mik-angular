import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Tentang Kami</h2>
          <p class="section-subtitle">
            Media Info Kreasindo - Partner Terpercaya untuk Solusi Digital Anda
          </p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <h3>Visi Kami</h3>
            <p>
              Menjadi perusahaan terdepan dalam memberikan solusi kreatif dan teknologi digital 
              yang inovatif untuk membantu bisnis berkembang di era digital.
            </p>
            
            <h3>Misi Kami</h3>
            <ul>
              <li>Memberikan layanan berkualitas tinggi dengan pendekatan yang personal</li>
              <li>Menggunakan teknologi terkini untuk menciptakan solusi yang efektif</li>
              <li>Membangun hubungan jangka panjang dengan klien melalui kepercayaan</li>
              <li>Terus berinovasi untuk menghadapi tantangan digital masa depan</li>
            </ul>
          </div>
          
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">150+</div>
              <div class="stat-label">Proyek Selesai</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Klien Puas</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">5+</div>
              <div class="stat-label">Tahun Pengalaman</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 80px 0;
      background: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 5%;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #7f8c8d;
      max-width: 600px;
      margin: 0 auto;
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: start;
    }

    .about-text h3 {
      font-size: 1.5rem;
      color: #2c3e50;
      margin: 2rem 0 1rem 0;
    }

    .about-text h3:first-child {
      margin-top: 0;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 1.5rem;
    }

    .about-text ul {
      list-style: none;
      padding: 0;
    }

    .about-text li {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 1.5rem;
    }

    .about-text li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #3498db;
      font-weight: bold;
    }

    .about-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .stat-item {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .stat-item:hover {
      transform: translateY(-5px);
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: #3498db;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1rem;
      color: #7f8c8d;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .about-stats {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .stat-item {
        padding: 1.5rem;
      }
    }
  `]
})
export class AboutComponent {

}
