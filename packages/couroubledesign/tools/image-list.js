/* eslint-disable @typescript-eslint/camelcase */
function with_copyright(images, copyright_) {
  const copyright = copyright_ || 'Designed by Courouble Design & Engineering'
  const res = {}
  Object.keys(images).forEach(img => {
    res[img] = {
      title: images[img],
      copyright
    }
  })
  return res
}
const images = {
  concepts: with_copyright({
    concept_cat52: 'Passenger Cruising Sailing Catamaran 52’',
    concept_cat60: 'Passenger Cruising Sailing Catamaran 60’',
    concept_racer41_1: 'Racer Cruiser 41′ – ORR',
    concept_racer41_2: 'Racer Cruiser 41′ – ORR',
    concept_racer41_3: 'Racer Cruiser 41′ – ORR',
    concept_class40: 'Class 40 Fiberglass'
  }),
  gf42: with_copyright({
    gf42_2014_1: '42′ Racer Trimaran',
    gf42_2014_2: '42′ Racer Trimaran',
    gf42_2014_3: '42′ Racer Trimaran',
    gf42_concept_1: '42′ Racer Trimaran Concept',
    gf42_concept_2: '42′ Racer Trimaran Concept',
    gf42_concept_3: '42′ Racer Trimaran Concept',
    gf42_fluidanalysis_1: 'Computational Fluid Dynamics with CFDMax LLC.',
    gf42_fluidanalysis_2: 'Computational Fluid Dynamics with CFDMax LLC.',
    gf42_fluidanalysis_3: 'Computational Fluid Dynamics with CFDMax LLC.'
  }),
  racer44: with_copyright({
    racer44_1: '44′ IRC Racer, Winner Bug Boat Series 2010 / Ullman series 2009',
    racer44_2: '44′ IRC Racer',
    racer44_3: '44′ IRC Racer',
    racer44_4: '44′ IRC Racer'
  }),
  surfboard: with_copyright(
    {
      surfboard_0: 'Largest surfboard in the world, 42 ft long - supporting a crew weight of 12600 lb!',
      surfboard_1: 'Largest surfboard in the world, 42 ft long - supporting a crew weight of 12600 lb!',
      surfboard_2: 'Largest surfboard in the world, compared to a normal size longboard!',
      surfboard_3: 'Largest surfboard in the world, Guinness world record beaten, congrats to the team!',
      surfboard_4: 'Largest surfboard in the world in the shop...'
    },
    'Designed by Courouble Design & Engineering, Shaped by Nev Hyman - Firewire Surfboard'
  ),
  offshore47: with_copyright({
    offshore47_1: 'Offshore 47′ ORR racer, Construction Pre-preg carbon Nomex',
    offshore47_2: 'Offshore 47′ ORR racer, Construction Pre-preg carbon Nomex'
  }),
  vectorlaunch: with_copyright(
    {
      vectorlaunch_1:
        'Vector Launch Rocket (Space Launch Inc. &trade;), Entirely fabricated and engineered in carbon fiber',
      vectorlaunch_2:
        'Vector Launch Rocket (Space Launch Inc. &trade;), Carbon-fiber thrust structure by Courouble Design',
      vectorlaunch_3: 'Vector Launch Rocket, on launch pad for static fire test'
    },
    'Rocket by Space Launch Inc., thrust structure by Courouble Design & Engineering'
  ),
  nanosat: with_copyright(
    {
      nanosat_1:
        'Nanosat Launch Vehicle (CSult & Garvey Spacecraft &trade;), First multi engine aerospike propulsion system ever made',
      nanosat_2:
        'Nanosat Launch Vehicle (CSult & Garvey Spacecraft &trade;), Innovative rocket entirely fabricated in carbon composite'
    },
    'collaboration CSult & Garvey Spacecraft Corp. & Courouble Design & Engineering'
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
