import { monkeyLorem, addPoint } from './monkeylorem.js'
const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;

const cardTemplate = document.getElementById("project-card-template") as HTMLTemplateElement


async function skeletonJazz(){

    const fileNames = await fetch('./fileNames.json')
                                .then((response)=>response.json())
                                .then((data)=>data.filenames);


    let visitedMonkeys : string[] = []


    for(const project of projects){
        project.append(cardTemplate.content.cloneNode(true));
        
        const cardDiv = project.lastElementChild;
        const h3 = cardDiv?.firstElementChild;
        if(h3){
            h3.textContent = monkeyLorem(15)
        }
        const p = cardDiv?.lastElementChild;
        if(p){
            p.textContent = addPoint(monkeyLorem(85))
        }


        const monkeyImg = document.createElement('img');

        const currentMonkey = getCurrentMonkey(fileNames,visitedMonkeys)

        monkeyImg.setAttribute('src' , `./assets/dall-e/${currentMonkey}`);
        monkeyImg.setAttribute('alt' , `Primate art`);
        monkeyImg.classList.add('monkey-img');
        cardDiv?.classList.add('display-none');


        monkeyImg.addEventListener('load',()=>{
            const skeletonSibilings = project.querySelectorAll('.skeleton');
            skeletonSibilings.forEach((el)=>{
                project.removeChild(el)
            })

            cardDiv?.classList.remove('display-none')
            project.classList.remove('loading')
        })

        if(h3){
            cardDiv?.insertBefore(monkeyImg,h3);
        }
        

    }
}

skeletonJazz();

function getRandomItem(arr:string[]){
    return arr[Math.floor(Math.random()*arr.length)]
}

function getCurrentMonkey(filenames: string[] , visited: string[]){

    while('forever young'){

        if(visited.length === filenames.length){
            throw new Error('limit of this function is the amount of imgs in assets folder')
        }

        let monkey = getRandomItem(filenames);

        if(!(visited.includes(monkey))){
            visited.push(monkey)
            return monkey
        }
    }

}
