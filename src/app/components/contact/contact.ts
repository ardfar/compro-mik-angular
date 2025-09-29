import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Hubungi Kami</h2>
          <p class="section-subtitle">
            Siap membantu mewujudkan visi digital Anda. Mari diskusikan proyek Anda!
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-details">
                <h4>Alamat</h4>
                <p>Jl. Teknologi Digital No. 123<br>Jakarta Selatan, DKI Jakarta 12345</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div class="info-details">
                <h4>Telepon</h4>
                <p>+62 21 1234 5678<br>+62 812 3456 7890</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">✉️</div>
              <div class="info-details">
                <h4>Email</h4>
                <p>info@mediainfokreasindo.com<br>hello@mediainfokreasindo.com</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">🕒</div>
              <div class="info-details">
                <h4>Jam Operasional</h4>
                <p>Senin - Jumat: 09:00 - 18:00<br>Sabtu: 09:00 - 15:00</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <form>
              <div class="form-group">
                <input type="text" placeholder="Nama Lengkap" required>
              </div>
              <div class="form-group">
                <input type="email" placeholder="Email Address" required>
              </div>
              <div class="form-group">
                <input type="tel" placeholder="Nomor Telepon">
              </div>
              <div class="form-group">
                <select required>
                  <option value="">Pilih Layanan</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="branding">Branding & Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="consulting">IT Consulting</option>
                </select>
              </div>
              <div class="form-group">
                <textarea placeholder="Pesan Anda" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .info-icon {
      font-size: 2rem;
      margin-right: 1rem;
      margin-top: 0.2rem;
    }

    .info-details h4 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .info-details p {
      color: #666;
      line-height: 1.6;
    }

    .contact-form {
      background: #f8f9fa;
      padding: 2.5rem;
      border-radius: 15px;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e9ecef;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #3498db;
    }

    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: #3498db;
      color: white;
      width: 100%;
    }

    .btn-primary:hover {
      background: #2980b9;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .contact-form {
        padding: 2rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class ContactComponent {

}
