import { monkeyLorem, addPoint, monkeyFileNames, getMonkeyUser , profileNames } from './monkeylorem.js'

const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;
const announcements = document.querySelectorAll('.announcement') as NodeListOf<HTMLDivElement>;
const trending = document.querySelectorAll('.trend') as NodeListOf<HTMLDivElement>;

const cardTemplate = document.getElementById("project-card-template") as HTMLTemplateElement;
const trendTemplate = document.getElementById("trend-template") as HTMLTemplateElement;


let visitedMonkeys : string[] = []
let visitedProfiles : string[] = [];


async function skeletonJazz(parentElement:HTMLDivElement){

        if(!parentElement){
            return
        }

        const isProject = Array.from(projects).includes(parentElement);
        const isAnnouncement = Array.from(announcements).includes(parentElement);
        const isTrend = Array.from(trending).includes(parentElement);

        if(isProject || isAnnouncement){
            parentElement.append(cardTemplate.content.cloneNode(true));
        } else if (isTrend){
            parentElement.append(trendTemplate.content.cloneNode(true));
        }

        const trueItemDivFromTemplate = parentElement.lastElementChild;
        const h3 = trueItemDivFromTemplate?.firstElementChild;
        const p = trueItemDivFromTemplate?.lastElementChild;

        if(h3){
            if(isProject || isAnnouncement){
                h3.textContent = monkeyLorem(15)
            } else if (isTrend){ // in this case h3 is == to p === user_name
                h3.textContent = getMonkeyUser();
            }
        }

        if(p){
            if(isProject){
                p.textContent = addPoint(monkeyLorem(85))
            } else if (isAnnouncement){
                p.textContent = addPoint(monkeyLorem(120))
            } else if (isTrend){
                p.textContent = addPoint(monkeyLorem(20))
            }   
        }

        if(isProject){

            const monkeyImg = populateImg(monkeyFileNames, visitedMonkeys, './assets/dall-e/webp/high/', 'Primate art', 'monkey-img' )

            if(trueItemDivFromTemplate){
                removeSkeletonSibilingsOnLoad(monkeyImg, parentElement, '.skeleton');
                addDisplayRemoveLoadingClass(parentElement, trueItemDivFromTemplate as HTMLDivElement);
                callNextSibiling(parentElement)
            }
            if(h3){
                trueItemDivFromTemplate?.insertBefore(monkeyImg,h3);
            }
        } else if (isAnnouncement){
                    removeAlreadyLoadedSkeletons(parentElement)
                    addDisplayRemoveLoadingClass(parentElement, trueItemDivFromTemplate as HTMLDivElement);
                    callNextSibiling(parentElement);

        } else if (isTrend){

            const currentProfile = populateImg(profileNames, visitedProfiles, './assets/profiles/', 'Profile Icon', 'profile-icon')
                removeSkeletonSibilingsOnLoad(currentProfile, parentElement, '.trend-div');
                addDisplayRemoveLoadingClass(parentElement, trueItemDivFromTemplate as HTMLDivElement);
                callNextSibiling(parentElement);

                parentElement.insertBefore(currentProfile, parentElement.firstElementChild)
                
        }
}

skeletonJazz(projects[0]);
skeletonJazz(announcements[0]);
skeletonJazz(trending[0])

function populateImg(sourceNameList:string[], visited:string[], dir:string, alt:string, imgClass:string){
    const img = document.createElement('img');
    const current = getCurrentMonkey(sourceNameList, visited);
    const path = dir + current

    img.setAttribute('src' , path)
    img.setAttribute('alt' , alt)
    img.classList.add(imgClass)

    console.log(img)

    return img
}


function removeSkeletonSibilingsOnLoad(lastLoadedElement:HTMLElement, parent:HTMLDivElement, selector : string){

    lastLoadedElement.addEventListener('load',()=>{
        const skeletonSibilings = parent.querySelectorAll(selector);
        skeletonSibilings.forEach((el:Element)=>{
            parent.removeChild(el)
        })
    })
}

function removeAlreadyLoadedSkeletons(parent:HTMLDivElement){
    const skeletonSibilings = parent.querySelectorAll('.skeleton');
    skeletonSibilings.forEach((el:Element)=>{
        parent.removeChild(el)
    })
}
function addDisplayRemoveLoadingClass(parent:HTMLDivElement, template:HTMLDivElement){
    parent.classList.remove('loading');
    template?.classList.remove('display-none');
}

function callNextSibiling(parent:HTMLDivElement){
    if(parent.nextElementSibling){
        skeletonJazz(parent.nextElementSibling as HTMLDivElement)
    }
}

// skeletonJazz(trending[0])



function getRandomItem(arr:string[]){
    return arr[Math.floor(Math.random()*arr.length)]
}

function getCurrentMonkey(filenames: string[] , visited: string[]){

    while('forever young'){

        if(visited.length >= filenames.length){
            throw new Error('limit of this function is the amount of imgs in assets folder')
        }

        let monkey = getRandomItem(filenames);

        if(!(visited.includes(monkey))){
            visited.push(monkey)
            return monkey
        }
    }

}
