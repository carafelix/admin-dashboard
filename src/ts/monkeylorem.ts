const auxiliaryVerbs = [
    "be", "have", "do", "will", "shall", "can", "could", "may", "might",
    "must", "ought", "should", "would", "dare", "need", "used",
    "will have", "shall have", "can have", "could have", "may have", "might have",
    "must have", "ought to have", "should have", "would have",
    "will be", "shall be", "can be", "could be", "may be", "might be", "must be",
    "ought to be", "should be", "would be",
    "will do", "shall do", "can do", "could do", "may do", "might do", "must do",
    "ought to do", "should do", "would do",
    "will have been", "shall have been", "can have been", "could have been", "may have been",
    "might have been", "must have been", "ought to have been", "should have been", "would have been",
    "will be", "shall be", "can be", "could be", "may be", "might be", "must be",
    "ought to be", "should be", "would be",
    "will have done", "shall have done", "can have done", "could have done", "may have done",
    "might have done", "must have done", "ought to have done", "should have done", "would have done",
  ];
  const grammaticalWords = [
    "I", "you", "he", "she", "it", "we", "they",
    "me", "him", "her", "us", "them",
    "my", "your", "his", "its", "our", "their",
    "mine", "yours", "hers", "ours", "theirs",
    "myself", "yourself", "himself", "herself", "itself", "ourselves", "themselves",
    "this", "that", "these", "those",
    "a", "an", "the",
    "is", "am", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "will", "shall", "would", "should", "can", "could", "may", "might", "must",
    "of", "in", "on", "at", "to", "for", "by", "with", "about", "as", "into", "over", "under", "between", "among",
    "through", "during", "before", "after", "since", "although", "unless", "while", "because", "if", "unless", "when",
    "where", "how"
  ];
  const connectors = [
    "and", "but", "however", "therefore", "meanwhile", "moreover",
    "furthermore", "in addition", "nevertheless", "nonetheless", "likewise",
    "in contrast", "on the other hand", "as a result", "consequently",
    "as well as", "similarly", "in the same vein", "in a similar fashion",
    "by the same token", "for example", "for instance", "in particular",
    "in summary", "to clarify", "in other words", "on the contrary", "in any case",
    "in conclusion", "to illustrate", "for this reason", "in the first place", "in the second place",
    "on one hand", "on the flip side", "equally important", "notably", "primarily",
    "in essence", "to emphasize", "chiefly", "above all", "in reality",
    "for one thing", "specifically", "to put it differently", "to be specific", "for that matter",
    "indeed", "in fact", "in truth", "above all", "to this end",
    "with this in mind", "in this case", "for this purpose", "with regard to", "in the same way",
    "in comparison", "correspondingly", "at the same time", "by comparison", "similarly",
    "likewise", "in any event", "whatever the case", "in any situation", "under any circumstances",
    "no matter what", "in any way", "at any rate", "in any event", "in brief",
    "all in all", "in summary", "in short", "in a word", "in brief",
    "to sum up", "in a nutshell", "on balance", "altogether", "on the whole",
    "in general", "generally speaking", "all things considered", "overall", "by and large"
  ];
  const monkeys = [
    "Monkey", "Ape", "Baboon", "Primate", "Simian",
    "Chimpanzee", "Gorilla", "Orangutan", "Spider Monkey",
    "Howler Monkey", "Tamarin", "Capuchin", "Marmoset",
    "Rhesus Monkey", "Golden Snub-Nosed Monkey", "Japanese Macaque",
    "Vervet Monkey", "Squirrel Monkey", "Colobus Monkey",
    "Bonobo", "Gibbon", "Siamang", "Lemur", "Loris",
    "Mandrill", "Patas Monkey", "Guinea Baboon", "Mangabey",
    "Langur", "Guenon", "Leaf-Nosed Monkey", "Proboscis Monkey",
    "White-Headed Capuchin", "Titi Monkey", "Pygmy Marmoset",
    "Black Howler Monkey", "Saddleback Tamarin", "Red Colobus Monkey",
    "Ruffed Lemur", "Slow Loris", "Drill Monkey", "Olive Baboon",
    "Black Mangabey", "Francois' Langur", "Blue Guenon",
    "Spectacled Langur", "Proboscis Monkey", "Golden Lion Tamarin",
    "Silvery Marmoset", "Alouatta", "Ateles", "Cacajao", "Saguinus",
  ];
  
  const actions = [
    "swings", "chatters", "explores", "plays", "climbs",
    "leaps", "dangles", "investigates", "sways", "roams",
    "interacts", "laughs", "contemplates", "builds", "balances",
    "forages", "communicates", "observes", "pounces", "roars",
    "communicates", "observes", "pounces", "roars", "migrates",
    "grooms", "nurtures", "bonds", "frolics", "brachiates",
    "engages", "observes", "learns", "shares", "proclaims",
    "celebrates", "meditates", "curiosity", "mimics", "defends",
    "showcases", "competes", "adapts", "discovers", "entertains",
    "connects", "protects", "survives", "inspires", "captivates",
    "harmonizes", "puzzles", "navigates", "fashions", "treasures",
    "wanders", "gathers", "imagines", "harvests", "ponders",
    "swings", "chatters", "explores", "plays", "climbs",
    "leaps", "dangles", "investigates", "sways", "roams",
    "interacts", "laughs", "contemplates", "builds", "balances",
    "forages", "communicates", "observes", "pounces", "roars",
    "communicates", "observes", "pounces", "roars", "migrates",
    "grooms", "nurtures", "bonds", "frolics", "brachiates",
    "engages", "observes", "learns", "shares", "proclaims",
    "celebrates", "meditates", "curiosity", "mimics", "defends",
    "showcases", "competes", "adapts", "discovers", "entertains",
    "connects", "protects", "survives", "inspires", "captivates",
    "harmonizes", "puzzles", "navigates", "fashions", "treasures",
    "wanders", "gathers", "imagines", "harvests", "ponders",
  ];
  
  const adjectives = [
    "mischievous", "wise", "acrobatic", "noble", "curious",
    "inquisitive", "playful", "intelligent", "graceful", "adventurous",
    "mystical", "colorful", "endearing", "entertaining", "social",
    "sociable", "enigmatic", "expressive", "caring", "resourceful",
    "affectionate", "charismatic", "energetic", "wise", "sensitive",
    "resourceful", "gregarious", "independent", "sophisticated", "insightful",
    "unpredictable", "versatile", "pioneering", "daring", "resilient",
    "enchanting", "puzzling", "exuberant", "adaptive", "perceptive",
    "engaging", "fascinating", "unconventional", "magnetic", "enduring",
    "adaptable", "inspiring", "mysterious", "intuitive", "inventive",
    "cunning", "bold", "vibrant", "majestic", "intriguing",
    "mischievous", "wise", "acrobatic", "noble", "curious",
    "inquisitive", "playful", "intelligent", "graceful", "adventurous",
    "mystical", "colorful", "endearing", "entertaining", "social",
    "sociable", "enigmatic", "expressive", "caring", "resourceful",
    "affectionate", "charismatic", "energetic", "wise", "sensitive",
    "resourceful", "gregarious", "independent", "sophisticated", "insightful",
    "unpredictable", "versatile", "pioneering", "daring", "resilient",
    "enchanting", "puzzling", "exuberant", "adaptive", "perceptive",
    "engaging", "fascinating", "unconventional", "magnetic", "enduring",
    "adaptable", "inspiring", "mysterious", "intuitive", "inventive",
    "cunning", "bold", "vibrant", "majestic", "intriguing",
  ];
  
  const locations = [
    "jungle", "canopy", "treetop", "forest", "sanctuary",
    "rainforest", "tropical realm", "wilderness", "habitat", "woodland",
    "foliage", "treehouse", "banyan grove", "tropical paradise", "nature's realm",
    "dense underbrush", "riverbank", "highland", "mangrove", "savannah",
    "riverine forest", "bamboo thicket", "cliff", "lagoon", "cave",
    "valley", "waterfall", "vine", "floodplain", "sacred grove",
    "mountain slope", "volcanic crater", "ancient ruin", "exotic island", "hidden oasis",
    "hidden sanctuary", "mystical grotto", "enigmatic spring", "towering peak", "enchanted waterway",
    "lush grove", "rare orchard", "lush meadow", "primeval glade", "lush fernery",
    "breathtaking gorge", "verdant estuary", "biodiverse ecosystem", "lush landscape", "secret clearing",
    "jungle", "canopy", "treetop", "forest", "sanctuary",
    "rainforest", "tropical realm", "wilderness", "habitat", "woodland",
    "foliage", "treehouse", "banyan grove", "tropical paradise", "nature's realm",
    "dense underbrush", "riverbank", "highland", "mangrove", "savannah",
    "riverine forest", "bamboo thicket", "cliff", "lagoon", "cave",
    "valley", "waterfall", "vine", "floodplain", "sacred grove",
    "mountain slope", "volcanic crater", "ancient ruin", "exotic island", "hidden oasis",
    "hidden sanctuary", "mystical grotto", "enigmatic spring", "towering peak", "enchanted waterway",
    "lush grove", "rare orchard", "lush meadow", "primeval glade", "lush fernery",
    "breathtaking gorge", "verdant estuary", "biodiverse ecosystem", "lush landscape", "secret clearing",
  ];
  
  const legends = [
    "ancient lore", "mystical tale", "legend", "story",
    "fable", "myth", "folklore", "saga", "epic narrative",
    "oral tradition", "folk tale", "yarn", "tall tale", "mythology",
    "mythical account", "sacred history", "ancestral narrative", "mythopoeic chronicle", "mythopoeic legend",
    "traditional account", "mythopoeic saga", "time-honored story", "mythopoeic parable", "mythopoeic folklore",
    "mythopoeic myth", "timeless allegory", "age-old fable", "age-old epic", "epic saga",
    "mythical saga", "folklore of old", "mythopoeic tale", "ageless legend", "mythopoeic yarn",
    "ancient lore", "mystical tale", "legend", "story",
    "fable", "myth", "folklore", "saga", "epic narrative",
    "oral tradition", "folk tale", "yarn", "tall tale", "mythology",
    "mythical account", "sacred history", "ancestral narrative", "mythopoeic chronicle", "mythopoeic legend",
    "traditional account", "mythopoeic saga", "time-honored story", "mythopoeic parable", "mythopoeic folklore",
    "mythopoeic myth", "timeless allegory", "age-old fable", "age-old epic", "epic saga",
    "mythical saga", "folklore of old", "mythopoeic tale", "ageless legend", "mythopoeic yarn",
  ];

  const punctuation = [
    ".", ",", "!", "?",
  ];
  

  const polis = [legends, locations, adjectives, actions, monkeys, connectors, grammaticalWords, auxiliaryVerbs]

  export function monkeyLorem(neededCharLength:number){
    let str = '';
    while(str.length < neededCharLength){
        const arr = polis[randomLength(polis)];
        const word = arr[randomLength(arr)];

        if(arr === punctuation){
            const tempStr = str.split('')
            tempStr.pop();
            if(punctuation.includes(tempStr[tempStr.length-1])){
                continue
            }
            str = tempStr.join('') + word + ' '
        } else {
            str = str + word + ' '
        }
    }
    const strArr = str.split('')
    strArr[0] = strArr[0].toUpperCase();
    strArr.pop();
    return strArr.join('')
  }

  function randomLength(arr : string[] | Array<string[]>){
    return Math.floor(Math.random()*arr.length)
  }

  export function addPoint(str:string){
    let strArr = str.split('');
    strArr.push('.');
    return strArr.join('')
}
  