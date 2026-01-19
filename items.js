const items = [
  {
    name: "Mesa Comedor Escritorio",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039490/ComedorEscritorio2_sinno1.jpg"
        ],
    description: "120 x 75 x 72",
    condition: "Cafe, Usada, 5 años",
    claim: "Todavia Nadie",
    bid: "$500",
    status: "Disponible"
  },
  {
    name: "Apple Watch",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039490/AppleWatch1_bir3na.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/AppleWatch2_raitia.jpg"
    ],
    description: "Apple watch SE Gen2",
    condition: "Nuevo en caja",
    claim: "Aun nadie",
    bid: "$2000",
    status: "Disponible"
  },
  {
    name: "Arbol Gatos",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039490/ArbolGatos_mk7n7x.jpg"
    ],
    description: "Grande 62 x 50 x 200",
    condition: "MUY Usado",
    claim: "Adrian",
    bid: "$200 no fijo ofrezcale!",
    status: "vendido"
  },
  {
    name: "Burós de cama",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039488/Buros1_gm0pcv.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/Buros2_l2j4qa.jpg"
    ],
    description: "2 piezas, 50 x 40 x 50",
    condition: "Usado",
    claim: "Adrian",
    bid: "$600 ambos",
    status: "vendido"
  },
  {
    name: "Calentador de aceite",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/Calentador_ijbba4.jpg"
    ],
    description: "Electrico para calentar habitaciones.",
    condition: "Funciona perfecto.",
    claim: "Aun Nadie",
    bid: "$500",
    status: "Disponible"
  },
  {
    name: "Eliptica",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039484/Eliptica1_y8vhwz.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039489/Eliptica2_rcw7j2.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039484/Eliptica3_lnbrf9.jpg"
    ],
    description: "Eliptica para ejercicio",
    condition: "Usada funciona bien",
    claim: "Don Leandro",
    bid: "$2000",
    status: "vendido"
  },
  {
    name: "Espejo",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/Espejo_gxi3gn.jpg"
    ],
    description: "Espejo de cuerpo completo 38 x 0,5 x 142",
    condition: "Como nuevo",
    claim: "Adrian",
    bid: "$100",
    status: "vendido"
  },
  {
    name: "Racks de almacenaje ",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039488/EstanteroAlmacen_xj9gap.jpg"
    ],
    description: "Muebles para almacenar, son 2. Cada uno 90 x 42 x 188",
    condition: "Como nuevo",
    claim: "Juan",
    bid: "$200 cada uno",
    status: "vendido"
  },
  {
    name: "Estante",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039484/EstanteroGris_t9icef.jpg"
    ],
    description: "Estantero cuadrado gris obscuro 55 x 40 x 180",
    condition: "Como nuevo",
    claim: "Juan",
    bid: "$250",
    status: "vendido"
  },
  {
    name: "Estante triangular",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/LibreroTriangular_bihgcw.jpg"
    ],
    description: "Triangular a base de tablones",
    condition: "Como nuevo",
    claim: "Juan",
    bid: "$250",
    status: "vendido"
  },
  {
    name: "Mata Insectos",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/MataInsectos_cqd3nw.jpg"
    ],
    description: "Lampara mata insectos electrico para colgar",
    condition: "Funciona muy bien",
    claim: "Juan",
    bid: "$250",
    status: "vendido"
  },
  {
    name: "Mesita de cafe plegable",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MesitaPlegable1_ujby7m.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MesitaPlegable2_uwuhwm.jpg"
    ],
    description: "Mesita de aglomerado plegable multiusos. 50 x 37 x 66",
    condition: "Usada como nueva.",
    claim: "Adrian",
    bid: "$150",
    status: "vendido"
  },
  {
    name: "Mesa Centro de Sala",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039488/MesaSala1_mclszs.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MesaSala2_gbbydr.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MesaSala3_yw7vew.jpg"
    ],
    description: "Mesa de madera parota, no es aglomerado. 80 x 60 x 45",
    condition: "Usada, como nueva. Es muy resistente.",
    claim: "Aun Nadie",
    bid: "$2000",
    status: "Disponible"
  },
  {
    name: "Mueble de television",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/MuebleTV1_izoek5.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MuebleTV2_s10oht.jpg"
    ],
    description: "Mueble para television con cajon y puertas. No incluye contenido. 160 x 40 x 62",
    condition: "Usado, como nuevo",
    claim: "Juan",
    bid: "$850",
    status: "vendido"
  },
  {
    name: "Silla escritorio blanca",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/SillaEscrBlanca1_gfqxjw.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/SillaEscrBlanca2_mximoi.jpg"
    ],
    description: "Silla para escritorio blanca con pistón.",
    condition: "Usada",
    claim: "Adrian",
    bid: "$400",
    status: "vendido"
  },
  {
    name: "Sofa cama",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/SillonMora1_wsktan.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/SillonMora2_ibodcv.jpg"
    ],
    description: "Sofa cama violeta. Se jala una segunda cama de abajo. 195 x 100 x 65",
    condition: "Usado y algo despintado",
    claim: "Aun Nadie",
    bid: "$1000",
    status: "Disponible"
  },
  {
    name: "Televisión 32 pulgadas",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/TeleSams32_sxltjt.jpg"
    ],
    description: "Televisión samsung led 32 pulgadas con control remoto. LN32A450",
    condition: "Usada",
    claim: "Juan",
    bid: "$500",
    status: "vendido"
  },
  {
    name: "Zapatero Negro",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763608/ZapateroNegro_jaytt9.jpg"
    ],
    description: "Zapatero plegable",
    condition: "Usado como nuevo",
    claim: "Juan",
    bid: "$100",
    status: "vendido"
  },
  {
    name: "Zapatero Gris",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763601/ZapateroGris_obzjys.jpg"
    ],
    description: "Zapatero de tela gris 2 disponibles",
    condition: "Usado",
    claim: "Juan",
    bid: "$100",
    status: "vendido"
  },
  {
    name: "Pantalla 65 pulgadas",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674456/Tele_Grande_m3dz0x.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674460/Tele_Grande_3_rtd6by.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674461/Tele_Grande_2_ck7lml.jpg"
    ],
    description: "Samsung 65 pulgadas UN65AU8200fxzxa",
    condition: "Casi Nueva",
    claim: "Aun Nadie",
    bid: "$7000",
    status: "Disponible"
  },
  {
    name: "Kit de sonido",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763613/Sonido1_fu6tok.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763618/Sonido2_xzyp1u.jpg"
    ],
    description: "Amplificador Pyle con bluetooth, radio, mp3 y con bocinas hasta 100 wats",
    condition: "Usado",
    claim: "Juan",
    bid: "$300",
    status: "vendido"
  },
  {
    name: "Sillon reclinable",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674466/Sillon_reclinable_xgilma.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674467/Sillon_reclinable2_ehoytk.jpg"
    ],
    description: "Sillon reclinable gris",
    condition: "Usado y algo deshilado",
    claim: "Aun Nadie",
    bid: "$600",
    status: "Disponible"
  },
  {
    name: "Sillas de comedor",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674455/Sillas_2_lher7n.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674455/Sillas_jwip5m.jpg"
    ],
    description: "4 Sillas para comedor de madera con patas de metal",
    condition: "Usadas",
    claim: "Juan",
    bid: "$500",
    status: "vendido"
  },
  {
    name: "Silla de escritorio negra",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763619/SillaEscritorioNegra1_iw5upi.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763613/SillaEscritorioNegra2_ucwavq.jpg"
    ],
    description: "Silla de escritorio reclinable, brazos moviles, descanso de nuca",
    condition: "Usada",
    claim: "Juan",
    bid: "$700",
    status: "vendido"
  },
  {
    name: "Silla plegable azul",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674464/Silla_azul_e6twt3.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674464/Silla_azul_2_bsafcg.jpg"
    ],
    description: "Silla plegable de metal acolchonasa azul",
    condition: "Usada",
    claim: "Aun nadie",
    bid: "$100",
    status: "Disponible"
  },
  {
    name: "Rizador de cabello",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763605/RisadorPelo_g152gu.jpg"
    ],
    description: "Rizador electrico 5 en 1 multifunción",
    condition: "Usado",
    claim: "Rodney",
    bid: "$200",
    status: "vendido"
  },
  {
    name: "Refrigerador Samsung",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763598/Refri1_tizuma.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763598/Refri2_xwm6yz.jpg"
    ],
    description: "Refrigerador Samsung plateado 170x60x60",
    condition: "Usado",
    claim: "Juan",
    bid: "$1000",
    status: "vendido"
  },
  {
    name: "MiniRack",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763597/Rackcito1_x46eoh.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763605/Rackcito2_x8lwon.jpg"
    ],
    description: "Mini rack de plastico desarmable con ruedas 52x17x71",
    condition: "Usado",
    claim: "Juan",
    bid: "$100",
    status: "vendido"
  },
  {
    name: "Perchero de madera",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674461/Perchero_xb9afa.jpg"
    ],
    description: "Perchero de madera con 4 perchas dobles. 2 disponibles",
    condition: "Usados",
    claim: "Juan",
    bid: "$100",
    status: "vendido"
  },
  {
    name: "Monitor de computadora",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763613/Monitor1_hpkrux.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763597/Monitor2_ndxi6h.jpg"
    ],
    description: "Monitor para computadora hdmi de 24 pulgadas marca Sansui",
    condition: "Usado",
    claim: "Juan",
    bid: "$750",
    status: "vendido"
  },
  {
    name: "Microondas",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674461/Microondas_ikadh2.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674465/Microondas3_t30ckc.jpg"
    ],
    description: "Horno de microondas Daewoo KOR669M de 20 litros",
    condition: "Usado",
    claim: "Adrian",
    bid: "$500",
    status: "vendido"
  },
  {
    name: "Mesita plegable",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763596/MesitaMorada_sq7yrl.jpg"
    ],
    description: "Mesita plegable pequeña",
    condition: "Usada",
    claim: "Adrian",
    bid: "$100",
    status: "vendido"
  },
  {
    name: "Librero",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763596/Librero1_zjlxq9.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763613/Librero2_wnchec.jpg"
    ],
    description: "Librero blanco con iluminación led y control remoto 30x90x178",
    condition: "Usado",
    claim: "Rodney",
    bid: "$400",
    status: "vendido"
  },
  {
    name: "Lavadora",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674466/Lavadora2_yv4eel.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674462/Lavadora_d9h4et.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674456/Lavadora3_tsbpph.jpg"
    ],
    description: "Lavadora Samsung 12 kilos Diamond Drum",
    condition: "Usada",
    claim: "Adrian",
    bid: "$500",
    status: "vendido"
  },
  {
    name: "Cajoneras",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674455/Gabinete_2_jrtptz.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674455/Gabinete_wonzjv.jpg"
    ],
    description: "Cajoneras blancas ligeras de metal/alambre 30x56x34. 5 disponibles",
    condition: "Usadas",
    claim: "Juan",
    bid: "$100",
    status: "vendido"
  },
  {
    name: "Escritorio gamer",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763593/Escritorio1_pg221i.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763605/Escritorio2_zfavkf.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763613/Escritorio4_t6neui.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763604/Escritorio3_tmtels.jpg"
    ],
    description: "Escritorio gamer negro con soportes para vaso y audifonos, regletas multicontactos y jaula de cables. 74x77x114",
    condition: "Usado",
    claim: "Juan",
    bid: "$1000",
    status: "vendido"
  },
  {
    name: "Comedor expandible",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763592/ComedorExt1_uupwuw.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763593/ComedorExt2_sutcxx.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763608/ComedorExt3_plslqj.jpg"
    ],
    description: "Comedor expandible de madera y patas de acero. 80x76x154-210",
    condition: "Usado",
    claim: "Juan",
    bid: "$2500",
    status: "vendido"
  },
  {
    name: "Cama king",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763608/CamaKing1_nqbrwb.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763614/CamaKing2_px2rdp.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763592/CamaKing3_qfeur4.jpg"
    ],
    description: "Cama Spring air tamaño king con box y patas",
    condition: "Usada",
    claim: "Juan",
    bid: "$2000",
    status: "vendido"
  },
  {
    name: "Cama matrimonial",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674455/Cama_matrimonial_o9nyts.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674455/Cama_matrimonial_2_mophgw.jpg"
    ],
    description: "Cama colchon matrimonial con base de metal y somier de laminas de plastico.",
    condition: "Usada",
    claim: "Rodney",
    bid: "$1000",
    status: "vendido"
  },
  {
    name: "Cafetera automatica",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674460/Cafetera2_s1rms1.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674465/Cafetera_dvaysi.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768674460/Cafetera3_vc8k8a.jpg"
    ],
    description: "Cafetera con molino de granos para espresso y capuchinos DeLonghi Magnifica S",
    condition: "Usada, tiene una pequeña fuga, incluye empaques para repararla",
    claim: "Aun Nadie",
    bid: "$1500",
    status: "Disponible"
  },
  {
    name: "Base para laptop",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763617/BaseLap1_yoesu3.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763605/BaseLap2_c3x1hf.jpg"
    ],
    description: "Base para laptop de aluminio, plegable y altura ajustable",
    condition: "Usada",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Bascula",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763590/Bascula_rnp988.jpg"
    ],
    description: "Bascula electronica mide grasa, musculo y agua marca exacta",
    condition: "Usada",
    claim: "Juan",
    bid: "$400",
    status: "vendido"
  },
  {
    name: "Aspiradora portatil",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763613/AspiraPortatil2_dlb73a.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763617/AspiraPortatil1_rdjfqw.jpg"
    ],
    description: "Aspiradora portatil recargable por USB C con aditamentos marca Wyze",
    condition: "Usada",
    claim: "Adrian",
    bid: "$500",
    status: "vendido"
  },
  {
    name: "Aspiradora",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763591/Aspiradora_x4iowz.jpg"
    ],
    description: "Aspiradora alta succion y capacidad marca Stihl",
    condition: "Usada",
    claim: "Aun Nadie",
    bid: "$1000",
    status: "Disponible"
  },
  {
    name: "Almohadas",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768763608/Almohadas_ytmvax.jpg"
    ],
    description: "Almohadas spring air tacto algodon",
    condition: "Nuevas",
    claim: "Adrian",
    bid: "$250",
    status: "vendido"
  },
  {
    name: "Licuadora ninja",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768782761/Ninja_ogfsbs.jpg"
    ],
    description: "Licuadora de smoothies nutri Ninja con 1 vaso",
    condition: "Usado",
    claim: "Juan",
    bid: "$500",
    status: "vendido"
  },
  {
    name: "Freidora de aire",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768782761/Freidora_z94q2x.jpg"
    ],
    description: "Freidora de aire Philips",
    condition: "Usado, le falta mango de bandeja",
    claim: "Aun Nadie",
    bid: "$300",
    status: "Disponible"
  },
  {
    name: "Olla multifunción",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768782760/InstaPot_loggua.jpg"
    ],
    description: "Olla expres y vaporera InstaPot Duo 7 en 1",
    condition: "Usada",
    claim: "Aun Nadie",
    bid: "$500",
    status: "Disponible"
  },
  {
    name: "Tostadora",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768782760/Tostadora_qp6ucy.jpg"
    ],
    description: "Tostadora y descongeladora de pan Krups",
    condition: "Usada",
    claim: "Juan",
    bid: "$200",
    status: "vendido"
  },
  {
    name: "Sofa cama L",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768784957/SillonL1_ttnrbu.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768784952/SillonL2_wsotvb.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768784951/SillonL3_osvqvd.jpg"
    ],
    description: "Sofa cama en forma de L con espacio para guardar. Medidas 226x75 parte larga 157 y corta 90 ",
    condition: "Usado con algunos hilos",
    claim: "Juan",
    bid: "$3000",
    status: "vendido"
  },
  {
    name: "Impresora Laser",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768785419/Impresora_iph9ut.jpg"
    ],
    description: "Impresora HP LaserJet Pro M15w con Wifi",
    condition: "Usada, toner casi vacio",
    claim: "Aun Nadie",
    bid: "$500",
    status: "Disponible"
  }
  /* Copiar a partir de la coma de abajo hasta antes del asterisco y pegar aqui arriba
  ,
  {
    name: "Nam",
    images: [
      "URL1",
      "URL2"
    ],
    description: "Desc",
    condition: "Cond",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  }
    */
];

const catalog = document.getElementById("catalog");

items.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  const gallery = item.images
    .map(img => `<img src="${img}" alt="${item.name}">`)
    .join("");

  card.innerHTML = `
    <img class="main-image" src="${item.images[0]}" alt="${item.name}">
    <div class="card-title">${item.name}</div>
    <div class="status ${item.status}">
        ${item.status.toUpperCase()}
      </div>

    <div class="overlay">
      <div class="image-gallery">
        ${gallery}
      </div>

      <p><strong>Descripcion:</strong> ${item.description}</p>
      <p><strong>Condicion:</strong> ${item.condition}</p>
      <p><strong>Quien ofertó ultimo:</strong> ${item.claim}</p>
      <p><strong>Monto:</strong> ${item.bid}</p>

      <div class="status ${item.status}">
        Status: ${item.status.toUpperCase()}
      </div>
    </div>
  `;

  catalog.appendChild(card);
});


// ===== LIGHTBOX FUNCTIONALITY =====
document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && e.target.closest(".card")) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = e.target.src;
    lightbox.classList.remove("hidden");
  }

  if (
    e.target.classList.contains("close") ||
    e.target.id === "lightbox"
  ) {
    document.getElementById("lightbox").classList.add("hidden");
  }
});
