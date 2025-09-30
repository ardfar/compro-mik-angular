import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="highlight">Media Info Kreasindo</span><br>
            Solusi Kreatif Digital Terdepan
          </h1>
          <p class="hero-description">
            Kami menghadirkan solusi kreatif dan inovatif untuk kebutuhan digital perusahaan Anda. 
            Dari branding, web development, hingga strategi pemasaran digital yang efektif.
          </p>
          <div class="hero-buttons">
            <a href="#services" class="btn btn-primary">Layanan Kami</a>
            <a href="#portfolio" class="btn btn-secondary">Lihat Portfolio</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-placeholder">
            <div class="floating-element element-1"></div>
            <div class="floating-element element-2"></div>
            <div class="floating-element element-3"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      padding: 80px 5% 60px;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="80" r="1" fill="white" opacity="0.1"/><circle cx="40" cy="60" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .highlight {
      background: linear-gradient(45deg, #00f2fe, #4facfe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-description {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 2.5rem;
      opacity: 0.9;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
      text-align: center;
    }

    .btn-primary {
      background: linear-gradient(45deg, #00f2fe, #4facfe);
      color: white;
      box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(79, 172, 254, 0.6);
    }

    .btn-secondary {
      border: 2px solid white;
      color: white;
      background: transparent;
    }

    .btn-secondary:hover {
      background: white;
      color: #667eea;
      transform: translateY(-2px);
    }

    .hero-image {
      position: relative;
      height: 400px;
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      backdrop-filter: blur(10px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .floating-element {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(45deg, #00f2fe, #4facfe);
      animation: float 3s ease-in-out infinite;
    }

    .element-1 {
      width: 60px;
      height: 60px;
      top: 10%;
      right: 10%;
      animation-delay: 0s;
    }

    .element-2 {
      width: 80px;
      height: 80px;
      bottom: 20%;
      left: 10%;
      animation-delay: 1s;
    }

    .element-3 {
      width: 40px;
      height: 40px;
      top: 50%;
      right: 20%;
      animation-delay: 2s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 100px 5% 60px;
      }
      
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-description {
        font-size: 1.1rem;
      }
      
      .hero-buttons {
        justify-content: center;
      }
    }
  `]
})
export class HeroComponent {

}
