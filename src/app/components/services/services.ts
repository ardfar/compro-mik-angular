import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  template: `
    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Layanan Kami</h2>
          <p class="section-subtitle">
            Solusi lengkap untuk kebutuhan digital dan kreatif perusahaan Anda
          </p>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h3>Branding & Design</h3>
            <p>
              Menciptakan identitas visual yang kuat dan memorable untuk brand Anda. 
              Meliputi logo design, brand guidelines, dan material promosi.
            </p>
            <ul>
              <li>Logo & Brand Identity</li>
              <li>Brand Guidelines</li>
              <li>Marketing Materials</li>
              <li>Print & Digital Design</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>
              Pengembangan website profesional yang responsif dan user-friendly. 
              Dari landing page hingga aplikasi web kompleks.
            </p>
            <ul>
              <li>Website Corporate</li>
              <li>E-commerce Platform</li>
              <li>Web Application</li>
              <li>CMS & Dashboard</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">📱</div>
            <h3>Mobile App Development</h3>
            <p>
              Pembuatan aplikasi mobile native dan cross-platform yang inovatif 
              untuk iOS dan Android dengan performa optimal.
            </p>
            <ul>
              <li>iOS & Android Apps</li>
              <li>Cross-platform Development</li>
              <li>UI/UX Design</li>
              <li>App Store Optimization</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">📈</div>
            <h3>Digital Marketing</h3>
            <p>
              Strategi pemasaran digital yang komprehensif untuk meningkatkan 
              visibility dan engagement brand Anda di dunia digital.
            </p>
            <ul>
              <li>Social Media Management</li>
              <li>SEO & SEM</li>
              <li>Content Marketing</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🛡️</div>
            <h3>IT Consulting</h3>
            <p>
              Konsultasi teknologi informasi untuk mengoptimalkan infrastruktur 
              digital dan proses bisnis perusahaan Anda.
            </p>
            <ul>
              <li>System Architecture</li>
              <li>Technology Assessment</li>
              <li>Digital Transformation</li>
              <li>Security Consulting</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🎥</div>
            <h3>Content Creation</h3>
            <p>
              Produksi konten kreatif yang engaging untuk berbagai platform digital. 
              Dari fotografi hingga video production.
            </p>
            <ul>
              <li>Photography</li>
              <li>Video Production</li>
              <li>Motion Graphics</li>
              <li>Copywriting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 80px 0;
      background: white;
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2.5rem;
      border-radius: 15px;
      box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-top: 4px solid #3498db;
    }

    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      display: block;
    }

    .service-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .service-card p {
      font-size: 1rem;
      color: #666;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .service-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .service-card li {
      font-size: 0.9rem;
      color: #7f8c8d;
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;
    }

    .service-card li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #3498db;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .service-card {
        padding: 2rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }

    @media (max-width: 480px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .service-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class ServicesComponent {

}
