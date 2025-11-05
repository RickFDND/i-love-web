// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

import { readdir, readFile } from 'node:fs/promises'

import { marked } from 'marked'

const files = await readdir('content')

console.log(files)

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// home.liquid
app.get('/', async function(request, response) {
    response.render('home.liquid')
})

// voortgang.liquid - toon alle bestanden
app.get('/voortgang', async function(request, response) {
    // Zorg dat 'files' correct is gedefinieerd
    response.render('voortgang.liquid', { files: files })
})

// individuele markdown pagina
app.get('/voortgang/:slug', async function(request, response) {
    try {
        // Gebruik request.params (niet req.params)
        const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' })
        const markedUpFileContents = marked.parse(fileContents)

        // Geef de geparste content door aan de template
        response.render('slug.liquid', { 
            fileContents: markedUpFileContents,
            // of gebruik consistente naam:
            // content: markedUpFileContents
        })
    } catch (error) {
        console.error('Fout bij lezen van bestand:', error)
        response.status(404).send('Pagina niet gevonden')
    }
})

app.get('/leuk', async function(request, response){

  
    response.render('leuk.liquid')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})