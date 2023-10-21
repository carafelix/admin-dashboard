import { monkeyLorem, addPoint, fileNames, getMonkeyUser} from './monkeylorem.js'

const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;
const announcements = document.querySelectorAll('.announcement') as NodeListOf<HTMLDivElement>;
const trending = document.querySelectorAll('.trend') as NodeListOf<HTMLDivElement>;

const cardTemplate = document.getElementById("project-card-template") as HTMLTemplateElement;
const trendTemplate = document.getElementById("trend-template") as HTMLTemplateElement;


let visitedMonkeys : string[] = []


async function skeletonJazz(element:HTMLDivElement){

        if(!element){
            return
        }

        const isProject = Array.from(projects).includes(element);
        const isAnnouncement = Array.from(announcements).includes(element);
        const isTrend = Array.from(trending).includes(element);

        if(isProject || isAnnouncement){
            element.append(cardTemplate.content.cloneNode(true));
        } else if (isTrend){
            element.append(trendTemplate.content.cloneNode(true));
        }

        const templateDiv = element.lastElementChild;
        const h3 = templateDiv?.firstElementChild;
        const p = templateDiv?.lastElementChild;

        if(h3){
            if(isProject || isAnnouncement){
                h3.textContent = monkeyLorem(15)
            } else if (isTrend){ // in this case h3 is == to p === user_name
                h3.textContent = getMonkeyUser();
                console.log(h3)
            }
        }

        if(p){
            if(isProject){
                p.textContent = addPoint(monkeyLorem(85))
            } else if (isTrend){
                p.textContent = addPoint(monkeyLorem(120))
            } else if (isTrend){
                p.textContent = addPoint(monkeyLorem(20))
            }   
        }
        if(isProject){
            
        }
        const monkeyImg = document.createElement('img');
        const currentMonkey = getCurrentMonkey(fileNames,visitedMonkeys);
        monkeyImg.setAttribute('src' , `./assets/dall-e/webp/high/${currentMonkey}`)
        monkeyImg.setAttribute('alt' , `Primate art`)
        monkeyImg.classList.add('monkey-img');

        templateDiv?.classList.add('display-none');

        if(templateDiv && isProject){
            removeSkeletonSibilings(monkeyImg, element,templateDiv as HTMLDivElement);
            
            if(h3){
                templateDiv?.insertBefore(monkeyImg,h3);
            }
        }
}

skeletonJazz(projects[0]);


function removeSkeletonSibilings(lastLoadedElement:HTMLElement, parent:HTMLDivElement, template:HTMLDivElement){

    lastLoadedElement.addEventListener('load',()=>{
        const skeletonSibilings = parent.querySelectorAll('.skeleton');
        skeletonSibilings.forEach((el:Element)=>{
            parent.removeChild(el)
        })

        template?.classList.remove('display-none')
        parent.classList.remove('loading');

        if(parent.nextElementSibling){
            skeletonJazz(parent.nextElementSibling as HTMLDivElement)
        }
    })

}

// skeletonJazz(trending[0])



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
