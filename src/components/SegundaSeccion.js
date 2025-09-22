import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SegundaSeccion.css';

const cards = [
  {
    title: 'Controla tu casa en cualquier momento',
    desc: (
      <>
        <ul>
          <li>Manejá puertas y ventanas</li>
          <li>Mir&aacute; las c&aacute;maras de tu casa</li>
          <li>Sab&eacute; qui&eacute;n entra y cuando</li>
        </ul>
        <a href="#">Conocé más sobre esto &gt;</a>
      </>
    ),
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // chica con celu (stock)
    className: 'card1'
  },
  {
    title: 'Disfruta tranquilo, nosotros te avisamos',
    desc: (
      <>
        Nuestra <b>inteligencia artificial</b> está activa 24/7, avisando de cualquier suceso a vos y a la policía.<br />
        <a href="#">Conocé más de nuestra IA &gt;</a>
      </>
    ),
    img: 'https://create.vista.com/unlimited/stock-photos/225666050/stock-photo-attractive-smiling-couple-eating-together-sushi-rolls-restaurant/',
    className: 'card2'
  },
  {
    title: 'Te cuidamos a vos y a tu familia',
    desc: (
      <>
        <b>Disfrutá</b> los momentos con tu familia, que son únicos. De <b>cuidarlos</b> nos encargamos nosotros.<br />
        <a href="#">Conocé más de la seguridad &gt;</a>
      </>
    ),
    img: 'https://previews.123rf.com/images/lenanichizhenova/lenanichizhenova1804/lenanichizhenova180400021/100633893-happy-family-mother-and-baby-playing-and-laughing-at-home.jpg',
    className: 'card3'
  },
  {
    title: 'Aviso instantáneo ante un problema',
    desc: (
      <>
        Si sucede algo <b>avisamos al instante a la policía</b>.<br />
        <a href="#">Conocé más &gt;</a>
      </>
    ),
    img: 'https://c4.wallpaperflare.com/wallpaper/101/101/101/a-motorcycle-police-officer-wallpaper-preview.jpg',
    className: 'card4'
  },
  {
    title: 'La seguridad mas inteligente',
    desc: (
      <>
        El <b>mejor sistema de inteligencia artificial</b> del mercado entrenado para <b>protegerte</b> a vos.<br />
        <a href="#">Conocé más del sistema &gt;</a>
      </>
    ),
    img: 'https://img.freepik.com/premium-photo/control-room-hd-8k-wallpaper-stock-photographic-image_853645-37405.jpg',
    className: 'card5'
  }
];

export default function SegundaSeccion() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="segunda-seccion">
      <h2 data-aos="fade-up">Eva, la mejor seguridad</h2>
      <div className="cards-grid">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`card ${card.className}`}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <div className="card-bg" style={{ backgroundImage: `url(${card.img})` }} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <div className="desc">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="contacto" data-aos="fade-up" data-aos-delay="800">
        <h2>
          ¡Dejanos cuidarte! <span className="verde">Contactate</span> con nosotros
        </h2>
      </div>
    </section>
  );
}