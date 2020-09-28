import React from "react";
import "./Navbar.css";
import CallIcon from "@material-ui/icons/Call";

function Navbar() {
  return (
    <div>
      <div className="menu-row row p-1">
        <ul className="menu">
          <li className="menu-item">Company Name</li>

          <li class="menu-item dropdown">
            <a class="btn p-0 menu-item">KURUMSAL</a>
            <div class="dropdown-content">
              <a href="#">Hakkimizda</a>
              <a href="#">Belgelerimiz</a>
              <a href="#">Referanslarimiz</a>
              <a href="#">Ekibimiz</a>
              <a href="#">Is Basvurusu</a>
              <a href="#">S.S.S</a>
              <a href="#">Musteri Gorusleri</a>
            </div>
          </li>

          <li class="menu-item dropdown">
            <a class="btn p-0 menu-item">HIZMETLER</a>
            <div class="dropdown-content">
              <a href="#">Ev Temizligi</a>
              <a href="#">Gundelikci Kadin Temini</a>
              <a href="#">Insaat Sonrasi Temizlik</a>
              <a href="#">Is Yeri Temizligi</a>
              <a href="#">Koltuk Yikama</a>
              <a href="#">Villa Temizligi</a>
              <a href="#">Ofis Temizligi</a>
              <a href="#">Tum Hizmetler</a>
            </div>
          </li>
          <li className="menu-item">CALISMA PRENSIBIMIZ</li>
          <li class="menu-item dropdown">
            <a class="btn p-0 menu-item">BOLGELER</a>
            <div class="dropdown-content">
              <a href="#">KARSIYAKA</a>
              <a href="#">BOSTANLI</a>
              <a href="#">ALSANCAK</a>
            </div>
          </li>
          <li class="menu-item dropdown">
            <a class="btn p-0 menu-item">GALERI</a>
            <div class="dropdown-content">
              <a href="#">Foto Galeri</a>
              <a href="#">Video Galeri</a>
            </div>
          </li>
          <li className="menu-item">BLOG</li>
          <li className="menu-item">ILETISIM</li>
          <li class="menu-item call">
            <CallIcon></CallIcon>
            <span>0322 429 39 67</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
