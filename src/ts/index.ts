import { monkeyLorem, addPoint, monkeyFileNames, getMonkeyUser , profileNames } from './monkeylorem.js'

const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;
const announcements = document.querySelectorAll('.announcement') as NodeListOf<HTMLDivElement>;
const trending = document.querySelectorAll('.trend') as NodeListOf<HTMLDivElement>;

const cardTemplate = document.getElementById("project-card-template") as HTMLTemplateElement;
const trendTemplate = document.getElementById("trend-template") as HTMLTemplateElement;
const anTemplate = document.getElementById("an-card-template") as HTMLTemplateElement;



let visitedMonkeys : string[] = []
let visitedProfiles : string[] = [];


async function skeletonJazz(parentElement:HTMLDivElement){

        if(!parentElement){
            return
        }

        const isProject = Array.from(projects).includes(parentElement);
        const isAnnouncement = Array.from(announcements).includes(parentElement);
        const isTrend = Array.from(trending).includes(parentElement);

        if(isProject){
            parentElement.append(cardTemplate.content.cloneNode(true));
        } else if(isAnnouncement){
            parentElement.append(anTemplate.content.cloneNode(true));
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

            const monkeyImg = populateImg(monkeyFileNames, visitedMonkeys, './assets/dall-e/webp/high/', 'monkey-img', 'Primate art')

            if(trueItemDivFromTemplate){
                monkeyImg.onload = (ev)=>{
                    parentElement.querySelectorAll('.skeleton').forEach(skeleton=>{
                        parentElement.removeChild(skeleton)
                    })
                    if(parentElement.lastElementChild){
                        parentElement.lastElementChild.classList.remove('absolute')
                        parentElement.lastElementChild.classList.remove('display-none')
                        parentElement.classList.remove('loading')
                    }
                }
                callNextParentSibiling(parentElement)
            }
            if(h3){
                trueItemDivFromTemplate?.insertBefore(monkeyImg,h3);
            }
        } else if (isAnnouncement){
                removeSkeletonsInsant(parentElement)
                callNextParentSibiling(parentElement);

        } else if (isTrend){

            const profileImg = populateImg(profileNames, visitedProfiles, './assets/profiles/', 'profile-icon', 'Profile Icon', true,true);
                removeSkeletonSibilingsOnLoad(profileImg, parentElement, '.trend-div');
                removeHide(profileImg, parentElement.lastElementChild as HTMLElement, true)
                removeHide(profileImg, profileImg, true)
                parentElement.insertBefore(profileImg, parentElement.firstElementChild)
                callNextParentSibiling(parentElement);
                
        }
}

skeletonJazz(projects[0]);
skeletonJazz(announcements[0]);
skeletonJazz(trending[0])

function populateImg(sourceNameList:string[], visited:string[], dir:string, imgClass:string, alt:string, absolute?:boolean, transparent?:boolean, none?:boolean){
    const img = document.createElement('img');
    const current = getCurrentMonkey(sourceNameList, visited);
    const path = dir + current
    img.setAttribute('src' , path)
    img.setAttribute('alt' , alt)
    img.classList.add(imgClass)
    if(absolute){
        img.classList.add('absolute')
    }
    if(transparent){
        img.classList.add('transparent')
    } if(none){
        img.classList.add('display-none')
    }
    return img
}


function removeSkeletonSibilingsOnLoad(lastLoadedElement:HTMLImageElement, parent:HTMLElement, selector : string){

    lastLoadedElement.addEventListener('load',()=>{
        if(lastLoadedElement.complete){
            console.log(lastLoadedElement.complete)
            const skeletonSibilings = parent.querySelectorAll(selector);
            skeletonSibilings.forEach((el:Element)=>{
                parent.removeChild(el)
            });
            parent.classList.remove('loading')
        }
    })
}

function removeHide(loadedElement:HTMLElement, elementToShow:HTMLElement, onload?: boolean){
    if(onload){
        loadedElement.addEventListener('load', ()=>{
            elementToShow.classList.remove('absolute')
            elementToShow.classList.remove('transparent')
            elementToShow.classList.remove('hide')
            elementToShow.classList.remove('display-none')
        })
    } else{
        elementToShow.classList.remove('absolute')
        elementToShow.classList.remove('transparent')
        elementToShow.classList.remove('hide')
        elementToShow.classList.remove('display-none')
    }
}

function removeSkeletonsInsant(parent:HTMLDivElement){
    const skeletonSibilings = parent.querySelectorAll('.skeleton');
    skeletonSibilings.forEach((el:Element)=>{
        parent.removeChild(el)
    })
}


function callNextParentSibiling(parent:HTMLDivElement){
    if(parent.nextElementSibling){
        skeletonJazz(parent.nextElementSibling as HTMLDivElement)
    }
}

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

const openSideButton = document.getElementById('open-sidenav');
const sidebar = document.getElementById('sidebar')

openSideButton?.addEventListener('click',(ev)=>{
    
    if(sidebar?.classList.contains('display')){
        sidebar?.classList.remove('display')
    } else{
        sidebar?.classList.add('display')
    }
})