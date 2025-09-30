import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  template: `
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Portfolio Kami</h2>
          <p class="section-subtitle">
            Lihat berbagai proyek yang telah kami kerjakan dengan hasil yang memuaskan klien
          </p>
        </div>
        
        <div class="portfolio-filters">
          <button class="filter-btn active" (click)="filterProjects('all')">Semua</button>
          <button class="filter-btn" (click)="filterProjects('web')">Web Design</button>
          <button class="filter-btn" (click)="filterProjects('mobile')">Mobile App</button>
          <button class="filter-btn" (click)="filterProjects('branding')">Branding</button>
        </div>
        
        <div class="portfolio-grid">
          <div class="portfolio-item" data-category="web">
            <div class="portfolio-image">
              <div class="image-placeholder">
                <div class="overlay">
                  <h4>E-Commerce Platform</h4>
                  <p>Website toko online dengan fitur lengkap</p>
                  <span class="category">Web Development</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="mobile">
            <div class="portfolio-image">
              <div class="image-placeholder">
                <div class="overlay">
                  <h4>Food Delivery App</h4>
                  <p>Aplikasi mobile untuk delivery makanan</p>
                  <span class="category">Mobile App</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="branding">
            <div class="portfolio-image">
              <div class="image-placeholder">
                <div class="overlay">
                  <h4>Corporate Branding</h4>
                  <p>Identitas visual untuk perusahaan teknologi</p>
                  <span class="category">Branding & Design</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="web">
            <div class="portfolio-image">
              <div class="image-placeholder">
                <div class="overlay">
                  <h4>Company Profile</h4>
                  <p>Website corporate yang modern dan responsif</p>
                  <span class="category">Web Development</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="mobile">
            <div class="portfolio-image">
              <div class="image-placeholder">
                <div class="overlay">
                  <h4>Banking App</h4>
                  <p>Aplikasi mobile banking yang aman</p>
                  <span class="category">Mobile App</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="branding">
            <div class="portfolio-image">
              <div class="image-placeholder">
                <div class="overlay">
                  <h4>Restaurant Branding</h4>
                  <p>Brand identity untuk chain restaurant</p>
                  <span class="category">Branding & Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio {
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

    .portfolio-filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.8rem 1.5rem;
      border: 2px solid #3498db;
      background: transparent;
      color: #3498db;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .filter-btn.active,
    .filter-btn:hover {
      background: #3498db;
      color: white;
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .portfolio-item {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .portfolio-item:hover {
      transform: translateY(-10px);
    }

    .portfolio-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .portfolio-item:hover .overlay {
      opacity: 1;
    }

    .overlay h4 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .overlay p {
      font-size: 1rem;
      margin-bottom: 1rem;
      opacity: 0.9;
    }

    .category {
      background: #3498db;
      color: white;
      padding: 0.3rem 1rem;
      border-radius: 15px;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @media (max-width: 768px) {
      .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .portfolio-filters {
        gap: 0.5rem;
      }
      
      .filter-btn {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class PortfolioComponent {
  filterProjects(category: string) {
    // Portfolio filtering logic would be implemented here
    console.log('Filtering by:', category);
    
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event?.target && (event.target as HTMLElement).classList.add('active');
  }
}
