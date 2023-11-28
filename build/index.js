"use strict";
(() => {
  // src/ts/monkeylorem.ts
  var auxiliaryVerbs = [
    "be",
    "have",
    "do",
    "will",
    "shall",
    "can",
    "could",
    "may",
    "might",
    "must",
    "ought",
    "should",
    "would",
    "dare",
    "need",
    "used",
    "will have",
    "shall have",
    "can have",
    "could have",
    "may have",
    "might have",
    "must have",
    "ought to have",
    "should have",
    "would have",
    "will be",
    "shall be",
    "can be",
    "could be",
    "may be",
    "might be",
    "must be",
    "ought to be",
    "should be",
    "would be",
    "will do",
    "shall do",
    "can do",
    "could do",
    "may do",
    "might do",
    "must do",
    "ought to do",
    "should do",
    "would do",
    "will have been",
    "shall have been",
    "can have been",
    "could have been",
    "may have been",
    "might have been",
    "must have been",
    "ought to have been",
    "should have been",
    "would have been",
    "will be",
    "shall be",
    "can be",
    "could be",
    "may be",
    "might be",
    "must be",
    "ought to be",
    "should be",
    "would be",
    "will have done",
    "shall have done",
    "can have done",
    "could have done",
    "may have done",
    "might have done",
    "must have done",
    "ought to have done",
    "should have done",
    "would have done"
  ];
  var grammaticalWords = [
    "I",
    "you",
    "he",
    "she",
    "it",
    "we",
    "they",
    "me",
    "him",
    "her",
    "us",
    "them",
    "my",
    "your",
    "his",
    "its",
    "our",
    "their",
    "mine",
    "yours",
    "hers",
    "ours",
    "theirs",
    "myself",
    "yourself",
    "himself",
    "herself",
    "itself",
    "ourselves",
    "themselves",
    "this",
    "that",
    "these",
    "those",
    "a",
    "an",
    "the",
    "is",
    "am",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "shall",
    "would",
    "should",
    "can",
    "could",
    "may",
    "might",
    "must",
    "of",
    "in",
    "on",
    "at",
    "to",
    "for",
    "by",
    "with",
    "about",
    "as",
    "into",
    "over",
    "under",
    "between",
    "among",
    "through",
    "during",
    "before",
    "after",
    "since",
    "although",
    "unless",
    "while",
    "because",
    "if",
    "unless",
    "when",
    "where",
    "how"
  ];
  var connectors = [
    "and",
    "but",
    "however",
    "therefore",
    "meanwhile",
    "moreover",
    "furthermore",
    "in addition",
    "nevertheless",
    "nonetheless",
    "likewise",
    "in contrast",
    "on the other hand",
    "as a result",
    "consequently",
    "as well as",
    "similarly",
    "in the same vein",
    "in a similar fashion",
    "by the same token",
    "for example",
    "for instance",
    "in particular",
    "in summary",
    "to clarify",
    "in other words",
    "on the contrary",
    "in any case",
    "in conclusion",
    "to illustrate",
    "for this reason",
    "in the first place",
    "in the second place",
    "on one hand",
    "on the flip side",
    "equally important",
    "notably",
    "primarily",
    "in essence",
    "to emphasize",
    "chiefly",
    "above all",
    "in reality",
    "for one thing",
    "specifically",
    "to put it differently",
    "to be specific",
    "for that matter",
    "indeed",
    "in fact",
    "in truth",
    "above all",
    "to this end",
    "with this in mind",
    "in this case",
    "for this purpose",
    "with regard to",
    "in the same way",
    "in comparison",
    "correspondingly",
    "at the same time",
    "by comparison",
    "similarly",
    "likewise",
    "in any event",
    "whatever the case",
    "in any situation",
    "under any circumstances",
    "no matter what",
    "in any way",
    "at any rate",
    "in any event",
    "in brief",
    "all in all",
    "in summary",
    "in short",
    "in a word",
    "in brief",
    "to sum up",
    "in a nutshell",
    "on balance",
    "altogether",
    "on the whole",
    "in general",
    "generally speaking",
    "all things considered",
    "overall",
    "by and large"
  ];
  var monkeys = [
    "Monkey",
    "Ape",
    "Baboon",
    "Primate",
    "Simian",
    "Chimpanzee",
    "Gorilla",
    "Orangutan",
    "Spider Monkey",
    "Howler Monkey",
    "Tamarin",
    "Capuchin",
    "Marmoset",
    "Rhesus Monkey",
    "Golden Snub-Nosed Monkey",
    "Japanese Macaque",
    "Vervet Monkey",
    "Squirrel Monkey",
    "Colobus Monkey",
    "Bonobo",
    "Gibbon",
    "Siamang",
    "Lemur",
    "Loris",
    "Mandrill",
    "Patas Monkey",
    "Guinea Baboon",
    "Mangabey",
    "Langur",
    "Guenon",
    "Leaf-Nosed Monkey",
    "Proboscis Monkey",
    "White-Headed Capuchin",
    "Titi Monkey",
    "Pygmy Marmoset",
    "Black Howler Monkey",
    "Saddleback Tamarin",
    "Red Colobus Monkey",
    "Ruffed Lemur",
    "Slow Loris",
    "Drill Monkey",
    "Olive Baboon",
    "Black Mangabey",
    "Francois' Langur",
    "Blue Guenon",
    "Spectacled Langur",
    "Proboscis Monkey",
    "Golden Lion Tamarin",
    "Silvery Marmoset",
    "Alouatta",
    "Ateles",
    "Cacajao",
    "Saguinus"
  ];
  var actions = [
    "swings",
    "chatters",
    "explores",
    "plays",
    "climbs",
    "leaps",
    "dangles",
    "investigates",
    "sways",
    "roams",
    "interacts",
    "laughs",
    "contemplates",
    "builds",
    "balances",
    "forages",
    "communicates",
    "observes",
    "pounces",
    "roars",
    "communicates",
    "observes",
    "pounces",
    "roars",
    "migrates",
    "grooms",
    "nurtures",
    "bonds",
    "frolics",
    "brachiates",
    "engages",
    "observes",
    "learns",
    "shares",
    "proclaims",
    "celebrates",
    "meditates",
    "curiosity",
    "mimics",
    "defends",
    "showcases",
    "competes",
    "adapts",
    "discovers",
    "entertains",
    "connects",
    "protects",
    "survives",
    "inspires",
    "captivates",
    "harmonizes",
    "puzzles",
    "navigates",
    "fashions",
    "treasures",
    "wanders",
    "gathers",
    "imagines",
    "harvests",
    "ponders",
    "swings",
    "chatters",
    "explores",
    "plays",
    "climbs",
    "leaps",
    "dangles",
    "investigates",
    "sways",
    "roams",
    "interacts",
    "laughs",
    "contemplates",
    "builds",
    "balances",
    "forages",
    "communicates",
    "observes",
    "pounces",
    "roars",
    "communicates",
    "observes",
    "pounces",
    "roars",
    "migrates",
    "grooms",
    "nurtures",
    "bonds",
    "frolics",
    "brachiates",
    "engages",
    "observes",
    "learns",
    "shares",
    "proclaims",
    "celebrates",
    "meditates",
    "curiosity",
    "mimics",
    "defends",
    "showcases",
    "competes",
    "adapts",
    "discovers",
    "entertains",
    "connects",
    "protects",
    "survives",
    "inspires",
    "captivates",
    "harmonizes",
    "puzzles",
    "navigates",
    "fashions",
    "treasures",
    "wanders",
    "gathers",
    "imagines",
    "harvests",
    "ponders"
  ];
  var adjectives = [
    "mischievous",
    "wise",
    "acrobatic",
    "noble",
    "curious",
    "inquisitive",
    "playful",
    "intelligent",
    "graceful",
    "adventurous",
    "mystical",
    "colorful",
    "endearing",
    "entertaining",
    "social",
    "sociable",
    "enigmatic",
    "expressive",
    "caring",
    "resourceful",
    "affectionate",
    "charismatic",
    "energetic",
    "wise",
    "sensitive",
    "resourceful",
    "gregarious",
    "independent",
    "sophisticated",
    "insightful",
    "unpredictable",
    "versatile",
    "pioneering",
    "daring",
    "resilient",
    "enchanting",
    "puzzling",
    "exuberant",
    "adaptive",
    "perceptive",
    "engaging",
    "fascinating",
    "unconventional",
    "magnetic",
    "enduring",
    "adaptable",
    "inspiring",
    "mysterious",
    "intuitive",
    "inventive",
    "cunning",
    "bold",
    "vibrant",
    "majestic",
    "intriguing",
    "mischievous",
    "wise",
    "acrobatic",
    "noble",
    "curious",
    "inquisitive",
    "playful",
    "intelligent",
    "graceful",
    "adventurous",
    "mystical",
    "colorful",
    "endearing",
    "entertaining",
    "social",
    "sociable",
    "enigmatic",
    "expressive",
    "caring",
    "resourceful",
    "affectionate",
    "charismatic",
    "energetic",
    "wise",
    "sensitive",
    "resourceful",
    "gregarious",
    "independent",
    "sophisticated",
    "insightful",
    "unpredictable",
    "versatile",
    "pioneering",
    "daring",
    "resilient",
    "enchanting",
    "puzzling",
    "exuberant",
    "adaptive",
    "perceptive",
    "engaging",
    "fascinating",
    "unconventional",
    "magnetic",
    "enduring",
    "adaptable",
    "inspiring",
    "mysterious",
    "intuitive",
    "inventive",
    "cunning",
    "bold",
    "vibrant",
    "majestic",
    "intriguing"
  ];
  var locations = [
    "jungle",
    "canopy",
    "treetop",
    "forest",
    "sanctuary",
    "rainforest",
    "tropical realm",
    "wilderness",
    "habitat",
    "woodland",
    "foliage",
    "treehouse",
    "banyan grove",
    "tropical paradise",
    "nature's realm",
    "dense underbrush",
    "riverbank",
    "highland",
    "mangrove",
    "savannah",
    "riverine forest",
    "bamboo thicket",
    "cliff",
    "lagoon",
    "cave",
    "valley",
    "waterfall",
    "vine",
    "floodplain",
    "sacred grove",
    "mountain slope",
    "volcanic crater",
    "ancient ruin",
    "exotic island",
    "hidden oasis",
    "hidden sanctuary",
    "mystical grotto",
    "enigmatic spring",
    "towering peak",
    "enchanted waterway",
    "lush grove",
    "rare orchard",
    "lush meadow",
    "primeval glade",
    "lush fernery",
    "breathtaking gorge",
    "verdant estuary",
    "biodiverse ecosystem",
    "lush landscape",
    "secret clearing",
    "jungle",
    "canopy",
    "treetop",
    "forest",
    "sanctuary",
    "rainforest",
    "tropical realm",
    "wilderness",
    "habitat",
    "woodland",
    "foliage",
    "treehouse",
    "banyan grove",
    "tropical paradise",
    "nature's realm",
    "dense underbrush",
    "riverbank",
    "highland",
    "mangrove",
    "savannah",
    "riverine forest",
    "bamboo thicket",
    "cliff",
    "lagoon",
    "cave",
    "valley",
    "waterfall",
    "vine",
    "floodplain",
    "sacred grove",
    "mountain slope",
    "volcanic crater",
    "ancient ruin",
    "exotic island",
    "hidden oasis",
    "hidden sanctuary",
    "mystical grotto",
    "enigmatic spring",
    "towering peak",
    "enchanted waterway",
    "lush grove",
    "rare orchard",
    "lush meadow",
    "primeval glade",
    "lush fernery",
    "breathtaking gorge",
    "verdant estuary",
    "biodiverse ecosystem",
    "lush landscape",
    "secret clearing"
  ];
  var legends = [
    "ancient lore",
    "mystical tale",
    "legend",
    "story",
    "fable",
    "myth",
    "folklore",
    "saga",
    "epic narrative",
    "oral tradition",
    "folk tale",
    "yarn",
    "tall tale",
    "mythology",
    "mythical account",
    "sacred history",
    "ancestral narrative",
    "mythopoeic chronicle",
    "mythopoeic legend",
    "traditional account",
    "mythopoeic saga",
    "time-honored story",
    "mythopoeic parable",
    "mythopoeic folklore",
    "mythopoeic myth",
    "timeless allegory",
    "age-old fable",
    "age-old epic",
    "epic saga",
    "mythical saga",
    "folklore of old",
    "mythopoeic tale",
    "ageless legend",
    "mythopoeic yarn",
    "ancient lore",
    "mystical tale",
    "legend",
    "story",
    "fable",
    "myth",
    "folklore",
    "saga",
    "epic narrative",
    "oral tradition",
    "folk tale",
    "yarn",
    "tall tale",
    "mythology",
    "mythical account",
    "sacred history",
    "ancestral narrative",
    "mythopoeic chronicle",
    "mythopoeic legend",
    "traditional account",
    "mythopoeic saga",
    "time-honored story",
    "mythopoeic parable",
    "mythopoeic folklore",
    "mythopoeic myth",
    "timeless allegory",
    "age-old fable",
    "age-old epic",
    "epic saga",
    "mythical saga",
    "folklore of old",
    "mythopoeic tale",
    "ageless legend",
    "mythopoeic yarn"
  ];
  var monkeyFileNames = [
    "0_gorilla_face_close-up.webp",
    "1_gorilla_face_close-up.webp",
    "2_gorilla_face_close-up.webp",
    "3_gorilla_face_close-up.webp",
    "4_crab-eating_macaque_face_close-up.webp",
    "5_crab-eating_macaque_face_close-up.webp",
    "6_crab-eating_macaque_face_close-up.webp",
    "7_crab-eating_macaque_face_close-up.webp",
    "8_crab-eating_macaque_face_close-up.webp",
    "9_crab-eating_macaque_face_close-up.webp",
    "10_crab-eating_macaque_face_close-up.webp",
    "11_crab-eating_macaque_face_close-up.webp",
    "12_mandrill_face_close-up.webp",
    "13_red-eared_guenon_face_close-up.webp",
    "14_red-eared_guenon_face_close-up.webp",
    "15_red-eared_guenon_face_close-up.webp",
    "16_red-eared_guenon_face_close-up.webp",
    "17_red-shanked_douc_face_close-up.webp",
    "18_red-shanked_douc_face_close-up.webp",
    "19_red-shanked_douc_face_close-up.webp",
    "20_japanese_macaque_face_close-up.webp",
    "21_japanese_macaque_face_close-up.webp",
    "22_japanese_macaque_face_close-up.webp",
    "23_japanese_macaque_face_close-up.webp",
    "24_de_brazza's_monkey_face_close-up.webp",
    "25_de_brazza's_monkey_face_close-up.webp",
    "26_de_brazza's_monkey_face_close-up.webp",
    "27_de_brazza's_monkey_face_close-up.webp",
    "28_golden_snob-nosed_monkey_face_close-up.webp",
    "29_golden_snob-nosed_monkey_face_close-up.webp",
    "30_golden_snob-nosed_monkey_face_close-up.webp",
    "31_golden_snob-nosed_monkey_face_close-up.webp",
    "32_baboon_face_close-up.webp",
    "33_baboon_face_close-up.webp",
    "34_baboon_face_close-up.webp",
    "35_baboon_face_close-up.webp",
    "36_gibbon_face_close-up.webp",
    "37_baboon_face_close-up.webp",
    "38_baboon_face_close-up.webp",
    "39_baboon_face_close-up.webp",
    "40_baboon_face_close-up.webp"
  ];
  var profileNames = [
    "cloud.webp",
    "coffee.webp",
    "ghosti.webp",
    "gladi.webp",
    "littleguy.webp",
    "oldfart.webp",
    "poop.webp",
    "rabbit.webp",
    "sheep.webp",
    "tamper.webp",
    "zombie.webp"
  ];
  var polis = [legends, locations, adjectives, actions, monkeys, connectors, grammaticalWords, auxiliaryVerbs];
  function monkeyLorem(neededCharLength) {
    let str = "";
    while (str.length < neededCharLength) {
      const arr = polis[randomIndex(polis)];
      const word = arr[randomIndex(arr)];
      str = str + word + " ";
    }
    const strArr = str.split("");
    strArr[0] = strArr[0].toUpperCase();
    strArr.pop();
    return strArr.join("");
  }
  function getMonkeyUser() {
    const monkey = monkeys[randomIndex(monkeys)];
    return "@" + monkey.split(" ").join("_");
  }
  function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  function addPoint(str) {
    let strArr = str.split("");
    strArr.push(".");
    return strArr.join("");
  }

  // src/ts/index.ts
  var projects = document.querySelectorAll(".project");
  var announcements = document.querySelectorAll(".announcement");
  var trending = document.querySelectorAll(".trend");
  var cardTemplate = document.getElementById("project-card-template");
  var trendTemplate = document.getElementById("trend-template");
  var anTemplate = document.getElementById("an-card-template");
  var mainWrap = document.getElementById("main-wrap");
  var visitedMonkeys = [];
  var visitedProfiles = [];
  async function skeletonJazz(parentElement) {
    if (!parentElement) {
      return;
    }
    const isProject = Array.from(projects).includes(parentElement);
    const isAnnouncement = Array.from(announcements).includes(parentElement);
    const isTrend = Array.from(trending).includes(parentElement);
    if (isProject) {
      parentElement.append(cardTemplate.content.cloneNode(true));
    } else if (isAnnouncement) {
      parentElement.append(anTemplate.content.cloneNode(true));
    } else if (isTrend) {
      parentElement.append(trendTemplate.content.cloneNode(true));
    }
    const trueItemDivFromTemplate = parentElement.lastElementChild;
    const h3 = trueItemDivFromTemplate?.firstElementChild;
    const p = trueItemDivFromTemplate?.lastElementChild;
    if (h3) {
      if (isProject || isAnnouncement) {
        h3.textContent = monkeyLorem(15);
      } else if (isTrend) {
        h3.textContent = getMonkeyUser();
      }
    }
    if (p) {
      if (isProject) {
        p.textContent = addPoint(monkeyLorem(85));
      } else if (isAnnouncement) {
        p.textContent = addPoint(monkeyLorem(120));
      } else if (isTrend) {
        p.textContent = addPoint(monkeyLorem(20));
      }
    }
    if (isProject) {
      const monkeyImg = populateImg(monkeyFileNames, visitedMonkeys, "./assets/dall-e/webp/high/", "monkey-img", "Primate art");
      if (trueItemDivFromTemplate) {
        monkeyImg.onload = () => {
          parentElement.querySelectorAll(".skeleton").forEach((skeleton) => {
            parentElement.removeChild(skeleton);
          });
          if (parentElement.lastElementChild) {
            parentElement.lastElementChild.classList.remove("absolute");
            parentElement.lastElementChild.classList.remove("display-none");
            parentElement.classList.remove("loading");
          }
        };
        callNextParentSibiling(parentElement);
      }
      if (h3) {
        trueItemDivFromTemplate?.insertBefore(monkeyImg, h3);
      }
    } else if (isAnnouncement) {
      removeSkeletonsInsant(parentElement);
      callNextParentSibiling(parentElement);
    } else if (isTrend) {
      const profileImg = populateImg(profileNames, visitedProfiles, "./assets/profiles/", "profile-icon", "Profile Icon", true, true);
      removeSkeletonSibilingsOnLoad(profileImg, parentElement, ".trend-div");
      removeHide(profileImg, parentElement.lastElementChild, true);
      removeHide(profileImg, profileImg, true);
      parentElement.insertBefore(profileImg, parentElement.firstElementChild);
      callNextParentSibiling(parentElement);
    }
  }
  skeletonJazz(projects[0]);
  skeletonJazz(announcements[0]);
  skeletonJazz(trending[0]);
  function populateImg(sourceNameList, visited, dir, imgClass, alt, absolute, transparent, none) {
    const img = document.createElement("img");
    const current = getCurrentMonkey(sourceNameList, visited);
    const path = dir + current;
    img.setAttribute("src", path);
    img.setAttribute("alt", alt);
    img.classList.add(imgClass);
    if (absolute) {
      img.classList.add("absolute");
    }
    if (transparent) {
      img.classList.add("transparent");
    }
    if (none) {
      img.classList.add("display-none");
    }
    return img;
  }
  function removeSkeletonSibilingsOnLoad(lastLoadedElement, parent, selector) {
    lastLoadedElement.addEventListener("load", () => {
      if (lastLoadedElement.complete) {
        console.log(lastLoadedElement.complete);
        const skeletonSibilings = parent.querySelectorAll(selector);
        skeletonSibilings.forEach((el) => {
          parent.removeChild(el);
        });
        parent.classList.remove("loading");
      }
    });
  }
  function removeHide(loadedElement, elementToShow, onload) {
    if (onload) {
      loadedElement.addEventListener("load", () => {
        elementToShow.classList.remove("absolute");
        elementToShow.classList.remove("transparent");
        elementToShow.classList.remove("hide");
        elementToShow.classList.remove("display-none");
      });
    } else {
      elementToShow.classList.remove("absolute");
      elementToShow.classList.remove("transparent");
      elementToShow.classList.remove("hide");
      elementToShow.classList.remove("display-none");
    }
  }
  function removeSkeletonsInsant(parent) {
    const skeletonSibilings = parent.querySelectorAll(".skeleton");
    skeletonSibilings.forEach((el) => {
      parent.removeChild(el);
    });
    parent.classList.remove("loading");
  }
  function callNextParentSibiling(parent) {
    if (parent.nextElementSibling) {
      skeletonJazz(parent.nextElementSibling);
    }
  }
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function getCurrentMonkey(filenames, visited) {
    while ("forever young") {
      if (visited.length >= filenames.length) {
        throw new Error("limit of this function is the amount of imgs in assets folder");
      }
      let monkey = getRandomItem(filenames);
      if (!visited.includes(monkey)) {
        visited.push(monkey);
        return monkey;
      }
    }
  }
  var openSideButton = document.getElementById("open-sidenav");
  var sidebar = document.getElementById("sidebar");
  openSideButton?.addEventListener("click", () => {
    if (sidebar?.classList.contains("display")) {
      mainWrap?.classList.remove("display-none");
      sidebar?.classList.remove("display");
    } else {
      mainWrap?.classList.add("display-none");
      sidebar?.classList.add("display");
    }
  });
  var tabs = document.querySelectorAll(".tabs");
  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      sidebar?.classList.remove("display");
      mainWrap?.classList.remove("display-none");
    });
  });
})();