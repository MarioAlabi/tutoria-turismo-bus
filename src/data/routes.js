export const routes = [
   {
  id: '51F-1',
  name: 'Ruta F-1',
  covers: ['metro-centro'],
  price: 0.30,
  path: [
    [14.02549865884478, -89.53162091273407], // Colonia El Milagro (inicio)
    [13.995539279191089, -89.54147762941734], // Punto intermedio norte
    [13.9950, -89.5400], // Entrada Santa Ana
    [13.984744067812125, -89.55040122290423], // UNICAES
    [13.98215314174765, -89.55403155612824], // VIDRI
    [13.977221210642144, -89.5587392785671] // Urbanización Contixa (final)
  ],
  stopNames: [
    'Colonia El Milagro',
    'Ruta Norte',
    'Entrada Santa Ana',
    'UNICAES',
    'VIDRI',
    'Urbanización Contixa'
  ],
  recommendation: 'Bajarse en la parada de buses cerca del centro y caminar hacia Metrocentro - es una caminata corta.',
  schedule: {
    weekdays: {
      first: '05:00',
      last: '19:00',
      frequency: '20-30 minutos'
    },
    weekend: {
      first: '05:30', 
      last: '18:00',
      frequency: '30-45 minutos'
    }
  },
  duration: '35-45 minutos',
  type: 'urbano',
  highlights: [
    'Conecta Colonia El Milagro con centro de Santa Ana',
    'Paso por UNICAES',
    'Acceso cercano a Metrocentro',
    'Ruta urbana frecuente'
  ]
},
{
  id: '8',
  name: 'Ruta 8',
  covers: ['metro-centro'],
  price: 0.25,
  path: [
    [13.966119564787284, -89.56521653804968], // Colonia Altos de Palmar (inicio)
    [13.973534532312797, -89.5628745349237], // Hacia el centro
    [13.976075850735285, -89.5610359724031], // Área central
    [13.977120220041606, -89.55992386629069], // Centro Santa Ana (final)
  ],
  stopNames: [
    'Colonia Altos de Palmar',
    'Carretera hacia metrocentro',
    'Área Central',
    'Centro Santa Ana'
  ],
  recommendation: 'Bajarse en la parada de buses cerca del centro y caminar hacia Metrocentro - es una caminata corta desde el centro de Santa Ana',
  schedule: {
    weekdays: {
      first: '05:00',
      last: '19:30',
      frequency: '15-25 minutos'
    },
    weekend: {
      first: '05:30', 
      last: '18:30',
      frequency: '25-35 minutos'
    }
  },
  duration: '30-40 minutos',
  type: 'urbano',
  highlights: [
    'Paso por Universidad de El Salvador Facultad de Occidente',
    'Conexión con Estadio Óscar Alberto Quiteño',
    'Acceso a Instituto Nacional de Santa Ana (INSA)',
    'Paso por Metrocentro Santa Ana',
    'Conexión con mercados centrales'
  ]
},
  {
    id: '248',
    name: 'Bus 248',
    covers: ['cerro-verde', 'primaevera', 'coatepeque', 'el-congo'],
    price: 0.50,
    path: [
      [13.9942, -89.5592], // Santa Ana
      [13.9700, -89.5400], // Primavera
      [13.9350, -89.5050], // Coatepeque
      [13.9100, -89.4800], // El Congo
      [13.8900, -89.4600], // Caserío El Rosario
      [13.8550, -89.4200], // Cerro Verde
    ],
     stopNames: [
    'Santa Ana Centro',
    'Primavera',
    'EL Congo',
    'Caserío El Rosario',
    'Cerro Verde'
  ],
    recommendation: 'Bajarse en Cerro Verde y caminar hasta el mirador principal',
  },
   {
  id: '51-B',
  name: 'Ruta 51-B',
  covers: ['teatro-santa-ana'],
  price: 0.20,
  path: [
    [13.966641613912811, -89.56534478960471], // Walmart (inicio)
    [13.97152361495988, -89.56364174662919], // Salida Walmart
    [13.9850, -89.5500], // Hacia centro
    [13.9900, -89.5520], // Centro Santa Ana
    [13.9920, -89.5540], // Área central
    [13.994220468477335, -89.55561338944568] // Parque Libertad área (final)
  ],
  stopNames: [
    'Walmart',
    'Colonia El Palmar',
    'Instituto Nacional de Santa Ana',
    'Centro Santa Ana',
    'Parque Colón',
    'Parque Libertad'
  ],
  recommendation: 'Bajarse en la esquina cerca del Parque Libertad y caminar hacia el parque donde se encuentra el Teatro Nacional de Santa Ana',
  schedule: {
    weekdays: {
      first: '05:30',
      last: '18:30',
      frequency: '30-45 minutos'
    },
    weekend: {
      first: '06:00', 
      last: '17:30',
      frequency: '45-60 minutos'
    }
  },
  duration: '25-35 minutos',
  type: 'urbano',
  highlights: [
    'Paso por Universidad de El Salvador Facultad Multidisciplinaria de Occidente',
    'Conexión con Instituto Nacional de Santa Ana',
    'Acceso directo al Parque Libertad',
    'Proximidad al Teatro Nacional de Santa Ana',
    'Paso por centros comerciales principales'
  ]
},
{
  id: '51-B',
  name: 'Ruta 51-B',
  covers: ['parque-libertad'],
  price: 0.20,
  path: [
    [13.966641613912811, -89.56534478960471], // Walmart (inicio)
    [13.97152361495988, -89.56364174662919], // Salida Walmart
    [13.9850, -89.5500], // Hacia centro
    [13.9900, -89.5520], // Centro Santa Ana
    [13.9920, -89.5540], // Área central
    [13.994220468477335, -89.55561338944568] // Parque Libertad área (final)
  ],
  stopNames: [
    'Walmart',
    'Colonia El Palmar',
    'Instituto Nacional de Santa Ana',
    'Centro Santa Ana',
    'Parque Colón',
    'Parque Libertad'
  ],
  recommendation: 'Bajarse en la esquina cerca del Parque Libertad y caminar hacia el parque central',
  schedule: {
    weekdays: {
      first: '05:30',
      last: '18:30',
      frequency: '30-45 minutos'
    },
    weekend: {
      first: '06:00', 
      last: '17:30',
      frequency: '45-60 minutos'
    }
  },
  duration: '25-35 minutos',
  type: 'urbano',
  highlights: [
    'Paso por Universidad de El Salvador Facultad Multidisciplinaria de Occidente',
    'Conexión con Instituto Nacional de Santa Ana',
    'Acceso directo al Parque Libertad',
    'Proximidad al Teatro Nacional de Santa Ana',
    'Paso por centros comerciales principales'
  ]
},
{
  id: 'estadio-quiteno',
  name: 'Ruta 50',
  covers: ['estadio-quiteno'],
  price: 0.20,
 path: [
  [13.963428299377396, -89.56730014338761], // Inicio (sur)
  [13.9650, -89.5660], // Punto intermedio 1
  [13.975314279380918, -89.56849738603543], // Hacia el centro
  [13.977018718337051, -89.57017446219774] // Estadio Óscar Alberto Quiteño (final)
],
stopNames: [
  'Punto de Inicio',
  'Colonia Santarrana',
  'Área Central',
  'Estadio Óscar Alberto Quiteño',
],
  recommendation: 'Bajarse justo frente del Estadio Óscar Alberto Quiteño - la parada está ubicada directamente frente a la entrada principal',
  schedule: {
    weekdays: {
      first: '05:30',
      last: '18:00',
      frequency: '30-40 minutos'
    },
    weekend: {
      first: '06:00', 
      last: '17:00',
      frequency: '40-50 minutos'
    }
  },
  duration: '20-30 minutos',
  type: 'urbano',
  highlights: [
    'Acceso directo al Estadio Óscar Alberto Quiteño',
    'Paso por Plaza Maya',
    'Conexión con área comercial Walmart',
    'Ruta deportiva popular los días de partido'
  ]
},
{
  id: 'hotel-brunette',
  name: 'Ruta 51-B IDA',
  covers: ['hotel-brunette'],
  price: 0.20,
  path: [
    [13.9750, -89.5400], // Walmart (inicio)
    [13.9800, -89.5450], // Salida Walmart
    [13.9850, -89.5500], // Hacia centro
    [13.9900, -89.5520], // Centro Santa Ana
    [13.9920, -89.5540], // Área central
    [13.994220468477335, -89.55561338944568] // Área del Hotel Brunette (final)
  ],
  stopNames: [
    'Walmart',
    'Colonia El Palmar',
    'Instituto Nacional de Santa Ana',
    'Centro Santa Ana',
    'Parque Colón',
    'Hotel Brunette área'
  ],
  recommendation: 'Bajarse en la parada del centro cerca del Parque Libertad y caminar hacia el Hotel Brunette - está ubicado en el área central histórica de Santa Ana',
  schedule: {
    weekdays: {
      first: '05:30',
      last: '18:30',
      frequency: '30-45 minutos'
    },
    weekend: {
      first: '06:00', 
      last: '17:30',
      frequency: '45-60 minutos'
    }
  },
  duration: '25-35 minutos',
  type: 'urbano',
  highlights: [
    'Paso por Universidad de El Salvador Facultad Multidisciplinaria de Occidente',
    'Conexión con Instituto Nacional de Santa Ana',
    'Acceso al centro histórico de Santa Ana',
    'Proximidad a hoteles del área central',
    'Paso por centros comerciales principales'
  ]
},

// SONSONATE
{
  id: '1-sonsonate',
  name: 'Ruta 1 Sonsonate',
  covers: ['catedral-trinidad'],
  price: 0.50,
  path: [
    [13.7180, -89.7240], // Terminal/entrada ciudad
    [13.7200, -89.7245], // Zona comercial
    [13.7216, -89.7244], // Centro histórico
    [13.720777153479707, -89.72737560653907], // Catedral de la Santísima Trinidad
  ],
  stopNames: [
    'Terminal',
    'Zona Comercial',
    'Centro Histórico',
    'Parque Central',
    'Catedral'
  ],
  recommendation: 'Bajarse en Parque Central - la catedral está justo enfrente del parque',
},
{
  id: '3-sonsonate',
  name: 'Ruta 3 Sonsonate',
  covers: ['catedral-trinidad'],
  price: 0.25,
  path: [
    [13.7160, -89.7280], // Inicio - zona oeste (cerca de Variedades Kary Borjas)
    [13.7175, -89.7265], // Calle Diagonal
    [13.7185, -89.7250], // Intersección con 4 Calle Pte
    [13.7195, -89.7245], // 2 Calle Pte
    [13.7205, -89.7240], // Centro - cerca de 1 Avenida Sur
    [13.720777153479707, -89.72737560653907], // Catedral de la Santísima Trinidad
  ],
  stopNames: [
    'Zona Oeste',
    'Calle Diagonal',
    '4 Calle Poniente',
    '2 Calle Poniente', 
    'Calle Central',
    'Catedral'
  ],
  recommendation: 'Bajarse en Centro Histórico - caminar una cuadra hacia el sur para llegar a la Catedral de la Santísima Trinidad',
},
{
  id: '205-sonsonate-san-salvador',
  name: 'Ruta 205 Sonsonate - San Salvador',
  covers: ['volcan-izalco',],
  price: 0.75, // Precio aproximado para ruta interdepartamental
  path: [
    [13.7208, -89.7274], // Terminal de Sonsonate
    [13.7180, -89.7240], // Salida de la ciudad
    [13.7150, -89.7200], // Carretera hacia Santa Ana
    [13.7400, -89.6800], // Carretera CA-8 hacia volcanes
    [13.7600, -89.6600], // Zona rural montañosa
    [13.7850, -89.6500], // Entrada al área protegida
    [13.8000, -89.6400], // Desvío hacia Cerro Verde
    [13.8100, -89.6350], // Acceso al Parque Los Volcanes
    [13.814824006892259, -89.63276702062727], // Volcán de Izalco - ubicación exacta
  ],
  stopNames: [
    'Terminal Sonsonate',
    'Salida Ciudad',
    'Carretera Principal',
    'CA-8 Volcanes',
    'Zona Montañosa',
    'Área Protegida',
    'Desvío Cerro Verde',
    'Parque Los Volcanes',
    'Volcán de Izalco'
  ],
  recommendation: 'Bajarse en "Desvío Cerro Verde" - desde ahí tomar transporte local o caminar hacia el centro de visitantes del Parque Nacional Los Volcanes para acceder al Volcán de Izalco',
  notes: 'Esta ruta también sirve para llegar al Parque Arqueológico San Andrés (bajarse antes del desvío hacia el volcán)'
},
{
  id: '53a-sonsonate-atecozol',
  name: 'Ruta 53-A Sonsonate - Atecozol',
  covers: ['atecozol'],
  price: 0.25,
  path: [
    [13.7208, -89.7274], // Terminal de Sonsonate
    [13.7200, -89.7245], // Plaza Ferroviaria
    [13.7190, -89.7200], // Bulevar Las Palmeras
    [13.7180, -89.7150], // Colonia Santa Marta
    [13.7170, -89.7100], // Sonzacate
    [13.7160, -89.7050], // Redondel Mons. Oscar Arnulfo Romero
    [13.7150, -89.7000], // Monumento Sonsonate
    [13.7140, -89.6950], // Desvío de Izalco
    [13.73857699054371, -89.6699904127741], // Izalco centro
    [13.743759572897986, -89.66286945065804], // Balneario Atecozol
  ],
  stopNames: [
    'Terminal Sonsonate',
    'Plaza Ferroviaria',
    'Bulevar Las Palmeras',
    'Colonia Santa Marta',
    'Sonzacate',
    'Redondel Romero',
    'Monumento Sonsonate',
    'Desvío Izalco',
    'Izalco Centro',
    'Balneario Atecozol'
  ],
  recommendation: 'Bajarse en la parada final "Balneario Atecozol" - el bus te deja directamente en la entrada del turicentro',
},
{
  id: '53b-sonsonate-atecozol',
  name: 'Ruta 53-B Sonsonate - Atecozol',
  covers: ['atecozol'],
  price: 0.25,
  path: [
    [13.7180, -89.7300], // Colonia Jardines de Sonsonate
    [13.7190, -89.7280], // Colonia San Rafael
    [13.7200, -89.7260], // Catedral de Sonsonate
    [13.7210, -89.7240], // Avenida El Ángel
    [13.7220, -89.7200], // Estadio Ana Mercedes Campos
    [13.7230, -89.7150], // Parque de Sonzacate
    [13.7240, -89.7100], // Sonzacate centro
    [13.7350, -89.6900], // Hacia Izalco
    [13.7400, -89.6800], // Izalco centro
    [13.743759572897986, -89.66286945065804], // Balneario Atecozol
  ],
  stopNames: [
    'Colonia Jardines',
    'Colonia San Rafael',
    'Catedral Sonsonate',
    'Avenida El Ángel',
    'Estadio Ana Mercedes',
    'Parque Sonzacate',
    'Sonzacate Centro',
    'Hacia Izalco',
    'Izalco Centro',
    'Balneario Atecozol'
  ],
  recommendation: 'Bajarse en la parada final "Balneario Atecozol" - el bus te deja directamente en la entrada del turicentro',
},
{
  id: '236-sonsonate-caluco',
  name: 'Ruta 236 Sonsonate - Caluco',
  covers: ['caluco'],
  price: 0.50,
  path: [
    [13.7208, -89.7274], // Terminal de Sonsonate
    [13.7200, -89.7250], // Salida centro Sonsonate
    [13.7190, -89.7200], // Zona urbana
    [13.7180, -89.7100], // Carretera hacia Caluco
    [13.7170, -89.7000], // Zona rural
    [13.7160, -89.6900], // Acercándose a Caluco
    [13.7165, -89.6800], // Entrada a Caluco
    [13.7170, -89.6700], // Centro de Caluco
    [13.717356850246311, -89.66088931360837], // Centro Turístico Caluco
  ],
  stopNames: [
    'Terminal Sonsonate',
    'Salida Centro',
    'Zona Urbana',
    'Carretera Caluco',
    'Zona Rural',
    'Acercándose Caluco',
    'Entrada Caluco',
    'Centro Caluco',
    'Centro Turístico Caluco'
  ],
  recommendation: 'Bajarse en la parada final "Centro Turístico Caluco" - el bus te deja directamente en el centro turístico',
},
{
  id: '10-acajutla-metallo',
  name: 'Ruta 10 Acajutla - Metalío',
  covers: ['la-pampa'],
  price: 0.20,
  path: [
    [13.5920, -89.8270], // Acajutla centro
    [13.6100, -89.8200], // Colonia Rosa No 2
    [13.6300, -89.8100], // Mercado Municipal de Acajutla
    [13.6800, -89.7800], // Carretera a Acajutla
    [13.7100, -89.7500], // Zona Las Palmeras
    [13.727810212768425, -89.7166012758515], // Restaurante La Pampa Argentina
  ],
  stopNames: [
    'Acajutla Centro',
    'Colonia Rosa No 2',
    'Mercado Acajutla',
    'Carretera Acajutla',
    'Zona Las Palmeras',
    'La Pampa Argentina',
  ],
        recommendation: 'Cuando el bus llegue a la parada "La Pampa Argentina", bájate: el bus para directamente frente al restaurante y luego sigue la ruta.',
},
{
  id: '56-sonsonate-dona-laura',
  name: 'Ruta 56 Sonsonate Urbana',
  covers: ['dona-luara'],
  price: 0.25,
  path: [
    [13.7208, -89.7274], // Centro de Sonsonate
    [13.7220, -89.7260], // Zona centro histórico
    [13.7240, -89.7240], // Salida del centro
    [13.7260, -89.7200], // Zona urbana norte
    [13.7300, -89.7180], // Hacia Sonzacate
    [13.7320, -89.7160], // Zona residencial
    [13.7340, -89.7140], // Acercándose a destino
    [13.734422345790174, -89.7120533855599], // Restaurante Doña Laura
  ],
  stopNames: [
    'Centro Sonsonate',
    'Zona Centro Histórico',
    'Salida del Centro',
    'Zona Urbana Norte',
    'Hacia Sonzacate',
    'Zona Residencial',
    'Cerca Doña Laura',
    'Restaurante Doña Laura'
  ],
  recommendation: 'Bajarse en la parada final "Restaurante Doña Laura" - el bus te deja cerca del restaurante',
},
{
  id: '205d-sonsonate-decameron',
  name: 'Ruta 205-D Sonsonate - Decamerón',
  covers: ['decameron'],
  price: 0.99,
  path: [
    [13.7208, -89.7274], // Sonsonate inicio
    [13.7100, -89.7350], // Salida hacia Izalco
    [13.6800, -89.7500], // Izalco
    [13.6500, -89.7700], // Cantón El Souza
    [13.6200, -89.7900], // Armenia
    [13.5900, -89.8000], // Ateos
    [13.5700, -89.8100], // Lourdes
    [13.5600, -89.8150], // Zona costera
    [13.5500, -89.8160], // Acercándose Decamerón
    [13.534078668391853, -89.8154561297553], // Hotel Decamerón
  ],
  stopNames: [
    'Sonsonate Centro',
    'Salida Izalco',
    'Izalco',
    'Cantón El Souza',
    'Armenia',
    'Ateos',
    'Lourdes',
    'Zona Costera',
    'Cerca Decamerón',
    'Hotel Decamerón'
  ],
  recommendation: 'Bajarse en la carretera principal de Salinitas, y luego hacés el último tramo a pie o en transporte local.',
},
{
  id: '53b-sonsonate-casona',
  name: 'Ruta 53-B Sonsonate - Sonzacate',
  covers: ['la-casona-grill'],
  price: 0.25,
  path: [
    [13.7180, -89.7300], // Colonia San Rafael (inicio ruta 53-B)
    [13.7190, -89.7280], // Hacia el centro
    [13.7200, -89.7260], // Catedral de Sonsonate
    [13.7210, -89.7240], // Avenida El Ángel
    [13.7220, -89.7200], // Estadio Ana Mercedes Campos
    [13.7250, -89.7180], // Hacia Sonzacate
    [13.7270, -89.7170], // Zona de Sonzacate
    [13.727234835880092, -89.71659229119517], // La Casona Grill
  ],
  stopNames: [
    'Colonia San Rafael',
    'Hacia Centro',
    'Catedral Sonsonate',
    'Avenida El Ángel',
    'Boulevard las Palmeras',
    'Hacia Sonzacate',
    'Zona Sonzacate',
    'La Casona Grill'
  ],
  recommendation: 'Bajarse en la parada final "La Casona Grill" - el bus te deja directamente en el restaurante en Sonzacate',
},
{
  id: '257-sonsonate-cobanos',
  name: 'Ruta 257 Sonsonate - Los Cóbanos',
  covers: ['cobanos'],
  price: 0.45,
  path: [
    [13.7208, -89.7274], // Terminal de Sonsonate
    [13.7100, -89.7350], // Salida de Sonsonate
    [13.6800, -89.7500], // Hacienda Santa Clara
    [13.6500, -89.7800], // Hacia San Julián
    [13.6200, -89.8000], // San Julián
    [13.5900, -89.8100], // Miravalles
    [13.5700, -89.8150], // Acajutla zona
    [13.5500, -89.8200], // Hacia costa
    [13.540034799774805, -89.80310448373432], // Playa Los Cóbanos
  ],
  stopNames: [
    'Terminal Sonsonate',
    'Salida Sonsonate',
    'Hacienda Santa Clara',
    'Hacia San Julián',
    'San Julián',
    'Miravalles',
    'Zona Acajutla',
    'Hacia Costa',
    'Playa Los Cóbanos'
  ],
  recommendation: 'Bajarse en la carretera principal cerca de Los Cóbanos y buscar el acceso a la playa de tu preferencia - hay varios puntos de entrada a lo largo de la costa',
},
{
  id: '259-sonsonate-barra-santiago',
  name: 'Ruta 259 Sonsonate - Barra de Santiago',
  covers: ['barra-santiago'],
  price: 0.90,
  path: [
    [13.7208, -89.7274], // Terminal de Sonsonate
    [13.7100, -89.7400], // Salida hacia costa oeste
    [13.6900, -89.7600], // Hacienda Santa Clara
    [13.6700, -89.7800], // San Julián
    [13.6500, -89.8200], // Metalío
    [13.6400, -89.8600], // Buena Vista
    [13.697122761439353, -89.94530438627147], // Barra de Santiago
    
    
  ],
  stopNames: [
    'Terminal Sonsonate',
    'Salida Costa Oeste',
    'Hacienda Santa Clara',
    'San Julián',
    'Metalío',
    'Buena Vista',
    'La Barra de Santiago'
  ],
  recommendation: 'Bajarse en la parada final y buscar transporte local (lanchas o pickups) para llegar exactamente a La Barra de Santiago - el bus te deja en el punto de acceso pero necesitas conexión adicional para llegar al destino final',
}, 
{
  id: '218',
  name: 'Ruta 218',
  covers: ['tazumal'],
  price: 0.30,
  path: [
    [13.9942, -89.5592], // Santa Ana centro (inicio)
    [13.9920, -89.5650], // Punto intermedio Santa Ana
    [13.9890, -89.6100], // Desvío hacia el norte
    [13.987713908442595, -89.64290199352408], // Ciudad Real
    [13.985562683638426, -89.67563635757242], // Chalchuapa entrada
    [13.980856117091646, -89.67644474047975] // Chalchuapa (final)
  ],
  stopNames: [
    'Santa Ana Centro',
    'Santa Ana',
    'Desvío Norte',
    'Ciudad Real',
    'Entrada a Chalchuapa',
    'Chalchuapa'
  ],
  recommendation: 'Desde Chalchuapa se puede caminar al Sitio Arqueológico Tazumal - es una caminata corta y bien señalizada',
  schedule: {
    weekdays: {
      first: '05:30',
      last: '17:00',
      frequency: '45-60 minutos'
    },
    weekend: {
      first: '06:00', 
      last: '16:30',
      frequency: '60-75 minutos'
    }
  },
  duration: '45-55 minutos',
  type: 'interurbano',
  highlights: [
    'Salida desde el centro de Santa Ana',
    'Acceso directo al Sitio Arqueológico Tazumal',
    'Paso por Ciudad Real',
    'Ruta turística popular para visitar Chalchuapa'
  ]
},
//Ahuachapán
{
  id: '20',
  name: 'Ruta 20',
  covers: ['apaneca'],
  price: 0.38,
  path: [
    [13.926036253262748, -89.84469543225842], // Ahuachapán (inicio)
    [13.9200, -89.8350], // Salida de Ahuachapán
    [13.9100, -89.8250], // Hacia las montañas
    [13.9000, -89.8150], // Área montañosa
    [13.8900, -89.8100], // Concepción de Ataco zona
    [13.8850, -89.8080], // Aproximación a Apaneca
    [13.8800, -89.8060], // Entrada Apaneca
    [13.85902579697225, -89.80470773184635] // Parque Central Apaneca (final)
  ],
  stopNames: [
    'Ahuachapán Centro',
    'Salida Ahuachapán',
    'Carretera Montañosa',
    'Mirador La Cumbre',
    'Concepción de Ataco',
    'Entrada Apaneca',
    'Centro Apaneca',
    'Parque Central Apaneca'
  ],
  recommendation: 'Bajarse en el Parque Central de Apaneca - es la parada final en el corazón del pueblo, ideal para explorar el centro histórico y sus alrededores',
  schedule: {
    weekdays: {
      first: '05:00',
      last: '17:30',
      frequency: '60-90 minutos'
    },
    weekend: {
      first: '05:30', 
      last: '16:30',
      frequency: '90-120 minutos'
    }
  },
  duration: '75-90 minutos',
  type: 'interurbano',
  highlights: [
    'Ruta escénica de montaña',
    'Paso por Concepción de Ataco',
    'Vistas panorámicas en Mirador La Cumbre',
    'Acceso a la Ruta de las Flores',
    'Conexión con pueblos turísticos de Ahuachapán'
  ]
},
{
  id: 'laguna-verde',
  name: 'Ruta 20',
  covers: ['laguna-verde'],
  price: 0.38,
  path: [
    [13.926036253262748, -89.84469543225842], // Ahuachapán (inicio)
    [13.911674128103064, -89.83258330441629], // Hacia las montañas
    [13.90089236319015, -89.79493337439848], // Concepción de Ataco zona
    [13.901019500351003, -89.78448172605127] // Área cercana Laguna Verde (final)
  ],
  stopNames: [
    'Ahuachapán Centro',
    'Carretera Montañosa',
    'Area Rural',
    'Laguna Verde área'
  ],
  recommendation: 'Bajarse en la parada más cercana a Laguna Verde - se necesita transporte local adicional (pickup o caminata) para llegar hasta la laguna propiamente',
  schedule: {
    weekdays: {
      first: '05:00',
      last: '17:30',
      frequency: '60-90 minutos'
    },
    weekend: {
      first: '05:30', 
      last: '16:30',
      frequency: '90-120 minutos'
    }
  },
  duration: '60-75 minutos',
  type: 'interurbano',
  highlights: [
    'Acceso hacia Laguna Verde',
    'Ruta escénica de montaña',
    'Paso por Concepción de Ataco',
    'Punto de conexión para transporte local',
    'Parte de la Ruta de las Flores'
  ]
},
{
  id: 'ataco',
  name: 'Ruta 20',
  covers: ['ataco'],
  price: 0.38,
  path: [
    [13.926036253262748, -89.84469543225842], // Ahuachapán (inicio)
    [13.916616117356567, -89.83919448796816], // Salida de Ahuachapán
    [13.911843704857198, -89.83285508820923], // Hacia las montañas
    [13.898668540737438, -89.8326042537975], // Área montañosa
    [13.898668540737438, -89.8326042537975], // Concepción de Ataco zona
    [13.869244278315662, -89.85205413626528] // Centro de Concepción de Ataco (final)
  ],
  stopNames: [
    'Ahuachapán Centro',
    'Salida Ahuachapán',
    'Carretera Montañosa',
    'Área Montañosa',
    'Entrada Ataco',
    'Centro Concepción de Ataco'
  ],
  recommendation: 'Bajarse en el centro del pueblo de Concepción de Ataco - parada final en el corazón del pueblo, ideal para explorar sus murales, artesanías y gastronomía local',
  schedule: {
    weekdays: {
      first: '05:00',
      last: '17:30',
      frequency: '60-90 minutos'
    },
    weekend: {
      first: '05:30', 
      last: '16:30',
      frequency: '90-120 minutos'
    }
  },
  duration: '50-65 minutos',
  type: 'interurbano',
  highlights: [
    'Destino en la famosa Ruta de las Flores',
    'Acceso a murales artísticos del pueblo',
    'Centro de artesanías y gastronomía local',
    'Ruta escénica de montaña',
    'Pueblo pintoresco de clima fresco'
  ]
},
];
