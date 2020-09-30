import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/body/corporate/aboutUs/About";
import Belgelerimiz from "./components/body/corporate/belgelerimiz/Belgelerimiz";
import Refer from "./components/body/corporate/references/Refer";
import Team from "./components/body/corporate/team/Team";
import Job from "./components/body/corporate/job-application/Job";
import Sss from "./components/body/corporate/sss/Sss";
import Customer from "./components/body/corporate/customer-comments/Customer";
import HouseCleaning from "./components/body/services/house-cleaning/HouseCleaning";
import Gundelikci from "./components/body/services/gundelikci-kadin-temini/Gundelikci";
import InsaatSonrasi from "./components/body/services/insaat-sonrasi-temizlik/InsaatSonrasi";
import IsYeri from "./components/body/services/is-yeri-temizligi/Isyeri";
import KoltukYikama from "./components/body/services/koltuk-yikama/KoltukYikama";
import Villa from "./components/body/services/villa-temizligi/Villa";
import OfisTemizligi from "./components/body/services/ofis-temizligi/OfisTemizligi";
import Services from "./components/body/services/Services";
import Principles from "./components/body/working-principles/Principles";
import PhotoGallery from "./components/body/gallery/photo-gallery/PhotoGallery";
import VideoGallery from "./components/body/gallery/video-gallery/VideoGallery";
import Blog from "./components/body/blog/Blog";
import Contact from "./components/body/contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
        
          <Route exact path="/home"         component={Body} />
          <Route path="/hakkimizda" component={About} />
          <Route path="/belgelerimiz" component={Belgelerimiz} />
          <Route path="/referanslarimiz" component={Refer} />
          <Route path="/ekibimiz" component={Team} />
          <Route path="/is-basvurusu" component={Job} />
          <Route path="/sss" component={Sss} />
          <Route path="/musteri-gorusleri" component={Customer} />
          <Route path="/hizmet/ev-temizligi" component={HouseCleaning} />
          <Route path="/hizmet/gundelikci-kadin-temini" component={Gundelikci} />
          <Route path="/hizmet/insaat-sonrasi-temizlik" component={InsaatSonrasi} />
          <Route path="/hizmet/isyeri-temizligi" component={IsYeri} />
          <Route path="/hizmet/koltuk-yikama" component={KoltukYikama} />
          <Route path="/hizmet/villa-temizligi" component={Villa} />
          <Route path="/hizmet/ofis-temizligi" component={OfisTemizligi} />
          <Route path="/hizmetler" component={Services} />
          <Route path="/calisma-prensibimiz" component={Principles} />
          <Route path="/foto-galeri" component={PhotoGallery} />
          <Route path="/video-galeri" component={VideoGallery} />
          <Route path="/blog" component={Blog} />
          <Route path="/iletisim" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
