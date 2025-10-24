BASIC TASKS
1. 
{
  allFilms {
    films {
      title
    }
  }
}

Response - 

{
  "data": {
    "allFilms": {
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
        },
        {
          "title": "The Force Awakens"
        }
      ]
    }
  }
}

2. 
query MyQuery {
  person(id: "cGVvcGxlOjk=") {
    name
  }
}

Response 

{
  "data": {
    "person": {
      "name": "Biggs Darklighter"
    }
  }
}

3. 
query MyQuery {
  allPlanets(first: 5) {
    edges {
      node {
        name
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
            "name": "Tatooine"
          }
        },
        {
          "node": {
            "name": "Alderaan"
          }
        },
        {
          "node": {
            "name": "Yavin IV"
          }
        },
        {
          "node": {
            "name": "Hoth"
          }
        },
        {
          "node": {
            "name": "Dagobah"
          }
        }
      ]
    }
  }
}

4. 
query MyQuery {
  allStarships(last: 3) {
    starships {
      name
      model
    }
  }
}

Response 

{
  "data": {
    "allStarships": {
      "starships": [
        {
          "name": "Belbullab-22 starfighter",
          "model": "Belbullab-22 starfighter"
        },
        {
          "name": "V-wing",
          "model": "Alpha-3 Nimbus-class V-wing starfighter"
        },
        {
          "name": "X-wing",
          "model": "T-70 X-wing"
        }
      ]
    }
  }
}

