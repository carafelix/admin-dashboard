const proyectsContainer = document.getElementById('projects-wrap');
const cardTemplate = document.getElementById("skeleton-card-template") as HTMLTemplateElement
if(proyectsContainer && cardTemplate){
    for (let i = 0; i < 9; i++) {
        proyectsContainer.append(cardTemplate.content.cloneNode(true));
      }    
}

const anContainer = document.getElementById('announcements');
const anTemplate = document.getElementById("skeleton-announcements-template") as HTMLTemplateElement;

if(anContainer && anTemplate){
  for (let i = 0; i < 3; i++) {
    anContainer.append(anTemplate.content.cloneNode(true));
  } 
}

const trendContainer = document.getElementById('trends');
const trendTemplate = document.getElementById("trends-template") as HTMLTemplateElement;


if(trendContainer && trendTemplate){
  for (let i = 0; i < 4; i++) {
    trendContainer.append(trendTemplate.content.cloneNode(true));
  } 
}
