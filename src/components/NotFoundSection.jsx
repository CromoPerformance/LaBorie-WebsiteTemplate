import './NotFoundSection.css'

export default function NotFoundSection() {
  return (
    <section id="404" className="nf">
      <div className="nf__content">
        {/* 404 with Flower on 0 */}
        <div className="nf__number-wrap">
          <span className="nf__four">4</span>
          <div className="nf__zero-wrap">
            <span className="nf__zero-text">0</span>
            {/* Flower & Butterfly artwork over 0 */}
            <svg className="nf__flower-art" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 110 C 45 80, 55 50, 50 20" stroke="#7A8B6E" strokeWidth="2.5" strokeLinecap="round" />
              {/* Petals */}
              <path d="M50 35 C 30 15, 10 30, 30 50 C 40 60, 50 45, 50 35 Z" fill="#935F8E" opacity="0.85" />
              <path d="M50 35 C 70 15, 90 30, 70 50 C 60 60, 50 45, 50 35 Z" fill="#7B4776" opacity="0.85" />
              <path d="M50 35 C 35 5, 65 5, 50 35 Z" fill="#B274AB" opacity="0.9" />
              <circle cx="50" cy="35" r="7" fill="#3A1C36" />
              {/* Butterfly */}
              <g transform="translate(62, 10) scale(0.6) rotate(15)">
                <ellipse cx="20" cy="20" rx="14" ry="9" fill="#D4AF37" opacity="0.9" />
                <ellipse cx="20" cy="28" rx="10" ry="7" fill="#E5C687" opacity="0.8" />
                <line x1="20" y1="10" x2="20" y2="35" stroke="#1A1A1A" strokeWidth="2" />
              </g>
            </svg>
          </div>
          <span className="nf__four">4</span>
        </div>

        {/* TAKE ME BACK HOME with Clock replacing O in HOME */}
        <div className="nf__text-wrap">
          <h2 className="nf__subtitle">TAKE ME</h2>
          <h2 className="nf__subtitle nf__home-row">
            BACK H
            <span className="nf__clock-o">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="44" stroke="#E5C687" strokeWidth="3" />
                <circle cx="50" cy="50" r="39" stroke="#E5C687" strokeWidth="1" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="3" fill="#E5C687" />
                <line x1="50" y1="50" x2="50" y2="24" stroke="#E5C687" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="50" x2="70" y2="50" stroke="#E5C687" strokeWidth="2" strokeLinecap="round" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                  <line
                    key={deg}
                    x1="50"
                    y1="12"
                    x2="50"
                    y2="16"
                    stroke="#E5C687"
                    strokeWidth="2"
                    transform={`rotate(${deg} 50 50)`}
                  />
                ))}
              </svg>
            </span>
            ME
          </h2>
        </div>

        {/* Button */}
        <a href="#hero" className="nf__btn" id="nf-go-back">
          GO BACK
          <span className="nf__btn-arrow">→</span>
        </a>
      </div>
    </section>
  )
}
