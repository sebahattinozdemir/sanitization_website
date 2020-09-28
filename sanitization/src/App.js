import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Services from "./components/Services";



function App() {
  return (
    <div className="App">
      <header className="App-header" style={{border:"2px solid red"}}>
        
        <Navbar/>
        <br/>
        <br/>
        <Slider/>
        <br/>
        <br/>
        <div className="cards_body">
         
          <Services 
            title="Dezenfekte Hijyen"
            text="Ev ve İşyerlerinizde Gözle Görülmeyen Hertürlü Virüs Mikrop ve Mikroorganizmalara karşı İSO9001 Belgeli ve ..."
          />
           <Services 
            title="Ofis Temizliği"
            text="Çalışma Alanlarınızda Temizliğinizi Önemsiyor Siz Değerli Müşterilerimizin Çalışma Alanlarında Kaparak Evlerinizde .."
          />
          <Services 
            title="Ev Temizliği"
            text="Daire, Rezidans, Villa larınızın Profesyonel ekibimiz ile Detaylı Temizlik ve dezenfektan İşlemleri Uzman Personellerimizce ..."
          />
          <Services 
            title="Hamaliye Temini"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
          />
          <br/>
          <br/>
          <Services 
            title="Koltuk Yıkama"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
          />
          <Services 
            title="Halı Yıkama"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
          />
          <Services 
            title="Merdiven Temizliği"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
          />
          <Services 
            title="Yurt-Cami Temizliği"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
          />
          
        </div>
        
          
        
       
        
      </header>
    </div>
  );
}

export default App;
