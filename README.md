# Opdracht voor WE::CODE

Maak in Vue een app die uit een lijst van componenten de gemiddelde “bezetting” berekent.

Context:

We zijn op dit moment bezig met het schrijven van een nieuwe versie van de web-app van ibasx. Deze schrijven we in Vue.JS. De web-applicatie geeft gebruikers de mogelijkheid om te zien hoeveel werkplekken en/of ruimte op een verdieping "beschikbaar" zijn. In het bijgevoegde screenshot zie je dat we boven in het scherm een bezettingsgraad tonen. Dat is de gemiddelde bezetting van alle ruimtes en werkplekken op 1 verdieping. 

Jouw opdracht is om de bezettingsgraad te berekenen en te tonen in een nieuwe vue-app.

De lijst van componenten is op te vragen via:

http://35.198.67.173/v3/componentsForMap/568d2deb47570bac54a1fbc0

Je krijgt dan een lijst met componenten die allemaal een object status bevatten. Voorbeeld van zo’n component:

{
    "_id": "573ab14bfba719d01f44511c",
    "projection": {
      "coords": {
        "x": -3078.4439493736,
        "y": 751.72845186376
      }
    },
    "status": {
      "newStatus": "0",
      "blockReleaseTime": 1505898687884,
      "occupationReleaseTime": 1550082328000
    },
    "checkins": 0,
    "bookings": 0
  },


Zoals je ziet heeft deze component (en elke andere) een status:

"status": {
      "newStatus": "0",
      "blockReleaseTime": 1505898687884,
      "occupationReleaseTime": 1550082328000
    },



Voor alle opdrachten geldt: Maak gebruik van Vue.JS en (extra uitdaging) VueX 

Opdracht 1:
De bedoeling van deze opdracht is dat je de gemiddelde waarde van “newStatus” van alle componenten berekent en toont in het midden van het scherm in een percentage. Dat is namelijk de huidige bezetting van alle componenten. 

Opdracht 2:
Zorg dat elke 30 seconden de nieuwe lijst met componenten wordt opgevraagd en toon de nieuwe waarde op het scherm.  

Opdracht 3:
Zorgt dat de code door een eslint-check komt en gebruik daarbij onderstaande “/.eslintrc.js”:

module.exports = {
  'root': true,
  'env': {
   'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'plugins': [
      'vue'
    ],
  'extends': [
    'eslint:all',
    'plugin:vue/essential',
  ],
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 8,
    // "allowImportExportEverywhere": true,
    'sourceType': 'module'
  },
  'rules': {
    'array-element-newline': 'off',
    'complexity': [
      'error',
      10
    ],
    'dot-location': 'off',
    'func-style': 'off',
    'handle-callback-err': 'error',
    'indent': [
      'error',
      4
    ],
    'max-len': [
      'error',
      {
        'code': 120,
        'ignoreComments': true,
        'ignoreStrings': true
      }
    ],
    'multiline-ternary': 'off',
    'newline-per-chained-call': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-magic-numbers': 'off',
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-spacing': 'off',
    'one-var': 'off',
    'padded-blocks': 'off',
    'no-process-env': 'off',
    'no-plusplus':'off',
    'quotes': 'error',
    'semi': [
      2,
      'always'
    ],
    'id-length': [1, {'min':1}],
    'sort-keys': 'off',
    'strict': 1
  }
};


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# wecode
