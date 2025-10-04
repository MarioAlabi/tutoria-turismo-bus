import { useMemo, useState } from 'react';
import { places } from './data/places';
import { routes } from './data/routes';
import { 
  locationQuiz, 
  preferencesQuiz, 
  quizQuestions, 
  calculateRecommendation,
  getRecommendationReason 
} from './data/quizData';
import { recommendRoutesForPlace } from './lib/recommendation';
import RouteCard from './components/RouteCard';
import BusMap from './components/BusMap';
import Quiz from './components/Quiz';
import './App.css';

/* ===== NUEVO: Landing minimalista con estilos aislados ===== */
function Landing({ onStart }) {
  // Estilos inline -> sin chocar con tu CSS
  const wrap = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '16px',
    background: 'linear-gradient(135deg, #f97316, #ea580c)'
  };
  const card = { maxWidth: 560, width: '92vw', color: '#fff' };
  const logo = {
    width: 96, height: 96, borderRadius: 9999, background: '#fff',
    margin: '0 auto 18px', display: 'grid', placeItems: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,.18)', animation: 'gobusBob 2.6s ease-in-out infinite'
  };
  const title = {
    margin: '6px 0 8px', fontWeight: 800,
    fontSize: 'clamp(32px, 5vw, 44px)', lineHeight: 1.1,
    color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,.18)'
  };
  const subtitle = { margin: '0 0 26px', color: '#fff', opacity: .95, fontSize: 'clamp(14px,2.4vw,18px)' };
  const btn = {
    appearance: 'none', border: 0, padding: '12px 22px', borderRadius: 9999,
    fontWeight: 700, background: '#fff', color: '#ef6c17',
    boxShadow: '0 10px 30px rgba(0,0,0,.18)', cursor: 'pointer'
  };

  return (
    <>
      {/* keyframes locales (no tocan lo demás) */}
      <style>{`
        @keyframes gobusBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <main style={wrap}>
        <div style={card}>
          <div style={logo} aria-hidden="true">
            {/* Ícono bus */}
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="14" rx="3" stroke="#f97316" strokeWidth="2"/>
              <rect x="5" y="6" width="14" height="6" rx="1.5" fill="#f97316"/>
              <circle cx="8" cy="19" r="2" fill="#f97316"/>
              <circle cx="16" cy="19" r="2" fill="#f97316"/>
            </svg>
          </div>

          <h1 style={title}>GoBus</h1>
          <p style={subtitle}>Tu compañía en tu tour occidental en El Salvador</p>

          <button
            style={btn}
            onMouseDown={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            onClick={onStart}
          >
            Comenzar
          </button>
        </div>
      </main>
    </>
  );
}
/* ===== FIN Landing ===== */

export default function App() {
  /* ===== NUEVO: solo controla mostrar/ocultar la landing ===== */
  const [showLanding, setShowLanding] = useState(true);

  // ========= TU LÓGICA ORIGINAL =========
  const [userLocation, setUserLocation] = useState(null); // {id, name}
  const [quizResult, setQuizResult] = useState(null); // {placeId, scores, confidence, info}
  const [placeId, setPlaceId] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const recommended = useMemo(() => {
    if (!placeId) return [];
    return recommendRoutesForPlace(placeId, routes);
  }, [placeId]);

  const placeNameById = useMemo(() => {
    const map = new Map(places.map(p => [p.id, p.name]));
    return id => map.get(id) ?? id;
  }, []);

  const filteredPlaces = useMemo(() => {
    if (!searchTerm) return places;
    return places.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, places]);

  const handleLocationSelect = (locationOption) => {
    setUserLocation({
      id: locationOption.id,
      name: locationOption.name,
      emoji: locationOption.emoji
    });
  };

  const handleQuizComplete = (answers) => {
    const result = calculateRecommendation(answers, userLocation.id);
    setQuizResult(result);
  };

  const resetQuiz = () => {
    setUserLocation(null);
    setQuizResult(null);
    setPlaceId('');
    setSelectedRoute(null);
  };

  /* ===== Mostrar landing primero. No afecta nada más. ===== */
  if (showLanding) return <Landing onStart={() => setShowLanding(false)} />;

  // ========= TU UI ORIGINAL (sin cambios) =========
  return (
    <div className="app">
      <h1>🚌 GoBus</h1>

      {/* ===== MINI QUIZ: Ubicación del Usuario ===== */}
      {!userLocation && (
        <div className="card location-quiz">
          <h2>{locationQuiz.icon} {locationQuiz.title}</h2>
          <p className="hint">{locationQuiz.subtitle}</p>
          <div className="location-options">
            {locationQuiz.options.map((option) => (
              <button
                key={option.id}
                className="location-button"
                onClick={() => handleLocationSelect(option)}
              >
                <span className="location-emoji">{option.emoji}</span>
                <div className="location-info">
                  <strong>{option.name}</strong>
                  <small>{option.description}</small>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ===== QUIZ PRINCIPAL: Preferencias ===== */}
      {userLocation && quizResult === null && (
        <div className="quiz-container">
          <div className="quiz-header">
            <div className="location-display">
              <span className="location-badge">
                {userLocation.emoji} {userLocation.name}
              </span>
              <button 
                className="change-location" 
                onClick={() => setUserLocation(null)}
                title="Cambiar ubicación"
              >
                ✏️
              </button>
            </div>
            <h2>{preferencesQuiz.title}</h2>
            <p className="hint">{preferencesQuiz.subtitle}</p>
          </div>
          <Quiz
            questions={quizQuestions}
            onComplete={handleQuizComplete}
          />
          <div className="quiz-actions">
            {/* vacío a propósito */}
          </div>
        </div>
      )}

      {/* ===== Resultado del Quiz ===== */}
      {quizResult && !placeId && (
        <div className="card result-card">
          <div className="result-header">
            <span className="location-badge">
              {userLocation.emoji} {userLocation.name}
            </span>
            <button 
              className="change-location" 
              onClick={resetQuiz}
              title="Cambiar ubicación"
            >
              ✏️
            </button>
          </div>
          <div className="recommendation">
            <h2>✨ Te recomendamos:</h2>
            {Array.isArray(quizResult.info) ? (
              quizResult.info.map((dest, idx) => (
                <div className="destination-card" key={dest.name + idx}>
                  <h3>{dest.name}</h3>
                  <div className="destination-details">
                    <span className="destination-type">{dest.type}</span>
                    <span className="destination-time">⏱️ {dest.timeNeeded}</span>
                    <span className="destination-difficulty">📊 {dest.difficulty}</span>
                  </div>
                  <div className="destination-highlights">
                    {dest.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <p className="recommendation-reason">
                    {getRecommendationReason(userLocation.id, quizResult.placeIds ? quizResult.placeIds[idx] : dest.name)}
                  </p>
                  <div className="confidence-bar">
                    <div className="confidence-label">Confianza de la recomendación</div>
                    <div className="confidence-progress">
                      <div 
                        className="confidence-fill" 
                        style={{width: `${quizResult.confidence * 100}%`}}
                      ></div>
                    </div>
                    <span className="confidence-text">
                      {Math.round(quizResult.confidence * 100)}% match
                    </span>
                  </div>
                  <button 
                    className="quiz-result-button primary"
                    onClick={() => setPlaceId(quizResult.placeIds ? quizResult.placeIds[idx] : dest.name)}
                  >
                    Ver rutas 🚌
                  </button>
                </div>
              ))
            ) : (
              <div className="destination-card">
                <h3>{quizResult.info.name}</h3>
                <div className="destination-details">
                  <span className="destination-type">{quizResult.info.type}</span>
                  <span className="destination-time">⏱️ {quizResult.info.timeNeeded}</span>
                  <span className="destination-difficulty">📊 {quizResult.info.difficulty}</span>
                </div>
                <div className="destination-highlights">
                  {quizResult.info.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                <p className="recommendation-reason">
                  {getRecommendationReason(userLocation.id, quizResult.placeId)}
                </p>
                <div className="confidence-bar">
                  <div className="confidence-label">Confianza de la recomendación</div>
                  <div className="confidence-progress">
                    <div 
                      className="confidence-fill" 
                      style={{width: `${quizResult.confidence * 100}%`}}
                    ></div>
                  </div>
                  <span className="confidence-text">
                    {Math.round(quizResult.confidence * 100)}% match
                  </span>
                </div>
                <button 
                  className="quiz-result-button primary"
                  onClick={() => setPlaceId(quizResult.placeId)}
                >
                  Ver rutas 🚌
                </button>
              </div>
            )}
            <button 
              className="quiz-result-button secondary"
              onClick={resetQuiz}
            >
              Reiniciar
            </button>
          </div>
        </div>
      )}

      {/* ===== Selección de Lugar y Rutas ===== */}
      {placeId && userLocation && (
        <>
          <div className="card">
            <div className="place-selection">
              <div className="location-display">
                <span className="location-badge">
                  {userLocation.emoji} {userLocation.name}
                </span>
              </div>
              <label htmlFor="destino">¿A dónde vas?</label>
              <button 
                className="reset-button"
                onClick={resetQuiz}
                title="Volver al inicio"
              >
                🔄 Nuevo quiz
              </button>
            </div>
          </div>

          {/* Campo de búsqueda */}
          <div style={{ position: 'relative', width: '100%', marginBottom: '1rem' }}>
            <input
              type="text"
              id="destino"
              value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              placeholder="Escribe el nombre del lugar..."
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                border: '2px solid #ff6b35',
                fontSize: '1rem',
                background: '#fff',
                color: '#222'
              }}
            />
            {showSuggestions && filteredPlaces.length > 0 && (
              <ul
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '0 0 12px 12px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
                  zIndex: 10,
                  maxHeight: '220px',
                  overflowY: 'auto',
                  margin: 0,
                  padding: '0.5rem 0',
                  listStyle: 'none'
                }}
              >
                {filteredPlaces.map(p => (
                  <li
                    key={p.id}
                    style={{
                      padding: '0.75rem 1rem',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      borderBottom: '1px solid #f5f5f5'
                    }}
                    onMouseDown={() => {
                      setPlaceId(p.id);
                      setSearchTerm(p.name);
                      setShowSuggestions(false);
                      setSelectedRoute(null);
                    }}
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <section>
            <h2>🚌 Rutas recomendadas</h2>
            {recommended.length === 0 && (
              <p className="no-rutas">No hay rutas registradas a ese destino todavía.</p>
            )}
            <ul className="routes">
              {recommended.map(r => (
                <li 
                  key={r.id} 
                  className={selectedRoute?.id === r.id ? 'selected' : ''}
                  onClick={() => setSelectedRoute(r)}
                >
                  <RouteCard
                    route={r}
                    placeNameList={r.covers.map(placeNameById).join(' • ')}
                  />
                  <div className="route-details">
                    <p><strong>Precio:</strong> ${r.price.toFixed(2)}</p>
                    <p className="recommendation">{r.recommendation}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {selectedRoute && (
            <section>
              <h2>🗺️ Vista en mapa</h2>
              <BusMap route={selectedRoute} />
            </section>
          )}
        </>
      )}
    </div>
  );
}