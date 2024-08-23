const carBrands = {
  Toyota: {
    Corolla: {
      year: 2019,
      type: "Sedan",
      shades: ["Super White", "Midnight Black", "Blueprint"],
      image: "assets/toyota-corolla-white.jpg",
    },
    Camry: {
      year: 2021,
      type: "Sedan",
      shades: ["Celestial Silver", "Wind Chill Pearl", "Ruby Flare Pearl"],
      image: "assets/toyota-camry-white.png",
    },
    RAV4: {
      year: 2020,
      type: "SUV",
      shades: ["Magnetic Gray", "Black Sand Pearl", "Silver Sky Metallic"],
      image: "assets/rav4-grey.png",
    },
    Highlander: {
      year: 2022,
      type: "SUV",
      shades: ["Blueprint", "Moon Dust", "Ooh La La Rouge"],
      image: "assets/highlander-silver.png",
    },
    Tacoma: {
      year: 2023,
      type: "Truck",
      shades: ["Army Green", "Voodoo Blue", "Barcelona Red"],
      image: "assets/tacoma-white.png",
    },
  },
  Honda: {
    Civic: {
      year: 2021,
      type: "Sedan",
      shades: ["Platinum White Pearl", "Lunar Silver Metallic", "Rallye Red"],
      image: "assets/civic-white.png",
    },
    Accord: {
      year: 2020,
      type: "Sedan",
      shades: [
        "Obsidian Blue Pearl",
        "Modern Steel Metallic",
        "Champagne Frost Pearl",
      ],
      image: "assets/accord-silver.png",
    },
    CRV: {
      year: 2019,
      type: "SUV",
      shades: [
        "Crystal Black Pearl",
        "Meteorite Gray Metallic",
        "Platinum White Pearl",
      ],
      image: "assets/crv-silver.png",
    },
    Pilot: {
      year: 2022,
      type: "SUV",
      shades: [
        "Pacific Pewter Metallic",
        "Modern Steel Metallic",
        "White Diamond Pearl",
      ],
      image: "assets/pilot-orange.png",
    },
    Ridgeline: {
      year: 2023,
      type: "Truck",
      shades: [
        "Black Edition",
        "Steel Sapphire Metallic",
        "Forest Mist Metallic",
      ],
      image: "assets/ridgeline-black.png",
    },
  },
  Ford: {
    Fiesta: {
      year: 2018,
      type: "Hatchback",
      shades: ["Oxford White", "Shadow Black", "Race Red"],
      image: "assets/fiesta-green.png",
    },
    Focus: {
      year: 2017,
      type: "Sedan",
      shades: ["Magnetic", "Lightning Blue", "Hot Pepper Red"],
      image: "assets/focus-orange.png",
    },
    Explorer: {
      year: 2022,
      type: "SUV",
      shades: ["Iconic Silver", "Star White", "Agate Black"],
      image: "assets/explorer-white.png",
    },
    lincoln: {
      year: 2023,
      type: "Truck",
      shades: ["Lead Foot", "Velocity Blue", "Carbonized Gray"],
      image: "assets/lincoln-blue.png",
    },
    Mustang: {
      year: 2021,
      type: "Coupe",
      shades: ["Grabber Blue", "Twister Orange", "Kona Blue"],
      image: "assets/mustang-grey.png",
    },
  },
  Chevrolet: {
    Malibu: {
      year: 2020,
      type: "Sedan",
      shades: ["Summit White", "Mosaic Black", "Shadow Gray Metallic"],
      image: "assets/malibu-beige.png",
    },
    Optra: {
      year: 2019,
      type: "Sedan",
      shades: [
        "Silver Ice Metallic",
        "Red Tintcoat",
        "Nightfall Gray Metallic",
      ],
      image: "assets/optra-silver.png",
    },
    Tahoe: {
      year: 2022,
      type: "SUV",
      shades: ["Black", "Cajun Red Tintcoat", "Silver Ice Metallic"],
      image: "assets/tahoe-grey.png",
    },
    Silverado: {
      year: 2023,
      type: "Truck",
      shades: [
        "Summit White",
        "Northsky Blue Metallic",
        "Satin Steel Metallic",
      ],
      image: "assets/silverado-grey.png",
    },
    Camaro: {
      year: 2021,
      type: "Coupe",
      shades: [
        "Riverside Blue Metallic",
        "Shadow Gray Metallic",
        "Rally Yellow",
      ],
      image: "assets/camaro-yellow.png",
    },
  },
  BMW: {
    threeSeries: {
      year: 2022,
      type: "Sedan",
      shades: [
        "Alpine White",
        "Black Sapphire Metallic",
        "Mineral Gray Metallic",
      ],
      image: "assets/3series-blue.png",
    },
    X5: {
      year: 2023,
      type: "SUV",
      shades: ["Phantom Black", "Arctic Gray", "Cohiba Brown"],
      image: "assets/x5-black.png",
    },
    M3: {
      year: 2021,
      type: "Coupe",
      shades: ["Toronto Red", "Laguna Seca Blue", "Sao Paulo Yellow"],
      image: "assets/m3-silver.png",
    },
    X3: {
      year: 2022,
      type: "SUV",
      shades: ["Brooklyn Gray", "White", "Black Sapphire"],
      image: "assets/x3-white.png",
    },
    SevenSeries: {
      year: 2023,
      type: "Sedan",
      shades: ["Ionic Silver", "Alpine White", "Black"],
      image: "assets/7series-darkblue.png",
    },
  },
  Audi: {
    A3: {
      year: 2021,
      type: "Sedan",
      shades: ["Turbo Blue", "Mythos Black", "Glacier White"],
      image: "assets/a3-white.png",
    },
    A4: {
      year: 2022,
      type: "Sedan",
      shades: ["District Green", "Quantum Gray", "Moonlight Blue"],
      image: "assets/a4-grey.png",
    },
    Q5: {
      year: 2023,
      type: "SUV",
      shades: ["Panther Black", "Navarra Blue", "Ibis White"],
      image: "assets/q5-blue.png",
    },
    Q7: {
      year: 2022,
      type: "SUV",
      shades: ["Matador Red", "Orca Black", "Carrara White"],
      image: "assets/q7-white.png",
    },
    A6: {
      year: 2021,
      type: "Sedan",
      shades: ["Arctic Silver", "Mythos Black", "District Green"],
      image: "assets/a6-grey.png",
    },
  },
  Mercedes: {
    CClass: {
      year: 2022,
      type: "Sedan",
      shades: ["Polar White", "Iridium Silver", "Obsidian Black"],
      image: "assets/cclass-white.png",
    },
    EClass: {
      year: 2021,
      type: "Sedan",
      shades: [
        "Manufaktur Patagonia Red",
        "Manufaktur Cashmere White",
        "Selenite Gray",
      ],
      image: "assets/eclass-darkblue.png",
    },
    GLE: {
      year: 2023,
      type: "SUV",
      shades: ["Cabernet Red", "Manufaktur Selenite Gray", "White"],
      image: "assets/gle-grey.png",
    },
    GLS: {
      year: 2022,
      type: "SUV",
      shades: ["Iridium Silver", "Black", "MANUFAKTUR Patagonia Red"],
      image: "assets/gl5-white.png",
    },
    SClass: {
      year: 2023,
      type: "Sedan",
      shades: ["Obsidian Black", "Manufaktur Diamond White", "Iridium Silver"],
      image: "assets/sclass-grey.png",
    },
  },
  Lamborghini: {
    Aventador: {
      year: 2023,
      type: "Coupe",
      shades: ["Giallo Orion", "Rosso Mars", "Nero Aldebaran"],
      image: "assets/aventador-grey.png",
    },
    Huracan: {
      year: 2022,
      type: "Coupe",
      shades: ["Verde Mantis", "Giallo Inti", "Bianco Icarus"],
      image: "assets/huracan-orange.png",
    },
    Urus: {
      year: 2021,
      type: "SUV",
      shades: ["Nero Noctis", "Giallo Auge", "Grigio Nimbus"],
      image: "assets/urus-yellow.png",
    },
    Sian: {
      year: 2023,
      type: "Coupe",
      shades: ["Verde Scandal", "Grigio Liqueo", "Rosso Efesto"],
      image: "assets/sian-orange.png",
    },
    HuracanEVO: {
      year: 2022,
      type: "Coupe",
      shades: ["Azzuro Themis", "Rosso Diablos", "Nero Helene"],
      image: "assets/huracanevo-green.png",
    },
  },
  Ferrari: {
    GTB: {
      year: 2023,
      type: "Coupe",
      shades: ["Rosso Corsa", "Giallo Modena", "Nero"],
      image: "assets/gtb-red.png",
    },
    F8Tributo: {
      year: 2022,
      type: "Coupe",
      shades: ["Blu Corsa", "Rosso Fiorano", "Grigio Silverstone"],
      image: "assets/f8tributo-red.png",
    },
    Portofino: {
      year: 2021,
      type: "Convertible",
      shades: ["Nero Daytona", "Bianco Avus", "Grigio Alloy"],
      image: "assets/portofino-grey.png",
    },
    Roma: {
      year: 2022,
      type: "Coupe",
      shades: ["Rosso Portofino", "Blu Elettrico", "Grigio Scuro"],
      image: "assets/roma-grey.png",
    },
    SF90Stradale: {
      year: 2023,
      type: "Coupe",
      shades: ["Rosso Corsa", "Grigio Titanio", "Blu Tour de France"],
      image: "assets/stardale-red.png",
    },
  },
  Volkswagen: {
    Jetta: {
      year: 2022,
      type: "Sedan",
      shades: ["Pure White", "Platinum Gray", "Deep Black Pearl"],
      image: "assets/jetta-grey.png",
    },
    Passat: {
      year: 2021,
      type: "Sedan",
      shades: ["Kingfisher Blue", "Platinum Gray", "Deep Black Pearl"],
      image: "assets/passat-grey.png",
    },
    Tiguan: {
      year: 2023,
      type: "SUV",
      shades: ["Pure White", "Deep Black Pearl", "Kings Red"],
      image: "assets/tiguan-silver.png",
    },
    Atlas: {
      year: 2022,
      type: "SUV",
      shades: ["Oryx White", "Pure White", "Deep Black Pearl"],
      image: "assets/atlas-black.png",
    },
    Golf: {
      year: 2021,
      type: "Hatchback",
      shades: ["Pure White", "Platinum Gray", "Deep Black Pearl"],
      image: "assets/golf-white.png",
    },
  },
  Lexus: {
    ES: {
      year: 2022,
      type: "Sedan",
      shades: ["Eminent White Pearl", "Atomic Silver", "Matador Red Mica"],
      image: "assets/es-grey.png",
    },
    RX: {
      year: 2023,
      type: "SUV",
      shades: ["Nebula Gray Pearl", "Caviar", "Iridium"],
      image: "assets/rx-white.png",
    },
    NX: {
      year: 2021,
      type: "SUV",
      shades: ["Noble Brown", "Cadmium Orange", "White"],
      image: "assets/nx-silver.png",
    },
    LS: {
      year: 2023,
      type: "Sedan",
      shades: ["Manganese Luster", "Liquid Platinum", "Obsidian"],
      image: "assets/ls-silver.png",
    },
    GX: {
      year: 2022,
      type: "SUV",
      shades: ["Black Onyx", "Starfire Pearl", "Noble Brown"],
      image: "assets/gx-camel.png",
    },
  },
  Jaguar: {
    XE: {
      year: 2022,
      type: "Sedan",
      shades: ["Santorini Black", "Eiger Grey", "Portofino Blue"],
      image: "assets/xe-red.png",
    },
    XF: {
      year: 2021,
      type: "Sedan",
      shades: ["Caesium Blue", "Rosello Red", "Narvik Black"],
      image: "assets/xf-darkblue.png",
    },
    FPACE: {
      year: 2023,
      type: "SUV",
      shades: ["Eiger Grey", "Carpathian Grey", "Santos Red"],
      image: "assets/fpace-white.png",
    },
    EPACE: {
      year: 2022,
      type: "SUV",
      shades: ["Yulong White", "Portofino Blue", "Narvik Black"],
      image: "assets/epace-darkblue.png",
    },
    IPACE: {
      year: 2023,
      type: "SUV",
      shades: ["Caldera Red", "Portofino Blue", "Eiger Grey"],
      image: "assets/ipace-white.png",
    },
  },
  Porsche: {
    911: {
      year: 2023,
      type: "Coupe",
      shades: ["Guards Red", "Black", "White"],
      image: "assets/911-gold.png",
    },
    Cayenne: {
      year: 2022,
      type: "SUV",
      shades: ["Jet Black Metallic", "Dolomite Silver Metallic", "Crayon"],
      image: "assets/caeynne-white.png",
    },
    Macan: {
      year: 2022,
      type: "SUV",
      shades: ["Miami Blue", "White", "Black"],
      image: "assets/macan-lavender.png",
    },
    Panamera: {
      year: 2023,
      type: "Sedan",
      shades: ["Volcano Grey Metallic", "White", "Crayon"],
      image: "assets/panamera-brown.png",
    },
    Taycan: {
      year: 2023,
      type: "Sedan",
      shades: ["Taycan Blue", "White", "Dolomite Silver"],
      image: "assets/taycan-white.png",
    },
  },
  Tesla: {
    ModelS: {
      year: 2022,
      type: "Sedan",
      shades: [
        "Midnight Silver Metallic",
        "Deep Blue Metallic",
        "Pearl White Multi-Coat",
      ],
      image: "assets/models-darkblue.png",
    },
    Model3: {
      year: 2021,
      type: "Sedan",
      shades: ["Black", "White", "Blue"],
      image: "assets/model3-red.png",
    },
    ModelX: {
      year: 2023,
      type: "SUV",
      shades: ["White", "Black", "Silver"],
      image: "assets/modelx-white.png",
    },
    ModelY: {
      year: 2022,
      type: "SUV",
      shades: ["White", "Midnight Silver", "Blue"],
      image: "assets/modely-grey.png",
    },
    Roadster: {
      year: 2023,
      type: "Coupe",
      shades: ["Deep Blue", "Black", "Red"],
      image: "assets/roadster-red.png",
    },
  },
  Cadillac: {
    CT4: {
      year: 2022,
      type: "Sedan",
      shades: ["Black Raven", "Crystal White Tricoat", "Red Horizon Tintcoat"],
      image: "assets/ct4-white.png",
    },
    CT5: {
      year: 2023,
      type: "Sedan",
      shades: ["Dark Adriatic Blue", "Infrared Tintcoat", "Sandstone Metallic"],
      image: "assets/ct5-black.png",
    },
    XT4: {
      year: 2021,
      type: "SUV",
      shades: [
        "Manhattan Noir Metallic",
        "Crystal White Tricoat",
        "Infrared Tintcoat",
      ],
      image: "assets/xt4-teal.png",
    },
    XT5: {
      year: 2022,
      type: "SUV",
      shades: ["Satin Steel Metallic", "Black Raven", "Crystal White Tricoat"],
      image: "assets/xt5-red.png",
    },
    Escalade: {
      year: 2023,
      type: "SUV",
      shades: ["Black Raven", "Crystal White Tricoat", "Midnight Sky Metallic"],
      image: "assets/escalade-silver.png",
    },
  },
};

var main = document.querySelector(".main");
var brand = document.getElementById("brand");
var model = document.getElementById("model");
var btn = document.getElementById("btnn");
var btn1 = document.getElementById("btnn1");
var banner = document.querySelector(".banner");
var selectedCar = document.getElementById("selectedCar");
brand.innerHTML += ` <option value="">select brand</option>`;
model.innerHTML += ` <option value="">select model</option>`;

for (var key in carBrands) {
  brand.innerHTML += ` <option value="${key}">${key}</option>`;
  for (var key1 in carBrands[key]) {
    var obj = carBrands[key][key1];
    main.innerHTML += `<div class="card m-4 mt-5 " style="width: 19rem">
        <img src="${obj.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${key1}</h5>
          <p class="card-text" style= "color:#f5b754">${obj.year}</p>
          <p class="card-text">${obj.type}</p>
          <a href="#" class="btn">Buy</a>
        </div>
      </div>`;
  }
}
function selectModel() {
  model.innerHTML = ""
  model.innerHTML += ` <option value="">select model</option>`;

  for (var key in carBrands[brand.value]) {
    model.innerHTML += ` <option value="${key}">${key}</option>`;
  }
}
function searchCar(){
  var userval = carBrands[brand.value][model.value]
  main.innerHTML = ""
  selectedCar.classList.remove("d-none");
  main.classList.add("d-none");
  banner.classList.add("d-none");
  selectedCar.innerHTML += `<div class="card m-4 mt-5 " style="width: 19rem">
  <img src="${userval.image}" class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 class="card-title">${model.value}</h5>
  <p class="card-text" style= "color:#f5b754">${userval.year}</p>
  <p class="card-text">${userval.type}</p>
  <a href="#" class="btn">Buy</a>
  </div>
  </div>`;
}
function clearSearch(){
  selectedCar.classList.add("d-none")
  main.classList.remove("d-none")
  banner.classList.remove("d-none")
  selectedCar.innerHTML = ""; 
  main.innerHTML = "";
  for (var key in carBrands) {
    for (var key1 in carBrands[key]) {
      var obj = carBrands[key][key1];
      main.innerHTML += `<div class="card m-4 mt-5 " style="width: 19rem">
          <img src="${obj.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${key1}</h5>
            <p class="card-text" style= "color:#f5b754">${obj.year}</p>
            <p class="card-text">${obj.type}</p>
            <a href="#" class="btn">Buy</a>
          </div>
        </div>`;
    }
}
}
brand.addEventListener("change", selectModel);
btn.addEventListener("click", searchCar);
btn1.addEventListener("click", clearSearch);


