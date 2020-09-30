import React from "react";
import "./Navbar.css";
import CallIcon from "@material-ui/icons/Call";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="menu-row p-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAGn1UzBBIUgjd37ViQqLf170FRK8UJt7zaw&usqp=CAU"
            width="auto"
            height="70px"
          ></img>
       
        <ul className="menu">
          <li class="menu-item dropdown">
            <Link className="menu-item-link" to="/home">
              <a class="btn p-0 menu-item">
                SAMSUN SAGLAM PROFESYONEL TEMIZLIK
              </a>
            </Link>
          </li>

          <li class="menu-item dropdown">
            <a class="btn p-0 menu-item">KURUMSAL</a>
            <div class="dropdown-content">
              <Link className="menu-item-link" to="/hakkimizda">
                Hakkimizda
              </Link>
              <Link className="menu-item-link" to="/belgelerimiz">
                Belgelerimiz
              </Link>
              <Link className="menu-item-link" to="/referanslarimiz">
                Referanslarimiz
              </Link>
              <Link className="menu-item-link" to="/ekibimiz">
                Ekibimiz
              </Link>
              <Link className="menu-item-link" to="/is-basvurusu">
                Is Basvurusu
              </Link>
              <Link className="menu-item-link" to="/sss">
                S.S.S
              </Link>
              <Link className="menu-item-link" to="/musteri-gorusleri">
                Musteri Gorusleri
              </Link>
            </div>
          </li>

          <li class="menu-item dropdown">
            <a class="btn p-0 menu-item">HIZMETLER</a>
            <div class="dropdown-content">
              <Link className="menu-item-link" to="/hizmet/ev-temizligi">
                Ev Temizligi
              </Link>
              <Link
                className="menu-item-link"
                to="/hizmet/gundelikci-kadin-temini"
              >
                Gundelikci Kadin Temini
              </Link>
              <Link
                className="menu-item-link"
                to="/hizmet/insaat-sonrasi-temizlik"
              >
                Insaat Sonrasi Temizlik
              </Link>
              <Link className="menu-item-link" to="/hizmet/isyeri-temizligi">
                Is Yeri Temizligi
              </Link>
              <Link className="menu-item-link" to="/hizmet/koltuk-yikama">
                Koltuk Yikama
              </Link>
              <Link className="menu-item-link" to="/hizmet/villa-temizligi">
                Villa Temizligi
              </Link>
              <Link className="menu-item-link" to="/hizmet/ofis-temizligi">
                Ofis Temizligi
              </Link>
              <Link className="menu-item-link" to="/hizmetler">
                Tum Hizmetler
              </Link>
            </div>
          </li>

          <li class="menu-item dropdown">
            <Link className="menu-item-link" to="/calisma-prensibimiz">
              <a class="btn p-0 menu-item">CALISMA PRENSIBIMIZ</a>
            </Link>
          </li>

          <li class="menu-item dropdown">
            <a class="btn p-0 menu-item">BOLGELER</a>
            <div class="dropdown-content">
              <Link className="menu-item-link" to="/bolgeler/karsiyaka">
                KARSIYAKA
              </Link>
              <Link className="menu-item-link" to="/bolgeler/bostanli">
                BOSTANLI
              </Link>
              <Link className="menu-item-link" to="/bolgeler/alsancak">
                ALSANCAK
              </Link>
            </div>
          </li>
          <li class="menu-item dropdown">
            <a class="btn p-0 menu-item">GALERI</a>
            <div class="dropdown-content">
              <Link className="menu-item-link" to="/foto-galeri">
                Foto Galeri
              </Link>
              <Link className="menu-item-link" to="/video-galeri">
                Video Galeri
              </Link>
            </div>
          </li>

          <li class="menu-item dropdown">
            <Link className="menu-item-link" to="/blog">
              <a class="btn p-0 menu-item">BLOG</a>
            </Link>
          </li>

          <li class="menu-item dropdown">
            <Link className="menu-item-link" to="/iletisim">
              <a class="btn p-0 menu-item">ILETISIM</a>
            </Link>
          </li>

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
