/* eslint-disable @typescript-eslint/camelcase */
function with_copyright(images, title, copyright_) {
  const copyright =
    copyright_ || '(c) 2020 Courouble Design & Engineering (http://www.couroubledesign.com/) - Rights reserved'
  const res = {}
  Object.keys(images).forEach(img => {
    res[img] = {
      title,
      caption: images[img],
      copyright
    }
  })
  return res
}

const images = {
  concepts: with_copyright(
    {
      concept_cat52: 'Passenger Cruising Sailing Catamaran 52’',
      concept_cat60: 'Passenger Cruising Sailing Catamaran 60’',
      concept_racer41_1: 'Racer Cruiser 41′ – ORR',
      concept_racer41_2: 'Racer Cruiser 41′ – ORR',
      concept_racer41_3: 'Racer Cruiser 41′ – ORR',
      concept_class40: 'Class 40 Fiberglass'
    },
    `Yachting Concepts`
  ),
  gf42: with_copyright(
    {
      gf42_2014_1: 'First time in Water!',
      gf42_2014_2: '',
      gf42_2014_3: '',
      gf42_concept_1: 'Concept',
      gf42_concept_2: 'Concept',
      gf42_concept_3: 'Concept',
      gf42_fluidanalysis_2: 'Computational Fluid Dynamics with CFDMax LLC.',
      gf42_fluidanalysis_3: 'Computational Fluid Dynamics with CFDMax LLC.'
    },
    '42′ Racer Trimaran'
  ),
  racer44: with_copyright(
    {
      racer44_1: 'Winner Bug Boat Series 2010 / Ullman series 2009',
      racer44_2: 'Winner Bug Boat Series 2010 / Ullman series 2009',
      racer44_3: 'Winner Bug Boat Series 2010 / Ullman series 2009',
      racer44_4: ''
    },
    '44′ IRC Racer'
  ),
  surfboard: with_copyright(
    {
      surfboard_0: '42 ft long - supporting a crew weight of 12600 lb!',
      surfboard_1: 'Shaped by Nev Hyman - Firewire Surfboard',
      surfboard_2: 'Compared to a normal size longboard!',
      surfboard_3: 'Guinness world record beaten, congrats to the team!',
      surfboard_4: 'in the Firewire Surfboard shop...'
    },
    `Largest surfboard in the world`,
    'Designed by Courouble Design & Engineering, Shaped by Nev Hyman - Firewire Surfboard'
  ),
  offshore47: with_copyright(
    {
      offshore47_1: 'Construction Pre-preg carbon Nomex',
      offshore47_2: 'Construction Pre-preg carbon Nomex'
    },
    `Offshore 47′ ORR racer`
  ),
  vectorlaunch: with_copyright(
    {
      vectorlaunch_1: `Carbon-fiber thrust structure by Courouble Design`,
      vectorlaunch_2: `Carbon-fiber thrust structure by Courouble Design`,
      vectorlaunch_3: `on launch pad for static fire test`
    },
    `Vector Launch Rocket (Space Launch Inc. &trade;)`,
    'copyright Space Launch Inc., thrust structure by Courouble Design & Engineering'
  ),
  nanosat: with_copyright(
    {
      nanosat_1: `First multi engine aerospike propulsion system ever made`,
      nanosat_2: `Innovative rocket entirely fabricated in carbon composite`
    },
    'Nanosat Launch Vehicle (CSult & Garvey Spacecraft &trade;)',
    'copyright CSult & Garvey Spacecraft Corp. / propulsion design by Courouble Design & Engineering'
  ),
  art_aitken: with_copyright(
    {
      'DDDB 707 Aitken pavilions sm': '',
      'catalina 4': '',
      DougAitken3: '',
      'catalina 3': ''
    },
    `Aitken geodesic pavilions`,
    'copyright Aitken, structutal design by Courouble Design & Engineering'
  ),
  art_sd_airport: with_copyright(
    {
      'SD airport 1': '',
      'SD airport 2': '',
      'SD airport 5': '',
      'SD airport 6': '',
      'SD airport 8': ''
    },
    'San Diego Airport Arches',
    'copyright TBD, structutal design by Courouble Design & Engineering'
  )
}
function getOrderedListByCat() {
  const orderedImages = {}
  Object.keys(images).forEach(cat => {
    Object.keys(images[cat]).forEach(img => {
      if (!(cat in orderedImages)) {
        orderedImages[cat] = []
      }
      const imgDict = images[cat][img]
      if (imgDict !== null) {
        if (typeof imgDict.exclude === `undefined` || imgDict.exclude === false) {
          let ext = ''
          if (img.search('.svg') === -1) {
            ext = '.jpg'
          }
          orderedImages[cat].push(`${img}${ext}`)
        }
      }
    })
  })
  // console.log(JSON.stringify(orderedImages))
  return orderedImages
}

module.exports = {
  imageInfoDict: images,
  orderedImages: getOrderedListByCat()
}
