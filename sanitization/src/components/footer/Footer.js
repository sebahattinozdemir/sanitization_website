import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div>
      <Grid container className="footer mt-4">
        <Grid item xs={3} className="footer1 p-4">
          <p>
            1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri
            ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan
            1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan
            İngilizce sürümleri eşliğinde özgün biçiminden yeniden üretilmiştir.
          </p>
          <b>info@saglamhijyen.com</b>
          <br/>
          <b>0(232) 368 88 84</b>
          <br/>
          <a href="https://www.facebook.com/114979717021494?referrer=whatsapp"><FacebookIcon/></a>
          <a href="#"><InstagramIcon/></a>

        </Grid>

        <Grid item xs={3} className="footer2 p-4">
          <h5>Hizmetlerimiz</h5>
          <ul>
              <li>Yazlik Temizligi</li>
              <li>Ev Temizligi</li>
              <li>Is Yeri Temizligi</li>
              <li>Villa Temizligi</li>
          </ul>
        </Grid>

        <Grid item xs={3} className="footer3 p-4">
          <h5>Hizmet Bolgeleri</h5>
          <p> Samsun İl Sınırları İçerisinde Bulunan Bütün İlçe ve Komşu İllerimizin Tamamına Hizmet Vermekteyiz.</p>
        </Grid>

        <Grid item xs={3} className="footer4 p-4">
          <h5>Kurumsal</h5>
          <ul>
              <li>Hakkimizda</li>
              <li>Foto Galeri</li>
              <li>Video Galeri</li>
              <li>Blog</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
