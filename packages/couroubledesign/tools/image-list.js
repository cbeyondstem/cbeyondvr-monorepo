/* eslint-disable @typescript-eslint/camelcase */

const images = {
  home: {
    title: 'home',
    images: {}
  },
  concepts: {
    title: 'concepts',
    copyright: 'design by Courouble Design & Engineering',
    images: {
      concept_cat52: 'Passenger Cruising Sailing Catamaran 52’',
      concept_cat60: 'Passenger Cruising Sailing Catamaran 60’',
      concept_racer41_1: 'Racer Cruiser 41′ – ORR',
      concept_racer41_2: 'Racer Cruiser 41′ – ORR',
      concept_racer41_3: 'Racer Cruiser 41′ – ORR',
      concept_class40: 'Class 40 Fiberglass'
    }
  },
  gf42: {
    title: '42′ RACER TRIMARAN',
    copyright: 'design by Courouble Design & Engineering',
    images: {
      gf42_2014_1: {},
      gf42_2014_2: {},
      gf42_2014_3: {},
      gf42_concept_1: {},
      gf42_concept_2: {},
      gf42_concept_3: {},
      gf42_fluidanalysis_1: 'Computational Fluid Dynamics with CFDMax LLC.',
      gf42_fluidanalysis_2: {},
      gf42_fluidanalysis_3: {}
    }
  },
  racer44: {
    title: '44′ IRC RACER',
    title2: '2010 winner Bug Boat Series - class 2 / 2009 Overall Winner Ullman series',
    copyright: 'design by Courouble Design & Engineering',
    images: {
      racer44_1: {},
      racer44_2: {},
      racer44_3: {},
      racer44_4: {}
    }
  },
  surfboard: {
    title: 'Largest surfboard in the world',
    title2: 'Guinness world record',
    copyright:
      'Complete structural analysis and engineering by Courouble Design, Shaped by Nev Hyman - Firewire Surfboard',
    images: {
      surfboard_1: 'Length 42 ft - Crew Weight 12600 lb',
      surfboard_2: 'compared to a normal size longboard!',
      surfboard_3: 'Guinness world record beaten, congrats to the team!',
      surfboard_4: 'in the shop...'
    }
  },
  offshore47: {
    title: 'Offshore 47′ ORR racer. construction Pre-preg carbon Nomex',
    copyright: 'design by Courouble Design & Engineering',
    images: {
      offshore47_1: null,
      offshore47_2: null
    }
  },
  vectorlaunch: {
    title: 'Vector Launch Rocket for small satellite launch',
    copyright: 'rocket by Space Launch Inc., thrust structure by Courouble Design & Engineering',
    images: {
      vectorlaunch_1: 'rocket entirely fabricated and engineered in carbon fiber',
      vectorlaunch_2: 'Thrust structure design and engineered and built by Courouble Design',
      vectorlaunch_3: 'on launch pad for static fire test'
    }
  },
  nanosat: {
    title: 'Nanosat Launch Vehicle',
    copyright: 'collaboration CSult & Garvey Spacecraft Corp. & Courouble Design & Engineering',
    images: {
      nanosat_2:
        'Liquid propelled rocket engine vehicle, first multi engine aerospike propulsion system ever made and tested in full flight conditions.',
      nanosat_1: 'Innovative rocket entirely fabricated in carbon composite'
    }
  }
}
function getOrderedListByCat() {
  const orderedImages = {}
  Object.keys(images).forEach(cat => {
    Object.keys(images[cat].images).forEach(img => {
      if (!(cat in orderedImages)) {
        orderedImages[cat] = []
      }
      const imgDict = images[cat].images[img]
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
