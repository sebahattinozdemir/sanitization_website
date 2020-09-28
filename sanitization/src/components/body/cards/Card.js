import React from "react";
import Services from "./../services/Services";
import Grid from "@material-ui/core/Grid";
import "./Card.css"
function Card() {
  return (
    <div>
      <div className="cards_body">
        <Grid container spacing={2}>
          <Grid item xs={3} className="card-item">
            <Services
              title="Dezenfekte Hijyen"
              text="Ev ve İşyerlerinizde Gözle Görülmeyen Hertürlü Virüs Mikrop ve Mikroorganizmalara karşı İSO9001 Belgeli ve ..."
            />
          </Grid>

          <Grid item xs={3}>
            <Services
              title="Ofis Temizliği"
              text="Çalışma Alanlarınızda Temizliğinizi Önemsiyor Siz Değerli Müşterilerimizin Çalışma Alanlarında Kaparak Evlerinizde .."
            />
          </Grid>
          <Grid item xs={3}>
            <Services
              title="Ev Temizliği"
              text="Daire, Rezidans, Villa larınızın Profesyonel ekibimiz ile Detaylı Temizlik ve dezenfektan İşlemleri Uzman Personellerimizce ..."
            />
          </Grid>
          <Grid item xs={3}>
            <Services
              title="Hamaliye Temini"
              text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            />
          </Grid>
          <Grid item xs={3}>
            <Services
              title="Koltuk Yıkama"
              text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            />
          </Grid>
          <Grid item xs={3}>
            <Services
              title="Halı Yıkama"
              text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            />
          </Grid>
          <Grid item xs={3}>
            <Services
              title="Merdiven Temizliği"
              text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            />
          </Grid>
          <Grid item xs={3}>
            <Services
              title="Yurt-Cami Temizliği"
              text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Card;
