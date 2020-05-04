function href(lnk, name) {
  return `<a href=${lnk} target="_blank" style="color:inherit">${name}</a>`
}
const services = [
  {
    folder: `service_S`,
    service: `S`,
    title: `STRUCTURAL ANALYSIS`,
    details: `Light weight composite design,
numerical analysis method for optimized structural design and engineering,
construction process and assembly.`,
    images: [`gita5`, `airport1`, `Nike21`, `catalina5`, `board4`, `P10-1`, `vector2`, `Hermes1`, `figaro3-1`, `keel1`]
  },
  {
    folder: `service_M`,
    service: `M`,
    title: `MANUFACTURING & PROTOTYPING`,
    details: `High performance carbon composite manufacturing,
prototype fabrication in carbon fiber using complex 3D-printed carbon tooling.`,
    images: [`vector6`, `vector3`, `office1`, `office5`, `office2`, `fusion4`, `office4`]
  },
  {
    folder: `service_N`,
    service: `N`,
    title: `NAVAL ARCHITECTURE`,
    details: `Racing yacht and powerboat design, resistance optimization.
Full engineering with end-to-end project management.`,
    images: [`GF1`, `47-1`, `47-4`, `sprit3`, `kimono1`, `wasabi0`, `39-5`]
  },
  {
    folder: `service_P`,
    service: `P`,
    title: `3D PRINTING TOOLING`,
    details: `Additive manufacturing capabilities,
 large 3D printing parts or molds in carbon fiber for oven cure tooling.`,
    images: [`fusion1`, `fusion6`, `fusion2`, `fusion3`]
  },
  {
    folder: `service_D`,
    service: `D`,
    title: `HYDRODYNAMIC & AERODYNAMIC`,
    details: `Numerical flow modeling and CFD analysis and validation:
inviscid (panel method) and viscous flow (potential flow).`,
    images: [`CFD1`, `CFD3`, `CFD5`, `View5`, `View1`, `View3`, `CFDWL`, `NS1`, `NS5`]
  }
]
const categories = [
  {
    category: `AEROSPACE`,
    details: undefined,
    projects: [`vectorlaunch`, `nanosat`]
  },
  {
    category: `YACHTING`,
    details: undefined,
    projects: [`gf42`, `racer44`, `offshore47`, `surfboard`, `racer41`, `racer_opt`]
  },
  {
    category: `CONSUMER`,
    details: `These projects were realised in collaboration with ${href('http://www.glform.com/', 'Greg Lynn Form')}`,
    projects: [`piaggio`, `nike`]
  },
  {
    category: `ART`,
    details: undefined,
    projects: [`art_aitken`, `art_sd_airport`]
  }
]
const projects = [
  {
    folder: `vectorlaunch`,
    project: `VECTOR-R Rocket`,
    details: `Carbon fiber Thrust Structure by Courouble Design & Engineering, Inc.`,
    year: `2019`,
    location: `Huntington beach, CA`,
    company: `Vector Launch Inc. &trade;`,
    copyright: `Vector Launch Inc. &trade;
      / Carbon fiber Thrust Structure by Courouble Design & Engineering, Inc.`,
    images: [`vector1`, `vector4`, `vector7`]
  },
  {
    folder: `nanosat`,
    project: `Multi Engine Aerospike Rocket`,
    details: `Carbon fiber rocket frame designed by Courouble Design & Engineering, Inc.`,
    year: `2019`,
    location: `Long Beach, CA`,
    company: `CSult & Garvey Spacecraft Corp.&trade;`,
    copyright: `CSult & Garvey Spacecraft Corp.&trade;
      / Carbon fiber rocket frame designed by Courouble Design & Engineering, Inc.`,
    images: [`P10-4`, `P10-2`, `P10-3`]
  },
  {
    folder: `gf42`,
    project: `GF 42' - Racing Trimaran`,
    details: `Full carbon structure, collaboration with ${href('http://www.glform.com/', 'Greg Lynn Form')}`,
    year: undefined,
    location: `Marina Del Rey, CA`,
    copyright: undefined,
    images: [`GF4`, `GF22`, `GF6`, `GF5`]
  },
  {
    folder: `racer44`,
    project: `44' Inshore/Offshore RACER`,
    details: `Glass / Carbon construction`,
    year: undefined,
    location: `Long Beach, CA`,
    copyright: undefined,
    images: [`44-2`, `44-1`, `44-3`, `44-0`]
  },
  {
    folder: `offshore47`,
    project: `47' Offshore RACER `,
    details: `Full carbon nomex construction`,
    year: undefined,
    location: `Long Beach, CA`,
    copyright: undefined,
    images: [`47-3`, `47-2`, `47-4`]
  },
  {
    folder: `surfboard`,
    project: `Guinness record - largest SurfBoard in the World`,
    details: `World Record for City of Huntington Beach, contract with city of Huntington Beach`,
    year: undefined,
    location: `Huntington beach, CA`,
    copyright: undefined,
    images: [`board3`, `board00`, `board2`]
  },
  {
    folder: `racer41`,
    project: `41 racer cruiser IRC/ORR `,
    details: `concept design  offshore/Inshore, collaboration with ${href(
      'https://www.naosyachts.com/',
      'Naos Yachts'
    )}`,
    year: undefined,
    location: undefined,
    copyright: undefined,
    images: [`8a`, `6a`, `7a`]
  },
  {
    folder: `racer_opt`,
    project: `Racers Optimization `,
    details: `faster on water & lower rating`,
    year: undefined,
    location: undefined,
    copyright: undefined,
    images: [`figaro3-1`, `sprit3`, `sprit1`, `wasabi0`, `bulb0`]
  },
  {
    folder: `piaggio`,
    project: `cargo-carrying robotic vehicle`,
    details: `Carbon fiber Structural Engineering by Courouble Design & Engineering, Inc.<br/>
Collaboration with ${href('http://www.glform.com/', 'Greg Lynn Form')}`,
    year: `2017`,
    location: `Boston`,
    company: `Piaggio Fast Forward&trade;`,
    copyright: `Piaggio Fast Forward&trade;
    / Carbon fiber Structural Engineering by Courouble Design & Engineering, Inc. /
collaboration with ${href('http://www.glform.com/', 'Greg Lynn Form')}`,
    images: [`gita2`, `gita5`, `gita3`, `gita0`]
  },
  {
    folder: `nike`,
    project: `Micro climate chair concept - Milano expo`,
    details: `Carbon dyneema frame by Courouble Design & Engineering, Inc.<br/>
Collaboration with ${href('http://www.glform.com/', 'Greg Lynn Form')}`,
    year: `2016`,
    location: `Milano, Italy`,
    company: `Nike&trade;`,
    copyright: `Nike&trade;
    / Carbon dyneema frame by Courouble Design & Engineering, Inc. /
Collaboration with ${href('http://www.glform.com/', 'Greg Lynn Form')}`,
    images: [`Nike21`, `Nike0`, `nike1`]
  },
  {
    folder: `art_aitken`,
    project: `Underwater Art Pavilion`,
    details: `Structural Design and Engineering by Courouble Design & Engineering, Inc.`,
    year: `2017`,
    location: `Catalina Island, CA`,
    company: href('https://www.dougaitkenworkshop.com/', 'Doug Aitken Workshop&trade;'),
    copyright: `Doug Aitken Workshop&trade;
    / Structural Design and Engineering by Courouble Design & Engineering, Inc.`,
    images: [`catalina5`, `catalina0`, `catalina3`, `catalina10`]
  },
  {
    folder: `art_sd_airport`,
    project: `San Diego Airport - Parking Terminal 2`,
    details: `Structural Engineering Concept by Courouble Design & Engineering, Inc.`,
    year: `2016`,
    location: `San Diego, CA`,
    company: href('https://www.ball-nogues.com/', 'Ball Nogues Studio&trade;'),
    copyright: `Ball Nogues Studio&trade; / Structural Engineering Concept by Courouble Design & Engineering, Inc.`,
    images: [`airport1`, `airport0`, `airport3`]
  }
]
const images = [
  {
    name: '39-5',
    title: 'Fast power catamaran design concept'
  },
  {
    name: '44-0',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: '44-1',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: '44-2',
    caption: 'Thrust structure by Courouble Design & Engineering, Inc.'
  },
  {
    name: '44-3',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: '47-1',
    title: "47' offshore racer",
    caption: 'carbon nomex structure'
  },
  {
    name: '47-2',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: '47-3',
    caption: 'Thrust structure by Courouble Design & Engineering, Inc.'
  },
  {
    name: '47-4',
    title: 'Structural layout design concept'
  },
  {
    name: '6a',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: '7a',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: '8a',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'CFD1',
    title: `Racing Trimaran Foiling Performance Optimisation`,
    caption: 'Sail plan / foils  balance analysis'
  },
  {
    name: 'CFD3',
    title: `Racing Trimaran Foiling Performance Optimisation`,
    caption: 'Sail plan analysis'
  },
  {
    name: 'CFD5',
    title: `Racing Trimaran Foiling Performance Optimisation`,
    caption: 'Sail plan - rotating mast section analysis '
  },
  {
    name: 'CFDWL',
    title: 'custom racer ',
    caption: 'Dynamic waterline distribution analysis'
  },
  {
    name: 'GF1',
    title: 'Racing trimaran',
    caption: 'carbon fiber structure'
  },
  {
    name: 'GF22',
    title: 'Racing trimaran',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'GF4',
    title: 'Racing trimaran',
    caption: 'Thrust structure by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'GF5',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'GF6',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'Hermes1',
    title: 'English Horse Jumping Saddle - Prototype',
    caption: `Full composite chassis satisfying lightweight and controlled dynamic
    deflection constraints for leading-edge saddles used in Equestrian Horse Jumping Grand-Prix`
  },
  {
    name: 'NS1',
    title: 'Hull studies - planning analysis',
    caption: 'full viscous flow drag prediction'
  },
  {
    name: 'NS5',
    title: 'racer planning analysis',
    caption: 'full viscous flow drag prediction'
  },
  {
    name: 'Nike0',
    caption: 'Innovative structure of Carbon and Dyneema mixed fibers for a stiff lightweight comfort chair'
  },
  {
    name: 'Nike21',
    caption: 'Innovative structure of Carbon and Dyneema mixed fibers for a stiff lightweight comfort chair'
  },
  {
    name: 'P10-1',
    title: 'Prospector 10 (CSult & Garvey Spacecraft Corp.&trade;)',
    caption: 'First full carbon structure for a rocket propelled by aerospike multiengine'
  },
  {
    name: 'P10-2',
    title: 'Liquid propelled rocket - multi-aerospike Engine',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'P10-3',
    title: 'Prospector 10 - fire test',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'P10-4',
    title: 'Carbon frame rocket - Aerospike engines',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'View1',
    title: 'racer - dynamic lift analysis ',
    caption: 'Inviscid flow'
  },
  {
    name: 'View3',
    title: 'racer - dynamic bow entry analysis ',
    caption: 'Inviscid flow'
  },
  {
    name: 'View5',
    title: 'Dynamic wave drag analysis',
    caption: 'Inviscid flow'
  },
  {
    name: 'airport0',
    caption: 'Extremely thin curved fiberglass structure.'
  },
  {
    name: 'airport1',
    caption: 'Extremely thin curved fiberglass structure.'
  },
  {
    name: 'airport3',
    caption: 'Extremely thin curved fiberglass structure.'
  },
  {
    name: 'board0',
    title: 'Guiness record surfboard',
    caption: 'Full structural engineering'
  },
  {
    name: 'board00',
    caption: 'Thrust structure by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'board2',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'board3',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'board4',
    title: `Largest SurfBoard in the World`,
    caption: `Surfboard fiberglass structure engineered to support 70 surfers (6 tons)<br/>
    shaped by Firewire Surfboard&trade; / "Largest Surfboard" 2015 Guinness World Record!`
  },
  {
    name: 'bulb0',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'catalina0',
    caption: 'Fiberglass sandwich buoyant structure capable to resisting strong ocean current'
  },
  {
    name: 'catalina10',
    caption: 'Fiberglass sandwich buoyant structure capable to resisting strong ocean current'
  },
  {
    name: 'catalina3',
    caption: 'Ffiberglass sandwich buoyant structure capable to resisting strong ocean current'
  },
  {
    name: 'catalina5',
    caption: 'Fiberglass sandwich buoyant structure capable to resisting strong ocean current'
  },
  {
    name: 'figaro3-1',
    title: 'racing yacht "Figaro 3" optimisation',
    caption: `Design and manufacturing of new carbon fiber parts for weight savings:<br/>
    bowsprit, chainplate, rudders, deck gear, structural stiffeners`
  },
  {
    name: 'fusion1',
    caption: `collaboration with ${href('http://www.fusionformatics.com/', 'Fusion Formatics Inc.')}`,
    title: '3D printed carbon tooling for composite fabrication'
  },
  {
    name: 'fusion2',
    caption: `collaboration with ${href('http://www.fusionformatics.com/', 'Fusion Formatics Inc.')}`,
    title: 'Printed female mold in carbon'
  },
  {
    name: 'fusion3',
    caption: `collaboration with ${href('http://www.fusionformatics.com/', 'Fusion Formatics Inc.')}`,
    title: `3D printer (${href('https://www.germanreprap.com/', 'German RepRap&trade;')})  for carbon composite tooling`
  },
  {
    name: 'fusion4',
    caption: `collaboration with ${href('http://www.fusionformatics.com/', 'Fusion Formatics Inc.')}`,
    title: `3D printer (${href('https://www.germanreprap.com/', 'German RepRap&trade;')})  for carbon composite tooling`
  },
  {
    name: 'fusion6',
    caption: `collaboration with ${href('http://www.fusionformatics.com/', 'Fusion Formatics Inc.')}`,
    title: 'Printed female mold in PLA'
  },
  {
    name: 'gita0',
    caption: 'lightweight carbon structure with marginal deflection supporting heavy luggages'
  },
  {
    name: 'gita2',
    caption: 'lightweight carbon structure with marginal deflection supporting heavy luggages'
  },
  {
    name: 'gita3',
    caption: 'lightweight carbon structure with marginal deflection supporting heavy luggages'
  },
  {
    name: 'gita5',
    title: 'Robotic vehicle "Gita" (Piaggio Fast Forward&trade;)',
    caption: 'Lightweight carbon structure with marginal deflection supporting heavy luggages'
  },
  {
    name: 'keel1',
    title: 'racing yacht new keel',
    caption: 'very high strength metal - critical foil section'
  },
  {
    name: 'nike1',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'office1',
    title: 'Composite Manufacturing room',
    caption: 'Robot Arms & Ovens for Preg-Preg'
  },
  {
    name: 'office2',
    title: 'pre preg fabrication process',
    caption: ``
  },
  {
    name: 'office4',
    title: 'Design office',
    caption: ``
  },
  {
    name: 'office5',
    title: 'Composite Manufacturing room',
    caption: 'Air controlled temperature and humidity'
  },
  {
    name: 'sprit1',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'sprit3',
    title: 'bowsprit removable for cruising or racing  ',
    caption: 'Stainless steel / carbon'
  },
  {
    name: 'vector1',
    title: 'Vector-R rocket assembly',
    caption: 'Thrust structure designed by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'vector2',
    title: 'Vector-R rocket (Vector Launch Inc. &trade;)',
    caption: `design and manufacturing of the thrust structure satisfying complex engineering constraints
    of weight, strength and dynamic stability`
  },
  {
    name: 'vector3',
    title: `Pre-preg carbon part`,
    caption: ''
  },
  {
    name: 'vector4',
    title: 'Vector Launch - Engine installed',
    caption: 'Thrust structure by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'vector6',
    title: 'Vector Launch - Engine installed',
    caption: 'Thrust structure by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'vector7',
    title: 'Vector Launch - static pad for fire test',
    caption: 'Thrust structure by Courouble Design & Engineering, Inc.'
  },
  {
    name: 'wasabi0',
    caption: 'Carbon structure designed by Courouble Design & Engineering, Inc.'
  }
]

function getImageDicts() {
  // console.log(rootDir)
  const allprojects = projects.concat(services)
  const imageInfoDict = {}
  const orderedImages = {}
  allprojects.forEach(async p => {
    imageInfoDict[p.folder] = {}
    orderedImages[p.folder] = []
    p.images.forEach(projectImg => {
      const imgProps = images.filter(img => img.name === projectImg)
      if (imgProps.length === 0) {
        console.error(`[ERROR]\t${p.folder}/${projectImg} is not part of the images list`)
        return
      }
      if (imgProps.length > 1) {
        console.error(
          `[WARNING] ${p.folder}/${projectImg} defined multiple times in images list:\n${JSON.stringify(
            imgProps,
            null,
            2
          )}`
        )
      }
      const myImg = imgProps[0]
      imageInfoDict[p.folder][myImg.name] = myImg
      orderedImages[p.folder].push(`${projectImg}.jpg`)
    })
  })
  return { imageInfoDict, orderedImages }
}
const { imageInfoDict, orderedImages } = getImageDicts()
module.exports = {
  services,
  categories,
  projects,
  images,
  imageInfoDict,
  orderedImages
}
