import React from "react";
import ReactDOM from "react-dom";

export const quizList = [
  [
    // Mixed
    {
      spørsmål: "Hva heter hovedstaden i Cuba?",
      alternativer: ["Uganda", "Cuba City", "Wakanda", "Havana"],
      riktig: 3,
    },

    {
      spørsmål: "Hvor mange oksygen atomer finnes det i CO2?",
      alternativer: [2, 4, 12, 22],
      riktig: 0,
    },
    {
      spørsmål: "Hva er 30 : 5?",
      alternativer: [6, 8, 2, 4],
      riktig: 0,
    },
    {
      spørsmål: "Hvor ligger verdens høyeste fjell?",
      alternativer: [
        "Nepal og India",
        "India og Vietnam",
        "Nepal og Kina",
        "Kina og India",
      ],
      riktig: 2,
    },
    {
      spørsmål: "5x+7=10+4x , Hva er x?",
      alternativer: [2, 3, 4, 5],
      riktig: 1,
    },
    {
      spørsmål: "Hvilke planet ligger ved siden av Jorda?",
      alternativer: ["Jupiter", "Uranus", "Venus", "Sola"],
      riktig: 2,
    },
    {
      spørsmål: "Hvilket lag ligger ytterst/høyest i atmosfæren?",
      alternativer: [
        "Mesosfæren",
        "Stratosfæren",
        "Troposfæren",
        "Termosfæren",
      ],
      riktig: 3,
    },
    {
      spørsmål: "Hva er 5 x 5?",
      alternativer: [34, 78, 25, 100],
      riktig: 2,
    },
    {
      spørsmål: "Hvor ligger Mount Rushmore?",
      alternativer: ["Stone", "Keystone", "Washington DC", "Seattle"],
      riktig: 1,
    },
  ],
  [
    // Matte
    {
      spørsmål: "5x+7=10+4x , Hva er x?",
      alternativer: [2, 3, 4, 5],
      riktig: 1,
    },
    {
      spørsmål: "Hva er π?",
      alternativer: [3.14813, 3.141572, 3.14296, 3.141592],
      riktig: 3,
    },
    {
      spørsmål: "Hvordan regner man arealet til et trekant?",
      alternativer: ["l*b*h", "*g*h*2", "g*h", "g*h/2"],
      riktig: 3,
    },
  ],
  [
    //Naturfag
    {
      spørsmål: "Hvor mange oksygen atomer finnes det i CO2?",
      alternativer: [2, 4, 12, 22],
      riktig: 0,
    },
    {
      spørsmål: "Hvilke planet ligger ved siden av Jorda?",
      alternativer: ["Jupiter", "Uranus", "Venus", "Sola"],
      riktig: 2,
    },
    {
      spørsmål: "Hvilket lag ligger ytterst/høyest i atmosfæren?",
      alternativer: [
        "Mesosfæren",
        "Stratosfæren",
        "Troposfæren",
        "Termosfæren",
      ],
      riktig: 3,
    },
  ],
  [
    //Geografi
    {
      spørsmål: "Hva heter hovedstaden i Cuba?",
      alternativer: ["Uganda", "Cuba city", "Wakanda", "Havana"],
      riktig: 3,
    },
    {
      spørsmål: "Hvor ligger verdens høyeste fjell?",
      alternativer: [
        "Nepal og India",
        "India og Vietnam",
        "Nepal og Kina",
        "Kina og India",
      ],
      riktig: 2,
    },
    {
      spørsmål: "Hvor ligger Mount Rushmore?",
      alternativer: ["Stone", "Keystone", "Washington DC", "Seattle"],
      riktig: 1,
    },
  ],
  [
    //Logo

    {
      spørsmål: (
        <img
          src={require("./logo1.png")}
          style={{ width: "100px", borderRadius: "10px" }}
        />
      ),
      alternativer: ["MCD", "KFC", "Burger King", "Subway"],
      riktig: 0,
    },
    {
      spørsmål: (
        <img
          src={require("./logo2.png")}
          style={{ width: "100px", borderRadius: "10px" }}
        />
      ),
      alternativer: ["Opel", "Hyundai", "Toyota", "Honda"],
      riktig: 3,
    },
    {
      spørsmål: (
        <img
          src={require("./logo3.png")}
          style={{ width: "100px", borderRadius: "10px" }}
        />
      ),
      alternativer: ["Apple", "Android", "OSI", "Cookies"],
      riktig: 1,
    },
  ],
];
