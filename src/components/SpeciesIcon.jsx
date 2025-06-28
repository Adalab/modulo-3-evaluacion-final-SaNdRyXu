
const speciesIcons = {
  human: "⚡🧍", 
  elf: "🧝‍♂️", 
  ghost: "🧻👻", 
  werewolf: "🐺🌕", 
  "half-giant": "🌲🧔",
  centaur: "🏹🐎",
  poltergeist: "👻🎈", 
  "magical creature": "✨🦄",
  cat: "🐈‍⬛", 
  owl: "🦉📜", 
  toad: "🐸🎶", 
  dragon: "🐲🔥",
  basilisk: "👁️🐍",
  hippogriff: "🦅🐎",
  acromantula: "🕸️🕷️",
  phoenix: "🔥🪶", 
  goblin: "💰👺", 
  spirit: "🌫️🧠",
  deer: "🦌✨", 
  dog: "🐾🐶",
  rat: "🐀💬",
};

const getSpeciesIcon = (species) =>
  speciesIcons[species?.toLowerCase()] || "🔎";

const SpeciesIcon = ({ species }) => {
      if (!species) return null; 
  const icon = getSpeciesIcon(species);
  return <span>{species} {icon}</span>


}



export default SpeciesIcon;