import { useState } from 'react'
import './QueenBedroomSection.css'

const tabs = ['Visão Geral', 'Suítes Master', 'Suítes Confort']

export default function QueenBedroomSection({ onBookNow }) {
  const [activeTab, setActiveTab] = useState('Visão Geral')

  return (
    <section id="queen" className="queen">

      {/* ── Full-width 50/50 hero ── */}
      <div className="queen__hero">

        {/* Left — text */}
        <div className="queen__left">
          <p className="queen__eyebrow">Suítes &amp; Chalés</p>

          <h2 className="queen__title">
            Refúgio de Charme<br />
            com Hospitalidade<br />
            de Praia em<br />
            Geribá
          </h2>

          <div className="queen__tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`queen__tab ${activeTab === tab ? 'queen__tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="queen__body">
            O Le Relais La Borie dispõe de 7 categorias exclusivas de suítes, 
            projetadas para o seu máximo conforto à beira-mar. Seja escolhendo a vista 
            deslumbrante da Suíte Master Mar ou o sossego tropical da Suíte Confort Jardim, 
            nossa hospitalidade garante uma estadia inesquecível.
          </p>

          <div className="queen__actions">
            <a href="#queen" className="queen__read-more">
              Ver Todas as Suítes
              <span className="arrow">→</span>
            </a>

            <button className="queen__cta" onClick={onBookNow}>
              Reserve sua estadia
            </button>
          </div>
        </div>

        {/* Right — placeholder (image TBD) */}
        <div className="queen__right">
          <div className="queen__placeholder" aria-label="Imagem em breve" />
        </div>

      </div>

    </section>
  )
}
