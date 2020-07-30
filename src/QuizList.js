import React from "react";
import ReactDOM from "react-dom";

export const quizList = [
  [
    // Mixed
    {
      spørsmål: "Hva heter hovedstaden i Cuba?",
      alternativer: ["Uganda", "Cuba City", "Wakanda", "Havana"],
      riktig: 3,
      hint: "onana",
    },

    {
      spørsmål: "Hvor mange oksygen atomer finnes det i CO2?",
      alternativer: [2, 4, 12, 22],
      riktig: 0,
      hint: "Antall atomer defineres bak selve grunnstoffet",
    },
    {
      spørsmål: "Hva er 30 : 5?",
      alternativer: [6, 8, 2, 4],
      riktig: 0,
      hint: "det du må gange 5 med for å få 30.",
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
      hint: "Mount Everest.",
    },
    {
      spørsmål: "5x+7=10+4x , Hva er x?",
      alternativer: [2, 3, 4, 5],
      riktig: 1,
      hint: "flytt og bytt",
    },
    {
      spørsmål: "Hvilke planet ligger ved siden av Jorda?",
      alternativer: ["Jupiter", "Uranus", "Venus", "Sola"],
      riktig: 2,
      hint: "den andre naboen er Mars.",
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
      hint: "det du har kakao i",
    },
    {
      spørsmål: "Hva er 5 x 5?",
      alternativer: [34, 78, 25, 100],
      riktig: 2,
      hint: "5+5+5+5+5",
    },
    {
      spørsmål: "Hvor ligger Mount Rushmore?",
      alternativer: ["Stone", "Keystone", "Washington DC", "Seattle"],
      riktig: 1,
      hint: "USA",
    },
  ],
  [
    // Matte
    {
      spørsmål: "5x+7=10+4x , Hva er x?",
      alternativer: [2, 3, 4, 5],
      riktig: 1,
      hint: "flytt og bytt",
    },
    {
      spørsmål: "Hva er π?",
      alternativer: [3.14813, 3.141572, 3.14296, 3.141592],
      riktig: 3,
      hint: "at den begynner med 3.14",
    },
    {
      spørsmål: "Hvordan regner man arealet til et trekant?",
      alternativer: ["l*b*h", "*g*h*2", "g*h", "g*h/2"],
      riktig: 3,
      hint: "firkant også trekant",
    },
  ],
  [
    //Naturfag
    {
      spørsmål: "Hvor mange oksygen atomer finnes det i CO2?",
      alternativer: [2, 4, 12, 22],
      riktig: 0,
      hint: "Antall atomer defineres bak selve grunnstoffet",
    },
    {
      spørsmål: "Hvilke planet ligger ved siden av Jorda?",
      alternativer: ["Jupiter", "Uranus", "Venus", "Sola"],
      riktig: 2,
      hint: "den andre naboen er Mars.",
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
      hint: "det du har kakao i",
    },
  ],
  [
    //Geografi
    {
      spørsmål: "Hva heter hovedstaden i Cuba?",
      alternativer: ["Uganda", "Cuba city", "Wakanda", "Havana"],
      riktig: 3,
      hint: "onana",
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
      hint: "Mount Everest.",
    },
    {
      spørsmål: "Hvor ligger Mount Rushmore?",
      alternativer: ["Stone", "Keystone", "Washington DC", "Seattle"],
      riktig: 1,
      hint: "USA",
    },
  ],
  [
    //Logo

    {
      spørsmål: (
        <img
          src={require("./img/logo1.png")}
          style={{ width: "100px", borderRadius: "10px" }}
        />
      ),
      alternativer: ["MCD", "KFC", "Burger King", "Subway"],
      riktig: 0,
      hint: "Burger",
    },
    {
      spørsmål: (
        <img
          src={require("./img/logo2.png")}
          style={{ width: "100px", borderRadius: "10px" }}
        />
      ),
      alternativer: ["Opel", "Hyundai", "Toyota", "Honda"],
      riktig: 3,
      hint: "H",
    },
    {
      spørsmål: (
        <img
          src={require("./img/logo3.png")}
          style={{ width: "100px", borderRadius: "10px" }}
        />
      ),
      alternativer: ["Apple", "Android", "OSI", "Cookies"],
      riktig: 1,
      hint: "OPS",
    },
  ],
];
