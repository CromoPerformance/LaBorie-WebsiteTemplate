import './CaptivatingSection.css'

const cards = [
  {
    id: 'sunset',
    eyebrow: 'Geribá Lifestyle',
    label: 'Pôr do Sol em Geribá',
    img: '/hotel_room.png',
    imgAlt: 'Vista do pôr do sol',
  },
  {
    id: 'dining',
    eyebrow: 'Chez Françoise',
    label: 'Alta Gastronomia',
    img: '/champagne_dining.png',
    imgAlt: 'Restaurante Chez Françoise',
  },
  {
    id: 'spa',
    eyebrow: 'Rêverie Tropicale',
    label: 'Rituais de Relaxamento',
    img: '/bathroom_tub.png',
    imgAlt: 'La Borie Wellness',
  },
]

export default function CaptivatingSection({ onBookNow }) {
  return (
    <section id="captivating" className="captivating">
      <div className="captivating__inner">

        {/* Header */}
        <div className="captivating__header">
          <p className="captivating__eyebrow">Experiências Exclusivas</p>
          <h2 className="captivating__title">
            Momentos Inesquecíveis<br />
            à Beira-Mar
          </h2>
        </div>

        {/* 3-column photo cards with overlay */}
        <div className="captivating__grid">
          {cards.map((card) => (
            <article key={card.id} className="captivating__card">
              <div className="captivating__card-img-wrap">
                <img
                  src={card.img}
                  alt={card.imgAlt}
                  className="captivating__card-img"
                />
                <div className="captivating__card-overlay">
                  <p className="captivating__card-eyebrow">{card.eyebrow}</p>
                  <p className="captivating__card-label">{card.label}</p>
                  <a href="#hero" className="captivating__card-link">Descubra</a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
