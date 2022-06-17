const complexityEasy = {
  code: "easy",
  name: "Easy",
};

const complexityMedium = {
  code: "medium",
  name: "Medium",
};

const complexityHard = {
  code: "hard",
  name: "Hard",
};

const attributeStr = {
  code: "str",
  name: "Strength",
  image:
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png",
};

const attributeInt = {
  code: "int",
  name: "Intellegent",
  image:
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png",
};

const attributeAgi = {
  code: "agi",
  name: "Agility",
  image:
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png",
};

const heroes = [
  // STR Section
  {
    id: 1,
    name: "Abbaddon",
    attribute: attributeStr,
    complexity: complexityEasy,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png",
  },
  {
    id: 2,
    name: "Alchemist",
    attribute: attributeStr,
    complexity: complexityEasy,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png",
  },
  {
    id: 3,
    name: "Doom",
    attribute: attributeStr,
    complexity: complexityMedium,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png",
  },
  {
    id: 4,
    name: "IO",
    attribute: attributeStr,
    complexity: complexityHard,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png",
  },

  // Agi Section
  {
    id: 5,
    name: "Anti Mage",
    attribute: attributeAgi,
    complexity: complexityEasy,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
  },
  {
    id: 6,
    name: "Clinkz",
    attribute: attributeAgi,
    complexity: complexityMedium,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png",
  },
  {
    id: 7,
    name: "Ember Spirit",
    attribute: attributeAgi,
    complexity: complexityMedium,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png",
  },
  {
    id: 8,
    name: "Meepo",
    attribute: attributeAgi,
    complexity: complexityHard,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png",
  },
  // Int Section
  {
    id: 9,
    name: "Crystal Maiden",
    description: "Heroes but like creep",
    attribute: attributeInt,
    complexity: complexityEasy,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
  },
  {
    id: 10,
    name: "Bane",
    attribute: attributeInt,
    complexity: complexityMedium,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
  },
  {
    id: 11,
    name: "Invoker",
    attribute: attributeInt,
    complexity: complexityHard,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png",
  },
  {
    id: 12,
    name: "Rubick",
    attribute: attributeInt,
    complexity: complexityHard,
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png",
  },
];

const content = document.getElementById("container-heroes");
heroes.forEach((hero, index) => {
  content.insertAdjacentHTML(
    "beforeend",
    `<div class="box-heroes">
               <img
                 src="${hero.image}"
                 class="heroes-image"
                 alt=""
               />
               <div class="overlay-heroes-image">
                 <div class="flex-row">
                   <img
                     src="${hero.attribute.image}"
                     alt="Attribute"
                     width="20"
                     height="20"
                   />
                   <span class="text-heroes px-1">${hero.name}</span>
                 </div>
               </div>
             </div>`
  );
});
