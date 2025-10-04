// src/data/quizData.js

// ===== MINI QUIZ: Ubicación del Usuario =====
export const locationQuiz = {
  title: "¿Desde dónde vas a viajar?",
  subtitle: "Esto nos ayuda a recomendarte los mejores destinos cerca de ti.",
  icon: "📍",
  options: [
    { id: "santa-ana", name: "Santa Ana", emoji: "🏛️", description: "Ciudad colonial del occidente" },
    { id: "sonsonate", name: "Sonsonate", emoji: "🌋", description: "Tierra de volcanes y café" },
    { id: "ahuachapan", name: "Ahuachapán", emoji: "🌿", description: "Ruta de las flores" }
  ]
};

// ===== QUIZ PRINCIPAL: Preferencias del Usuario =====
export const preferencesQuiz = {
  title: "Cuéntanos tus preferencias",
  subtitle: "Para recomendarte el lugar perfecto",
  questions: [
    {
      question: "¿Qué tipo de experiencia buscas?",
      options: [
        "Naturaleza y aventura",
        "Playa y sol",
        "Gastronomía local",
        "Ciudad y cultura",
        "Hotel/Resort",
        "Balneario y piscinas",
        "Pueblo pintoresco"
      ]
    },
    {
      question: "¿Qué actividad te gustaría hacer?",
      options: [
        "Caminar y explorar",
        "Nadar",
        "Comer",
        "Descansar",
        "Ver paisajes",
        "Visitar sitios históricos"
      ]
    },
    {
      question: "¿Qué ambiente prefieres?",
      options: [
        "Tranquilo y relajante",
        "Animado y divertido",
        "Familiar",
        "Romántico",
        "Aventura extrema"
      ]
    }
  ]
};

export const quizQuestions = preferencesQuiz.questions;

// ===== DATOS DE LUGARES CON INFO ADICIONAL =====
export const destinationInfo = {
  "cerro-verde": {
    name: "Cerro Verde",
    type: "Naturaleza",
    difficulty: "Moderado",
    timeNeeded: "4-6 horas",
    highlights: ["Volcán de Izalco", "Senderos naturales", "Mirador panorámico"],
    bestFrom: "sonsonate"
  },
  "volcan-izalco": {
    name: "Volcán de Izalco",
    type: "Naturaleza",
    difficulty: "Alta",
    timeNeeded: "6 horas",
    highlights: ["Ascenso al volcán", "Vistas panorámicas"],
    bestFrom: "sonsonate"
  },
  "atecozol": {
    name: "Balneario Atecozol",
    type: "Recreativo / Natural",
    difficulty: "Fácil",
    timeNeeded: "Medio día",
    highlights: ["Piscinas naturales", "Áreas verdes"],
    bestFrom: "izalco"
  },
  "caluco": {
    name: "Centro Turístico Caluco",
    type: "Recreativo / Natural",
    difficulty: "Fácil",
    timeNeeded: "Medio día",
    highlights: ["Piscinas", "Áreas verdes"],
    bestFrom: "caluco"
  },
  "la-pampa": {
    name: "Restaurante La Pampa",
    type: "Gastronómico",
    difficulty: "Fácil",
    timeNeeded: "2 horas",
    highlights: ["Cortes de carne", "Ambiente campestre"],
    bestFrom: "sonsonate"
  },
  "la-casona-grill": {
    name: "La Casona Grill",
    type: "Gastronómico",
    difficulty: "Fácil",
    timeNeeded: "2 horas",
    highlights: ["Parrilladas", "Cocina internacional"],
    bestFrom: "sonsonate"
  },
  "dona-luara": {
    name: "Doña Luara",
    type: "Gastronómico",
    difficulty: "Fácil",
    timeNeeded: "2 horas",
    highlights: ["Comida típica", "Ambiente acogedor"],
    bestFrom: "sonsonate"
  },
  "decameron": {
    name: "Royal Decameron",
    type: "Hotel / Resort",
    difficulty: "Fácil",
    timeNeeded: "1-2 días",
    highlights: ["Playa", "Actividades", "Todo incluido"],
    bestFrom: "san rafael"
  },
  "cobanos": {
    name: "Playa Los Cóbanos",
    type: "Playa / Natural",
    difficulty: "Fácil",
    timeNeeded: "Medio día",
    highlights: ["Arrecife de coral", "Snorkel", "Buceo"],
    bestFrom: "los cóbanos"
  },
  "barra-santiago": {
    name: "Barra de Santiago",
    type: "Playa / Natural",
    difficulty: "Fácil",
    timeNeeded: "Medio día",
    highlights: ["Manglares", "Paseos en lancha", "Avistamiento de aves"],
    bestFrom: "barra de santiago"
  },
  "parque-libertad": {
    name: "Parque Libertad",
    type: "Cultural",
    difficulty: "Fácil", 
    timeNeeded: "2-3 horas",
    highlights: ["Centro histórico", "Catedral", "Mercado artesanal"],
    bestFrom: "ahuachapan"
  },
  "metro-centro": {
    name: "Metro Centro",
    type: "Ciudad",
    difficulty: "Fácil",
    timeNeeded: "2-3 horas",
    highlights: ["Compras", "Restaurantes", "Entretenimiento"],
    bestFrom: "santa-ana"
  },
  "tazumal": {
    name: "Tazumal",
    type: "Arqueológico / Cultural",
    difficulty: "Fácil",
    timeNeeded: "2-3 horas",
    highlights: ["Pirámides", "Museo de sitio"],
    bestFrom: "chalchuapa"
  },
  "teatro-santa-ana": {
    name: "Teatro de Santa Ana",
    type: "Cultural / Histórico",
    difficulty: "Fácil",
    timeNeeded: "2 horas",
    highlights: ["Arquitectura", "Eventos culturales"],
    bestFrom: "santa-ana"
  },
  "estadio-quiteno": {
    name: "Estadio Óscar Alberto Quiteño",
    type: "Deportivo",
    difficulty: "Fácil",
    timeNeeded: "2-3 horas",
    highlights: ["Fútbol", "Eventos deportivos"],
    bestFrom: "santa-ana"
  },
  "hotel-brunette": {
    name: "Hotel Brunette",
    type: "Hotel / Resort",
    difficulty: "Fácil",
    timeNeeded: "1-2 días",
    highlights: ["Alojamiento", "Servicios turísticos"],
    bestFrom: "sonsonate"
  },
  "apaneca": {
    name: "Apaneca",
    type: "Pueblo / Natural",
    difficulty: "Fácil",
    timeNeeded: "Medio día",
    highlights: ["Cafetales", "Clima fresco", "Aventura"],
    bestFrom: "ahuachapan"
  },
  "laguna-verde": {
    name: "Laguna Verde",
    type: "Natural",
    difficulty: "Fácil",
    timeNeeded: "Medio día",
    highlights: ["Paisaje", "Picnic", "Caminatas"],
    bestFrom: "apaneca"
  },
  "ataco": {
    name: "Concepción de Ataco",
    type: "Pueblo / Cultural",
    difficulty: "Fácil",
    timeNeeded: "Medio día",
    highlights: ["Murales", "Cafés", "Artesanías"],
    bestFrom: "ahuachapan"
  },
  "catedral-trinidad": {
    name: "Catedral de la Santísima Trinidad",
    type: "Cultural / Religioso",
    difficulty: "Fácil",
    timeNeeded: "1 hora",
    highlights: ["Arquitectura", "Historia"],
    bestFrom: "sonsonate"
  }
};

// ===== FUNCIÓN MEJORADA DE RECOMENDACIÓN =====
export function calculateRecommendation(answers, userLocationId) {
  // Lista completa de destinos
  const allPlaces = Object.keys(destinationInfo);

  // Inicializar scores para todos los destinos
  const scores = {};
  allPlaces.forEach(pid => scores[pid] = 0);

  // Si el usuario elige saltar el quiz, recomendar todos los destinos
  if (answers.includes("Saltar Quiz")) {
    return {
      placeIds: allPlaces,
      scores,
      confidence: 1,
      info: allPlaces.map(pid => destinationInfo[pid])
    };
  }

  // Bonus por ubicación
  const locationBonus = {
    "santa-ana": {
      "metro-centro": 5,
      "parque-libertad": 2,
      "cerro-verde": 1,
      "atecozol": 2,
      "caluco": 2,
      "teatro-santa-ana": 3,
      "estadio-quiteno": 3,
      "tazumal": 2
    },
    "sonsonate": {
      "cerro-verde": 6,
      "volcan-izalco": 5,
      "atecozol": 4,
      "caluco": 3,
      "la-pampa": 2,
      "la-casona-grill": 2,
      "dona-luara": 2,
      "decameron": 2,
      "cobanos": 2,
      "barra-santiago": 1,
      "parque-libertad": 1,
      "metro-centro": 1,
      "hotel-brunette": 3,
      "catedral-trinidad": 2
    },
    "ahuachapan": {
      "parque-libertad": 4,
      "cerro-verde": 2,
      "metro-centro": 1,
      "barra-santiago": 2,
      "apaneca": 3,
      "laguna-verde": 3,
      "ataco": 3,
      "tazumal": 2
    }
  };

  // Aplicar bonus de ubicación
  if (locationBonus[userLocationId]) {
    Object.keys(locationBonus[userLocationId]).forEach(place => {
      scores[place] += locationBonus[userLocationId][place];
    });
  }

  // Pregunta 1: experiencia
  if (answers[0] === "Naturaleza y aventura") {
    ["cerro-verde", "volcan-izalco", "apaneca", "laguna-verde", "ataco"].forEach(pid => scores[pid] += 7);
  } else if (answers[0] === "Playa y sol") {
    ["cobanos", "barra-santiago", "decameron"].forEach(pid => scores[pid] += 7);
  } else if (answers[0] === "Gastronomía local") {
    ["la-pampa", "la-casona-grill", "dona-luara"].forEach(pid => scores[pid] += 7);
  } else if (answers[0] === "Ciudad y cultura") {
    ["metro-centro", "parque-libertad", "catedral-trinidad", "teatro-santa-ana", "estadio-quiteno", "tazumal"].forEach(pid => scores[pid] += 6);
  } else if (answers[0] === "Hotel/Resort") {
    ["decameron", "hotel-brunette"].forEach(pid => scores[pid] += 99);
  } else if (answers[0] === "Balneario y piscinas") {
    ["atecozol", "caluco"].forEach(pid => scores[pid] += 8);
  } else if (answers[0] === "Pueblo pintoresco") {
    ["apaneca", "ataco"].forEach(pid => scores[pid] += 7);
  }

  // Pregunta 2: actividad
  if (answers[1] === "Caminar y explorar") {
    ["cerro-verde", "volcan-izalco", "apaneca", "laguna-verde", "ataco", "parque-libertad", "tazumal"].forEach(pid => scores[pid] += 4);
  } else if (answers[1] === "Nadar") {
    ["atecozol", "caluco", "cobanos", "barra-santiago", "decameron"].forEach(pid => scores[pid] += 6);
  } else if (answers[1] === "Comer") {
    ["la-pampa", "la-casona-grill", "dona-luara", "decameron"].forEach(pid => scores[pid] += 5);
  } else if (answers[1] === "Descansar") {
    ["decameron", "caluco", "atecozol", "cobanos", "hotel-brunette"].forEach(pid => scores[pid] += 4);
  } else if (answers[1] === "Ver paisajes") {
    ["cerro-verde", "volcan-izalco", "apaneca", "laguna-verde", "barra-santiago", "ataco"].forEach(pid => scores[pid] += 4);
  } else if (answers[1] === "Visitar sitios históricos") {
    ["parque-libertad", "teatro-santa-ana", "tazumal", "catedral-trinidad", "ataco"].forEach(pid => scores[pid] += 5);
  }

  // Pregunta 3: ambiente
  if (answers[2] === "Tranquilo y relajante") {
    ["decameron", "caluco", "atecozol", "cobanos", "hotel-brunette", "laguna-verde", "apaneca"].forEach(pid => scores[pid] += 3);
  } else if (answers[2] === "Animado y divertido") {
    ["la-pampa", "la-casona-grill", "decameron", "metro-centro", "estadio-quiteno"].forEach(pid => scores[pid] += 3);
  } else if (answers[2] === "Familiar") {
    ["atecozol", "caluco", "decameron", "cobanos", "metro-centro"].forEach(pid => scores[pid] += 3);
  } else if (answers[2] === "Romántico") {
    ["decameron", "apaneca", "ataco", "laguna-verde"].forEach(pid => scores[pid] += 3);
  } else if (answers[2] === "Aventura extrema") {
    ["cerro-verde", "volcan-izalco", "apaneca", "barra-santiago"].forEach(pid => scores[pid] += 3);
  }

  // Si todas las puntuaciones son cero, asignar puntaje base para evitar blanco
  const allZero = Object.values(scores).every(v => v === 0);
  if (allZero) {
    // Si la actividad es nadar, recomendar balnearios y playas
    if (answers[1] === "Nadar") {
      ["atecozol", "caluco", "cobanos", "barra-santiago", "decameron"].forEach(pid => {
        scores[pid] = 1;
      });
    } else {
      // Asignar puntaje base a todos los destinos
      allPlaces.forEach(pid => {
        scores[pid] = 1;
      });
    }
  }

  // Obtener todos los destinos con el puntaje máximo
  let maxScore = Math.max(...Object.values(scores));
  let winners = Object.keys(scores).filter(pid => scores[pid] === maxScore && maxScore > 0);

  // Si la primera respuesta es Hotel/Resort, incluir ambos hoteles/resorts
  if (answers[0] === "Hotel/Resort") {
    winners = ["decameron", "hotel-brunette"];
    maxScore = scores["decameron"];
  }

  // Si la actividad es nadar, incluir todos los balnearios/playas con puntaje mayor a cero
  if (answers[1] === "Nadar") {
    const swimPlaces = ["atecozol", "caluco", "cobanos", "barra-santiago", "decameron"];
    const swimWinners = swimPlaces.filter(pid => scores[pid] > 0);
    if (swimWinners.length > 0) {
      winners.push(...swimWinners.filter(pid => !winners.includes(pid)));
    }
  }

  // Si por alguna razón no hay ganadores, asignar puntaje base a todos los destinos
  if (winners.length === 0) {
    winners = allPlaces;
    maxScore = 1;
  }

  // Retornar todos los lugares recomendados
  return {
    placeIds: winners,
    scores: scores,
    confidence: maxScore / (maxScore + Math.min(...Object.values(scores))),
    info: winners.map(pid => destinationInfo[pid])
  };
}

// ===== FUNCIÓN PARA OBTENER RAZÓN DE RECOMENDACIÓN =====
export function getRecommendationReason(userLocationId, placeId) {
  const reasons = {
    "santa-ana": {
      "metro-centro": "¡Perfecto! Metro Centro está justo en Santa Ana, muy fácil de llegar.",
      "parque-libertad": "El centro histórico de Santa Ana tiene un encanto similar al que buscas.",
      "cerro-verde": "Una excelente escapada natural desde Santa Ana, vale la pena el viaje."
    },
    "sonsonate": {
      "cerro-verde": "¡Excelente elección! Cerro Verde está súper cerca de Sonsonate.",
      "parque-libertad": "Una bonita opción cultural desde Sonsonate.",
      "metro-centro": "Un buen lugar para shopping, aunque está un poco más lejos."
    },
    "ahuachapan": {
      "parque-libertad": "Ideal desde Ahuachapán, ambos centros históricos comparten esa magia colonial.",
      "cerro-verde": "Una aventura natural que complementa perfecto la Ruta de las Flores.",
      "metro-centro": "Una buena opción moderna, aunque requiere un poco más de viaje."
    }
  };

  return reasons[userLocationId]?.[placeId] || "Una excelente opción para tu viaje.";
}