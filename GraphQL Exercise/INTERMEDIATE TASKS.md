1. 
query MyQuery {
  allPeople(first: 5) {
    people {
      name
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}

Response

{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "starshipConnection": {
            "starships": [
              {
                "name": "X-wing"
              },
              {
                "name": "Imperial shuttle"
              }
            ]
          }
        },
        {
          "name": "C-3PO",
          "starshipConnection": {
            "starships": []
          }
        },
        {
          "name": "R2-D2",
          "starshipConnection": {
            "starships": []
          }
        },
        {
          "name": "Darth Vader",
          "starshipConnection": {
            "starships": [
              {
                "name": "TIE Advanced x1"
              }
            ]
          }
        },
        {
          "name": "Leia Organa",
          "starshipConnection": {
            "starships": []
          }
        }
      ]
    }
  }
}

2. 
query MyQuery {
  allSpecies(first: 5) {
    species {
      language
      name
    }
  }
}

Response.

{
  "data": {
    "allSpecies": {
      "species": [
        {
          "language": "Galactic Basic",
          "name": "Human"
        },
        {
          "language": "n/a",
          "name": "Droid"
        },
        {
          "language": "Shyriiwook",
          "name": "Wookiee"
        },
        {
          "language": "Galatic Basic",
          "name": "Rodian"
        },
        {
          "language": "Huttese",
          "name": "Hutt"
        }
      ]
    }
  }
}

3. 
query MyQuery {
  allPlanets(first: 5) {
    edges {
      node {
        name
        climates
      }
    }
  }
}

Response

{
  "data": {
    "allPlanets": {
      "edges": [
        {
          "node": {
            "name": "Tatooine",
            "climates": [
              "arid"
            ]
          }
        },
        {
          "node": {
            "name": "Alderaan",
            "climates": [
              "temperate"
            ]
          }
        },
        {
          "node": {
            "name": "Yavin IV",
            "climates": [
              "temperate",
              "tropical"
            ]
          }
        },
        {
          "node": {
            "name": "Hoth",
            "climates": [
              "frozen"
            ]
          }
        },
        {
          "node": {
            "name": "Dagobah",
            "climates": [
              "murky"
            ]
          }
        }
      ]
    }
  }
}

4. 
query MyQuery {
  allVehicles(first: 3) {
    vehicles {
      costInCredits
      name
    }
  }
}

Response

{
  "data": {
    "allVehicles": {
      "vehicles": [
        {
          "costInCredits": 150000,
          "name": "Sand Crawler"
        },
        {
          "costInCredits": 14500,
          "name": "T-16 skyhopper"
        },
        {
          "costInCredits": 10550,
          "name": "X-34 landspeeder"
        }
      ]
    }
  }
}