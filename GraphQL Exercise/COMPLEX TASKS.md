1. 

query MyQuery {
  person(id: "cGVvcGxlOjEw") {
    name
    starshipConnection {
      starships {
        name
      }
    }
    homeworld {
      name
    }
    birthYear
    filmConnection {
      films {
        title
      }
    }
  }
}

Response
{
  "data": {
    "person": {
      "name": "Obi-Wan Kenobi",
      "starshipConnection": {
        "starships": [
          {
            "name": "Jedi starfighter"
          },
          {
            "name": "Trade Federation cruiser"
          },
          {
            "name": "Naboo star skiff"
          },
          {
            "name": "Jedi Interceptor"
          },
          {
            "name": "Belbullab-22 starfighter"
          }
        ]
      },
      "homeworld": {
        "name": "Stewjon"
      },
      "birthYear": "57BBY",
      "filmConnection": {
        "films": [
          {
            "title": "A New Hope"
          },
          {
            "title": "The Empire Strikes Back"
          },
          {
            "title": "Return of the Jedi"
          },
          {
            "title": "The Phantom Menace"
          },
          {
            "title": "Attack of the Clones"
          },
          {
            "title": "Revenge of the Sith"
          }
        ]
      }
    }
  }
}

2. 
query MyQuery {
  allPeople(first: 5) {
    people {
      name
      homeworld {
        name
        population
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
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "C-3PO",
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "R2-D2",
          "homeworld": {
            "name": "Naboo",
            "population": 4500000000
          }
        },
        {
          "name": "Darth Vader",
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "Leia Organa",
          "homeworld": {
            "name": "Alderaan",
            "population": 2000000000
          }
        }
      ]
    }
  }
}

3. 
query MyQuery {
  allVehicles(first: 3) {
    vehicles {
      name
      pilotConnection {
        pilots {
          species {
            name
          }
          name
        }
      }
    }
  }
}

Response 

{
  "data": {
    "allVehicles": {
      "vehicles": [
        {
          "name": "Sand Crawler",
          "pilotConnection": {
            "pilots": []
          }
        },
        {
          "name": "T-16 skyhopper",
          "pilotConnection": {
            "pilots": []
          }
        },
        {
          "name": "X-34 landspeeder",
          "pilotConnection": {
            "pilots": []
          }
        }
      ]
    }
  }
}

4. 
query MyQuery {
  allFilms(first: 3) {
    films {
      title
      planetConnection {
        planets {
          name
        }
      }
      starshipConnection {
        starships {
          name
        }
      }
      characterConnection {
        characters {
          name
        }
      }
    }
  }
}

Response

{
  "data": {
    "allFilms": {
      "films": [
        {
          "title": "A New Hope",
          "planetConnection": {
            "planets": [
              {
                "name": "Tatooine"
              },
              {
                "name": "Alderaan"
              },
              {
                "name": "Yavin IV"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "CR90 corvette"
              },
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Sentinel-class landing craft"
              },
              {
                "name": "Death Star"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "TIE Advanced x1"
              }
            ]
          },
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Owen Lars"
              },
              {
                "name": "Beru Whitesun lars"
              },
              {
                "name": "R5-D4"
              },
              {
                "name": "Biggs Darklighter"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Wilhuff Tarkin"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Greedo"
              },
              {
                "name": "Jabba Desilijic Tiure"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Jek Tono Porkins"
              },
              {
                "name": "Raymus Antilles"
              }
            ]
          }
        },
        {
          "title": "The Empire Strikes Back",
          "planetConnection": {
            "planets": [
              {
                "name": "Hoth"
              },
              {
                "name": "Dagobah"
              },
              {
                "name": "Bespin"
              },
              {
                "name": "Ord Mantell"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "Executor"
              },
              {
                "name": "Rebel transport"
              },
              {
                "name": "Slave 1"
              },
              {
                "name": "Imperial shuttle"
              },
              {
                "name": "EF76 Nebulon-B escort frigate"
              }
            ]
          },
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Yoda"
              },
              {
                "name": "Palpatine"
              },
              {
                "name": "Boba Fett"
              },
              {
                "name": "IG-88"
              },
              {
                "name": "Bossk"
              },
              {
                "name": "Lando Calrissian"
              },
              {
                "name": "Lobot"
              }
            ]
          }
        },
        {
          "title": "Return of the Jedi",
          "planetConnection": {
            "planets": [
              {
                "name": "Tatooine"
              },
              {
                "name": "Dagobah"
              },
              {
                "name": "Endor"
              },
              {
                "name": "Naboo"
              },
              {
                "name": "Coruscant"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "CR90 corvette"
              },
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "Executor"
              },
              {
                "name": "Rebel transport"
              },
              {
                "name": "Imperial shuttle"
              },
              {
                "name": "EF76 Nebulon-B escort frigate"
              },
              {
                "name": "Calamari Cruiser"
              },
              {
                "name": "A-wing"
              },
              {
                "name": "B-wing"
              }
            ]
          },
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Jabba Desilijic Tiure"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Yoda"
              },
              {
                "name": "Palpatine"
              },
              {
                "name": "Boba Fett"
              },
              {
                "name": "Lando Calrissian"
              },
              {
                "name": "Ackbar"
              },
              {
                "name": "Mon Mothma"
              },
              {
                "name": "Arvel Crynyd"
              },
              {
                "name": "Wicket Systri Warrick"
              },
              {
                "name": "Nien Nunb"
              },
              {
                "name": "Bib Fortuna"
              }
            ]
          }
        }
      ]
    }
  }
}