var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { monkeyLorem, addPoint, monkeyFileNames, getMonkeyUser, profileNames } from './monkeylorem.js';
const projects = document.querySelectorAll('.project');
const announcements = document.querySelectorAll('.announcement');
const trending = document.querySelectorAll('.trend');
const cardTemplate = document.getElementById("project-card-template");
const trendTemplate = document.getElementById("trend-template");
const anTemplate = document.getElementById("an-card-template");
let visitedMonkeys = [];
let visitedProfiles = [];
function skeletonJazz(parentElement) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!parentElement) {
            return;
        }
        const isProject = Array.from(projects).includes(parentElement);
        const isAnnouncement = Array.from(announcements).includes(parentElement);
        const isTrend = Array.from(trending).includes(parentElement);
        if (isProject) {
            parentElement.append(cardTemplate.content.cloneNode(true));
        }
        else if (isAnnouncement) {
            parentElement.append(anTemplate.content.cloneNode(true));
        }
        else if (isTrend) {
            parentElement.append(trendTemplate.content.cloneNode(true));
        }
        const trueItemDivFromTemplate = parentElement.lastElementChild;
        const h3 = trueItemDivFromTemplate === null || trueItemDivFromTemplate === void 0 ? void 0 : trueItemDivFromTemplate.firstElementChild;
        const p = trueItemDivFromTemplate === null || trueItemDivFromTemplate === void 0 ? void 0 : trueItemDivFromTemplate.lastElementChild;
        if (h3) {
            if (isProject || isAnnouncement) {
                h3.textContent = monkeyLorem(15);
            }
            else if (isTrend) { // in this case h3 is == to p === user_name
                h3.textContent = getMonkeyUser();
            }
        }
        if (p) {
            if (isProject) {
                p.textContent = addPoint(monkeyLorem(85));
            }
            else if (isAnnouncement) {
                p.textContent = addPoint(monkeyLorem(120));
            }
            else if (isTrend) {
                p.textContent = addPoint(monkeyLorem(20));
            }
        }
        if (isProject) {
            const monkeyImg = populateImg(monkeyFileNames, visitedMonkeys, './assets/dall-e/webp/high/', 'monkey-img', 'Primate art');
            if (trueItemDivFromTemplate) {
                monkeyImg.onload = (ev) => {
                    parentElement.querySelectorAll('.skeleton').forEach(skeleton => {
                        parentElement.removeChild(skeleton);
                    });
                    if (parentElement.lastElementChild) {
                        parentElement.lastElementChild.classList.remove('absolute');
                        parentElement.lastElementChild.classList.remove('display-none');
                        parentElement.classList.remove('loading');
                    }
                };
                callNextParentSibiling(parentElement);
            }
            if (h3) {
                trueItemDivFromTemplate === null || trueItemDivFromTemplate === void 0 ? void 0 : trueItemDivFromTemplate.insertBefore(monkeyImg, h3);
            }
        }
        else if (isAnnouncement) {
            removeSkeletonsInsant(parentElement);
            callNextParentSibiling(parentElement);
        }
        else if (isTrend) {
            const profileImg = populateImg(profileNames, visitedProfiles, './assets/profiles/', 'profile-icon', 'Profile Icon', true, true);
            removeSkeletonSibilingsOnLoad(profileImg, parentElement, '.trend-div');
            removeHide(profileImg, parentElement.lastElementChild, true);
            removeHide(profileImg, profileImg, true);
            parentElement.insertBefore(profileImg, parentElement.firstElementChild);
            callNextParentSibiling(parentElement);
        }
    });
}
skeletonJazz(projects[0]);
skeletonJazz(announcements[0]);
skeletonJazz(trending[0]);
function populateImg(sourceNameList, visited, dir, imgClass, alt, absolute, transparent, none) {
    const img = document.createElement('img');
    const current = getCurrentMonkey(sourceNameList, visited);
    const path = dir + current;
    img.setAttribute('src', path);
    img.setAttribute('alt', alt);
    img.classList.add(imgClass);
    if (absolute) {
        img.classList.add('absolute');
    }
    if (transparent) {
        img.classList.add('transparent');
    }
    if (none) {
        img.classList.add('display-none');
    }
    return img;
}
function removeSkeletonSibilingsOnLoad(lastLoadedElement, parent, selector) {
    lastLoadedElement.addEventListener('load', () => {
        if (lastLoadedElement.complete) {
            console.log(lastLoadedElement.complete);
            const skeletonSibilings = parent.querySelectorAll(selector);
            skeletonSibilings.forEach((el) => {
                parent.removeChild(el);
            });
            parent.classList.remove('loading');
        }
    });
}
function removeHide(loadedElement, elementToShow, onload) {
    if (onload) {
        loadedElement.addEventListener('load', () => {
            elementToShow.classList.remove('absolute');
            elementToShow.classList.remove('transparent');
            elementToShow.classList.remove('hide');
            elementToShow.classList.remove('display-none');
        });
    }
    else {
        elementToShow.classList.remove('absolute');
        elementToShow.classList.remove('transparent');
        elementToShow.classList.remove('hide');
        elementToShow.classList.remove('display-none');
    }
}
function removeSkeletonsInsant(parent) {
    const skeletonSibilings = parent.querySelectorAll('.skeleton');
    skeletonSibilings.forEach((el) => {
        parent.removeChild(el);
    });
    parent.classList.remove('loading');
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
    while ('forever young') {
        if (visited.length >= filenames.length) {
            throw new Error('limit of this function is the amount of imgs in assets folder');
        }
        let monkey = getRandomItem(filenames);
        if (!(visited.includes(monkey))) {
            visited.push(monkey);
            return monkey;
        }
    }
}
const openSideButton = document.getElementById('open-sidenav');
const sidebar = document.getElementById('sidebar');
openSideButton === null || openSideButton === void 0 ? void 0 : openSideButton.addEventListener('click', (ev) => {
    if (sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.contains('display')) {
        sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.remove('display');
    }
    else {
        sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.add('display');
    }
});
