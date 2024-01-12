const menuItems = [
  {
    categories: [
      {
        name: "Mittagstisch",
        items: [
          {
            id: "M1",
            name: "M1. Gemüse Tofu",
            description:
              "Gebratener Tofu mit verschiedenem Gemüse in Austern-Soße",
            price: 7.9,
          },
          {
            id: "M2",
            name: "M2. Hühnerfleisch Erdnuss",
            description: "Gebratenes Hühnerfleisch mit Gemüse in Erdnusssoße",
            price: 8.2,
          },
          {
            id: "M3",
            name: "M3. Rindfleisch Red-Curry",
            description:
              "Gebratenes Rindfleisch (oder Hühnerfleisch) mit rotem Curry, Aubergine, Zucchini, Paprika, Bambus, Möhren, Zitronenblätter, Basilikum und Kokosmilch",
            price: 8.5,
          },
          {
            id: "M4",
            name: "M4. Ente Curry-Paste",
            description: "Knusprige Ente mit Currypaste und Gemüse",
            price: 8.9,
          },
          {
            id: "M5",
            name: "M5. Garnele Prik Pau",
            description:
              "Gebratene Garnelen mit Paprika, Zucchini, Champignons, Bambus, Basilikum, Möhren in Chilipaste",
            price: 8.9,
          },
          {
            id: "M6",
            name: "M6. Gebratener Reis mit Ente",
            description:
              "Knusprik gebackene Ente auf gebratenen Reis und Gemüse",
            price: 8.9,
          },
          {
            id: "M7",
            name: "M7. Nudeln mit Vega-Ente",
            description:
              "Gebratene Nudeln mit Vega-Entenfleisch (aus Sojabohnen) und Gemüse",
            price: 8.9,
          },
          {
            id: "M8",
            name: "M8. Tofu süß-sauer-scharf",
            description:
              "Gebratener Tofu mit Gemüse in scharfer süß-sauer Soße",
            price: 7.9,
          },
          {
            id: "M9",
            name: "M9. Hühnerfleisch mit Glasnudeln",
            description: "Gebratene Glasnudeln mit Hühnerfleisch und Gemüse",
            price: 8.2,
          },
          {
            id: "M10",
            name: "M10. Vega-Garnelen Panang",
            description:
              "Gebratene Vega-Garnelen (aus Sojabohnen) mit Curry, Bohnen, Zitronenblätter, Peperoni in Kokosmilch",
            price: 8.9,
          },
        ],
      },

      {
        name: "Suppen",
        items: [
          {
            id: "1",
            name: "1. Gemüse Suppe",
            description: "",
            price: 3.9,
          },
          {
            id: "2",
            name: "2. Wantan Suppe",
            description: "mit Pak-Choi, Lauchzwiebeln und Koriander",
            price: 4.5,
          },
          {
            id: "3a",
            name: "3a. Tom Kha Gai Suppe - Tofu",
            description:
              "mit Zitronengras, Galgant, Zitronenblätter, Champignons, Tomaten in Kokosmilch und Koriander und Tofu",
            price: 4.5,
          },
          {
            id: "3b",
            name: "3b. Tom Kha Gai Suppe - Hühnerfleisch",
            description:
              "mit Zitronengras, Galgant, Zitronenblätter, Champignons, Tomaten in Kokosmilch und Koriander und Hühnerfleisch",
            price: 4.9,
          },
          {
            id: "3c",
            name: "3c. Tom Kha Gai Suppe - Garnelen",
            description:
              "mit Zitronengras, Galgant, Zitronenblätter, Champignons, Tomaten in Kokosmilch und Koriander und Garnelen",
            price: 5.9,
          },
          {
            id: "4a",
            name: "4a. Tom Yum Suppe",
            description:
              "mit Zitronengras, Galgant, Zitronenblätter, Champignons, Tomaten und Koriander und Hühnerfleisch",
            price: 4.9,
          },
          {
            id: "4b",
            name: "4b. Tom Yum Suppe",
            description:
              "mit Zitronengras, Galgant, Zitronenblätter, Champignons, Tomaten und Koriander und Meeresfrüchten",
            price: 5.9,
          },
        ],
      },
      {
        name: "Salate",
        items: [
          {
            id: "5",
            name: "5. Som Tam Thai",
            description:
              "Papaya-Salat mit getrockneten Garnelen, Kirschtomaten, Prinzessbohnen, Erdnüssen und Peperoni",
            price: 6.9,
          },
          {
            id: "6",
            name: "6. Som Tam Thai Tofu",
            description:
              "Papaya-Salat mit Tofu, Kirschtomaten, Prinzessbohnen, Erdnüssen und Peperoni",
            price: 6.5,
          },
          {
            id: "7",
            name: "7. Som Tam Thai Tha Le",
            description:
              "Papaya-Salat mit Meeresfrüchten, Kirschtomaten, Prinzessbohnen, Erdnüssen und Peperoni",
            price: 7.5,
          },
          {
            id: "8",
            name: "8. Yum Woon Sen Tale",
            description:
              "Glasnudelsalat mit Schweinehackfleisch, Sellerie, roten Zwiebeln, rotem Paprika, Möhren, Erdnuss und Koriander",
            price: 6.9,
          },
          {
            id: "9",
            name: "9. Yum Ma-maung Tha Le",
            description:
              "Thai-Mangosalat mit Meeresfrüchten, Minitomaten, Sellerie, roten Zwiebeln, Erdnuss und Koriander",
            price: 7.5,
          },
        ],
      },
      {
        name: "Vorspeisen und Fingerfood",
        items: [
          {
            id: "10",
            name: "10. Gebackene Wan Tan",
            description: "Hühnerhackfleisch in Wantan-Teigmantel",
            price: 4.9,
          },
          {
            id: "11",
            name: "11. Gebackene Spareribs",
            description: "",
            price: 5.5,
          },
          {
            id: "12",
            name: "12. Sojabohnen-Frühlingsrolle",
            description: "gefüllt mit Gemüse und Glasnudeln",
            price: 5.5,
          },
          {
            id: "13",
            name: "13. Gebackenes Hühnerfleisch",
            description: "umhüllt mit Pandan-Blättern",
            price: 5.9,
          },
          {
            id: "14",
            name: "14. Gai Satay",
            description: "Hühnerspieße mit Erdnusssoße",
            price: 5.9,
          },
          {
            id: "15",
            name: "15. Moo Satay",
            description: "Schweinespieße mit Erdnusssoße",
            price: 5.9,
          },
          {
            id: "16",
            name: "16. Larb Gai",
            description:
              "Hühnerhackfleisch-Salat mit thailändischen Kräutern und frischem Salat",
            price: 6.5,
          },
          {
            id: "17",
            name: "17. Larb Moo",
            description:
              "Schweinehackfleisch-Salat mit thailändischen Kräutern und frischem Salat",
            price: 6.5,
          },
          {
            id: "18",
            name: "18. Nam Tok Moo",
            description:
              "Gegrilltes Schweinefleisch mit thailändischen Kräutern und frischem Salat",
            price: 6.9,
          },
          {
            id: "19",
            name: "19. Nam Tok Nua",
            description:
              "Gegrilltes Rindfleisch mit thailändischen Kräutern und frischem Salat",
            price: 7.9,
          },
        ],
      },

      {
        name: "Hauptspeisen - Hühnerfleisch",
        items: [
          {
            id: "20",
            name: "20. Gaeng Ped Gai",
            description:
              "Gebratenes Hühnerfleisch mit Paprika, Zucchini, Aubergine, Bambus, Bohnen, Basilikum, Zitronenblätter in rotem Curry und Kokosmilch",
            price: 10.5,
          },
          {
            id: "21",
            name: "21. Gaeng Kiew Wan Gai",
            description:
              "Gebratenes Hühnerfleisch mit Paprika, Zucchini, Aubergine, Bambus, Bohnen, Basilikum, Zitronenblätter in grünem Curry und Kokosmilch",
            price: 10.5,
          },
          {
            id: "22",
            name: "22. Gai Pad Prik Pao",
            description:
              "Gebratenes Hühnerfleisch mit Paprika, Zucchini, Champignons, Bambus, Basilikum, Möhren in Chili-Paste",
            price: 9.9,
          },
          {
            id: "23",
            name: "23. Gai Pad Krapow",
            description:
              "Gebratenes Hühnerfleisch mit Paprika, Bambus, Bohnen, Möhren, frischem Pfeffer und Thai-Basilikum",
            price: 9.9,
          },
          {
            id: "24",
            name: "24. Gai Sam Rod",
            description:
              "Knusprig gebackenes Hühnerfleisch mit Sojasprossen, Ananas, Zitronenblätter, Basilikum in Tamarindensoße",
            price: 10.9,
          },
          {
            id: "25",
            name: "25. Gai Pad Prik Pao",
            description:
              "Gebratenes Hühnerfleisch mit verschiedenem Gemüse in scharfer süß-sauer Soße",
            price: 10.9,
          },
        ],
      },
      {
        name: "Hauptspeisen - Rindfleisch",
        items: [
          {
            id: "26",
            name: "26. Panang Nua",
            description:
              "Gebratenes Rindfleisch mit rotem Curry, Bohnen, Zitronenblätter, Peperoni und Kokosmilch",
            price: 11.9,
          },
          {
            id: "27",
            name: "27. Gaeng Kiew Wan Nua",
            description:
              "Gebratenes Rindfleisch mit Paprika, Zucchini, Aubergine, Bambus, Bohnen, Basilikum, Zitronenblätter in grünem Curry und Kokosmilch",
            price: 11.9,
          },
          {
            id: "28",
            name: "28. Nua Pad Gratiam Prik Thai",
            description:
              "Gebratenes Rindfleisch mit Bohnen, Knoblauch in Pfeffer-Sauce",
            price: 11.5,
          },
          {
            id: "29",
            name: "29. Nua Pad Krapow",
            description:
              "Gebratenes Rindfleisch mit Paprika, Bambus, Bohnen, Möhren, frischem Pfeffer und Thai-Basilikum",
            price: 11.9,
          },
          {
            id: "30",
            name: "30. Pad Ka Praow Nua",
            description:
              "Gebratenes Rindfleisch mit Thai-Basilikum, Peperoni und frischem Salat",
            price: 11.5,
          },
        ],
      },
      {
        name: "Hauptspeisen - Entenfleisch",
        items: [
          {
            id: "31",
            name: "31. Gaeng Kiew Wan Ped",
            description:
              "Knusprige Ente mit grünem Curry, Paprika, Zucchini, Aubergine, Bambus, Bohnen, Zitronenblätter, Basilikum und Kokosmilch",
            price: 12.9,
          },
          {
            id: "32",
            name: "32. Ped Sam Rod",
            description:
              "Knusprige Ente mit Sojasprossen, Ananas, Zitronenblätter, Basilikum in Tamarindensoße",
            price: 12.9,
          },
          {
            id: "33",
            name: "33. Ped Pad Prik Pao",
            description:
              "Knusprige Ente mit Paprika, Zucchini, Bambus, Basilikum und Möhren in Chili-Paste",
            price: 12.5,
          },
          {
            id: "34",
            name: "34. Ped Erdnuss",
            description:
              "Knusprige Ente mit verschiedenem Gemüse in Erdnusssoße",
            price: 12.5,
          },
          {
            id: "35",
            name: "35. Ped Pad Pong Kari",
            description: "Gebratene Ente mit roter Currypaste, Bohnen und Kokosmilch",
            price: 12.9,
          },
        ],
      },
      {
        name: "Hauptspeisen - Meeresfrüchte",
        items: [
          {
            id: "36",
            name: "36. Gung Sam Rod",
            description:
              "Gebratene Riesengarnelen mit Sojasprossen, Ananas, Zitronenblätter und Basilikum",
            price: 14.9,
          },
          {
            id: "37",
            name: "37. Gaeng Ped Gung",
            description:
              "Gebratene Riesengarnelen mit rotem Curry, Paprika, Zucchini, Aubergine, bambus, Bohnen, Zitronenblätter, Basilikum und Kokosmilch",
            price: 14.9,
          },
          {
            id: "38",
            name: "38. Gung Pad Krapow",
            description:
              "Gebratene Riesengarnelen mit Paprika, Bohnen, Bambus, Möhren, frischem Pfeffer und Thai-Basilikum",
            price: 14.5,
          },
          {
            id: "39",
            name: "39. Pla Pad Prik Pao",
            description:
              "Gebackenes Fischfilet mit Paprika, Zucchini, Champignons, Bambus, Basilikum, Möhren in Chili-Pasta",
            price: 13.5,
          },
          {
            id: "40",
            name: "40. Gaeng Kiew Wan Pla",
            description: "Gebackenes Fischfilet mit grünem Curry, Paprika, Zucchini, Aubergine, Bambus, Bohnen, Basilikum, Zitronenblätter und Kokosmilch",
            price: 13.9,
          },
          {
            id: "41",
            name: "41. Pla Sam Rod",
            description: "Gebackenes Fischfilet mit Sojasprossen, Ananas, Zitronenblätter, Basilikum in Tamarindensoße",
            price: 13.9,
          },
          {
            id: "42",
            name: "42. Pla-Muk Pad Pik Pao",
            description: "Gebratene Baby-Tintenfische in scharfer süß-saurer Soße und frischem Salat",
            price: 13.5,
          },
        ],
      },
      {
        name: "Reis & Nudel Gerichte",
        items: [
          {
            id: "43",
            name: "43. Khao Pad Gung",
            description:
              "Gebratener Reis mit Garnelen und Gemüse",
            price: 11.9,
          },
          {
            id: "44",
            name: "44. Khao Pad Sapparod",
            description:
              "Gebratener Reis mit Garnelen, getrockneten Schweinefleisch, Ananas, Möhren, Lauchzwiebeln in frischem Ananas",
            price: 13.9,
          },
          {
            id: "45",
            name: "45. Khao Pad Nue Pu",
            description:
              "Gebratener Reis mit Krabbenfleisch, Möhren, Lauchzwiebeln, Thai-Basilikum und frischem Salat",
            price: 13.5,
          },
          {
            id: "46",
            name: "46 Pad Thai",
            description:
              "Gebratene Reisbandnudeln mit Hühnerfleisch, Tofu, Garnelen, Gemüse in Tamarindensoße und Erdnüssen",
            price: 13.5,
          },
          {
            id: "47a",
            name: "47a. 'Mama' Nudelsuppe",
            description: "mit Gemüse und Meeresfrüchten",
            price: 12.9,
          },
          {
            id: "47b",
            name: "47b. 'Mama' Nudelsuppe",
            description: "mit Gemüse und Hühnerfleisch",
            price: 10.5,
          },
          {
            id: "48",
            name: "48. Bami Pad Gai",
            description: "Gebratene Nudeln mit Hühnerfleisch und Gemüse",
            price: 10.5,
          },
          {
            id: "49",
            name: "49. Senhmi Pad Ped",
            description: "Knusprig gebackene Ente auf gebratenen Glasnudeln und Gemüse",
            price: 12.5,
          },
        ],
      },
      {
        name: "Vegetarische Gerichte",
        items: [
          {
            id: "50",
            name: "50. Grünes Curry Tofu",
            description:
              "Gebratener Tofu mit grünem Curry, Paprika, Zucchini, Aubergine, Bambus, Bohnen, Zitronenblätter, Basilikum und Kokosmilch",
            price: 9.9,
          },
          {
            id: "51",
            name: "51. Tofu Curry-Mango",
            description:
              "Gebratener Tofu mit Paprika, Zucchini, Möhren, Bohnen in Mango-Curry Soße",
            price: 9.9,
          },
          {
            id: "52",
            name: "52. Tofu-Knoten Erdnuss",
            description:
              "Gebratener Tofu mit verschiedenem Gemüse in Erdnusssoße",
            price: 10.9,
          },
          {
            id: "53",
            name: "53. Garnelen Vega Prik Pau",
            description:
              "Gebratene Vega-Garnelen (aus Sojabohnen) mit Paprika, Zucchini, Champignons, Bambus, Basilikum, Möhren in Chilipaste",
            price: 10.9,
          },
          {
            id: "54",
            name: "54. Garnelen Vega Paneng",
            description: "Gebratene Vega-Garnelen (aus Sojabohnen) mit rotem Curry, Bohnen, Zitronenblätter, Peperoni, Erdnuss in Kokosmilch",
            price: 10.9,
          },
          {
            id: "55",
            name: "55. Hähnchen Vega Pal Krapow",
            description: "Gebackenes Vega-Hähnchen (aus Sojabohnen) mit Paprika, Bohnen, Bambus, Möhren, frischem Pfeffer und Thai-Basilikum",
            price: 10.9,
          },
          {
            id: "56",
            name: "56. Chu-Chi Ente Vega",
            description: "Gebratenes Vega-Entenfleisch (aus Sojabohnen) mit rotem Curry, Zucchini, Paprika, Bambus, Bohnen, Möhren und Kokosmilch",
            price: 11.5,
          },
          {
            id: "57",
            name: "57. Entenfleisch Vega Pad Prik Pao",
            description: "Gebratenes Vega-Entenfleisch mit Gemüse in scharfer süß-saurer Soße",
            price: 11.9,
          },
          {
            id: "58",
            name: "58. Tofu-Knoten Gemüse",
            description: "Gebratener Tofu-Knoten mit Glasnudeln und Gemüse in Austern-Soße",
            price: 9.9,
          },
          {
            id: "59",
            name: "59. Grill Schweinefleisch Vega",
            description: "Gebratenes Vega-Grill-Schweinefleisch (aus Sojabohnen) mit Gemüse in Austern-Soße",
            price: 9.9,
          },
        ],
      },
    ],
  },
];

export const handler = async (event, context) => {
  //GET METHOD
  if (event.httpMethod === "GET") {
    try {
      // Return the menuItems as the response
      return {
        statusCode: 200,
        body: JSON.stringify(menuItems),
      };
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to process GET request" }),
      };
    }
  }

  //POST METHOD
  // if (event.httpMethod === 'POST') {
  //     try {
  //       // Parse the incoming JSON payload from the request body
  //       const requestBody = JSON.parse(event.body);

  //       // Save the data to a database or perform other necessary operations
  //       // ...

  //       // Return a success response
  //       return {
  //         statusCode: 200,
  //         body: JSON.stringify({ message: 'POST request processed successfully' }),
  //       };
  //     } catch (error) {
  //       // Return an error response if there was an issue processing the request
  //       return {
  //         statusCode: 400,
  //         body: JSON.stringify({ error: 'Failed to process POST request' }),
  //       };
  //     }
  //   }
};
