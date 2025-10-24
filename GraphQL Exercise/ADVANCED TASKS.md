1. 
query MyQuery {
  film(id: "ZmlsbXM6MQ==") {
    id
    title
    characterConnection {
      characters {
        name
      }
    }
  }
}

Response

{
  "data": {
    "film": {
      "id": "ZmlsbXM6MQ==",
      "title": "A New Hope",
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
    }
  }
}

2. 
query MyQuery {
  allPeople {
    people {
      name
      filmConnection {
        totalCount
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
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "C-3PO",
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "name": "R2-D2",
          "filmConnection": {
            "totalCount": 7
          }
        },
        {
          "name": "Darth Vader",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "Leia Organa",
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "Owen Lars",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Beru Whitesun lars",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "R5-D4",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Biggs Darklighter",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Obi-Wan Kenobi",
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "name": "Anakin Skywalker",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Wilhuff Tarkin",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Chewbacca",
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "Han Solo",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "Greedo",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Jabba Desilijic Tiure",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Wedge Antilles",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Jek Tono Porkins",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Yoda",
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "Palpatine",
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "Boba Fett",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "IG-88",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Bossk",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Lando Calrissian",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Lobot",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ackbar",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Mon Mothma",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Arvel Crynyd",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Wicket Systri Warrick",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Nien Nunb",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Qui-Gon Jinn",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Nute Gunray",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Finis Valorum",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Padmé Amidala",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Jar Jar Binks",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Roos Tarpals",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Rugor Nass",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ric Olié",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Watto",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Sebulba",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Quarsh Panaka",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Shmi Skywalker",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Darth Maul",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Bib Fortuna",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ayla Secura",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Ratts Tyerel",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dud Bolt",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Gasgano",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ben Quadinaros",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Mace Windu",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Ki-Adi-Mundi",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Kit Fisto",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Eeth Koth",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Adi Gallia",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Saesee Tiin",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Yarael Poof",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Plo Koon",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Mas Amedda",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Gregar Typho",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Cordé",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Cliegg Lars",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Poggle the Lesser",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Luminara Unduli",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Barriss Offee",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dormé",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dooku",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Bail Prestor Organa",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Jango Fett",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Zam Wesell",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dexter Jettster",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Lama Su",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Taun We",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Jocasta Nu",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "R4-P17",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Wat Tambor",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "San Hill",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Shaak Ti",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Grievous",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Tarfful",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Raymus Antilles",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Sly Moore",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Tion Medon",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Finn",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Rey",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Poe Dameron",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "BB8",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Captain Phasma",
          "filmConnection": {
            "totalCount": 1
          }
        }
      ]
    }
  }
}

3. 
query MyQuery {
  allFilms {
    films {
      title
      characterConnection {
        totalCount
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
          "characterConnection": {
            "totalCount": 18
          }
        },
        {
          "title": "The Empire Strikes Back",
          "characterConnection": {
            "totalCount": 16
          }
        },
        {
          "title": "Return of the Jedi",
          "characterConnection": {
            "totalCount": 20
          }
        },
        {
          "title": "The Phantom Menace",
          "characterConnection": {
            "totalCount": 34
          }
        },
        {
          "title": "Attack of the Clones",
          "characterConnection": {
            "totalCount": 40
          }
        },
        {
          "title": "Revenge of the Sith",
          "characterConnection": {
            "totalCount": 34
          }
        },
        {
          "title": "The Force Awakens",
          "characterConnection": {
            "totalCount": 11
          }
        }
      ]
    }
  }
}
