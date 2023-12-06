import { formFun } from './FormFunction.js';

const inputID = document.getElementById("Todo");
const buttonID = document.getElementById("Knop");
const divID = document.getElementById("mainDiv");
const firstDiv = document.getElementById('exclude2');
const formDiv = document.createElement("div");
let newButton;
let woord;

let counterDiv = 0;
let buttonCounter = 0;
let idCounter0 = 0;
let idCounter1 = 1;
let idCounter2 = 2;
//Functie maken voor elke knop? Zodat ze werken.
function NewDate(datumChange, NDiv) {
    const NieuwDate = new Date();
    const Newmonth = NieuwDate.getMonth() + 1;

    let FullDate = NieuwDate.getDate() + "-" + Newmonth + "-" + NieuwDate.getFullYear();
    datumChange.classList.add('text-white', 'font-bold', 'flex', 'whitespace-nowrap', 'mb-10');
    datumChange.innerHTML = `${FullDate}`;
    NDiv.appendChild(datumChange);
}

function iTagFun() {
    const iTagArray = ["fa-trash", "fa-pen", "fa-check"];
    const iTagElements = [];

    for (let i = 0; i < iTagArray.length; i++) {
        const element = iTagArray[i];
        const iTag = document.createElement("i");
        iTag.classList.add('fa-solid', element);
        iTag.setAttribute('style', 'color: #ffffff');
        iTagElements.push(iTag);
    }
    return iTagElements;
}

function newDivTag() {
    const NewDivElement = [];
    const styles = ['bg-black', 'h-20', 'w-[28rem]', 'my-5', 'mx-5', 'rounded-lg', 'flex', 'items-center', 'flex-row-reverse'];
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${idCounter0}`);
    styles.forEach(style => {
        newDiv.classList.add(style);
    });
    NewDivElement.push(newDiv);
    return NewDivElement;
}

function buttonTagFun() {
    const ButtonElements = [];
    const IDcounters = ["idCounter0", "idCounter1", "idCounter2"];
    const Buttonstyles = ["rounded", "border-2", "hover:bg-black", "h-8", "w-8", 'bg-gray-500', 'border-gray-500', 'mx-3', 'mt-5'];
    for (let j = 0; j = IDcounters.length; j++) {
        for (let i = 0; i < 3; i++) {
            const ButtonTag = document.createElement("button");
            ButtonTag.setAttribute('id', `${i}`);
            Buttonstyles.forEach(style => {
                ButtonTag.classList.add(style);
            });
            ButtonElements.push(ButtonTag);
        }
        return ButtonElements
    }
}

function buttonTagHover() {
    const inputElement = document.createElement("input");
    let buttonTagsHover = buttonTagFun();
    for (let i = 0; i < buttonTagsHover.length; i++) {
        newButton = buttonTagsHover[i];
        newButton.classList.remove('hover:bg-black');
        console.log(newButton);
    };

    buttonTagsHover.forEach(button => {
        if (button !== inputElement) {
            button.disabled = true;
        }
    });
}

function blurselector() {
    const allDiv = document.querySelectorAll("div");
    firstDiv.appendChild(formDiv);

    allDiv.forEach(div => {
        if (!div.id.includes('exclude1') && !div.id.includes('exclude2') && !div.id.includes('formdiv') && !div.id.includes('exclude3')) {
            div.classList.add('blur-md');
        }
    });
}

function Delete(divToDelete) {
    divToDelete.remove();
};

function Done(diveToChange, newPChange) {
    diveToChange.style.backgroundColor = 'green';
    console.log(newPChange.classList.add('line-through', 'decoration-zinc-700', 'decoration-2'));
    setTimeout(() => {
        Delete(diveToChange);
    }, 3000);
}



function Edit(woordValue) {
    buttonTagHover();
    blurselector();
    formFun(woordValue);
};

function Todo() {
    idCounter0++;
    idCounter1++;
    idCounter2++;
    let woord = inputID.value;
    let iTagFinal = iTagFun();
    let buttonTagsFinal = buttonTagFun();
    let newDivFinal = newDivTag();
    if (woord.length > 0 && 30 > woord.length) {
        const insideDiv = document.createElement("div");
        const insideDivDate = document.createElement("div");
        const newP = document.createElement("p");
        const datum = document.createElement("p");
        if (5 > counterDiv) {
            counterDiv++;
            newP.innerHTML = `${woord}`;
            NewDate(datum, insideDivDate);

            insideDiv.classList.add('flex', 'justify-end', 'w-screen', 'mr-5');
            //Reminder: kijken wat de oplossing is voor de w-screen, want het neemt de hele scherm in (wat logisch is) inplaats van de parent div.
            newP.classList.add('text-white', 'font-bold', 'ml-3', 'w-screen');
            divID.appendChild(newDivFinal[0]);
            newDivFinal[0].appendChild(insideDiv);
            insideDiv.appendChild(insideDivDate);

            console.log(buttonTagsFinal[0].setAttribute('onclick', `
                Delete()
                `));
            console.log(buttonTagsFinal[2].setAttribute('onclick', `
                Done()
                `));
            console.log(buttonTagsFinal[1].setAttribute('onclick', `
                Edit()
                `));

            insideDiv.appendChild(buttonTagsFinal[0]);
            buttonTagsFinal[0].appendChild(iTagFinal[0]);
            buttonTagsFinal[1].appendChild(iTagFinal[1]);
            buttonTagsFinal[2].appendChild(iTagFinal[2]);

            buttonTagsFinal[0].addEventListener('click', () => {
                Delete(buttonTagsFinal[0].closest('div.bg-black'));
                counterDiv--;
            });

            buttonTagsFinal[1].addEventListener('click', () => {
                Edit(woord);
            });

            buttonTagsFinal[2].addEventListener('click', () => {
                Done(newDivFinal[0], newP);
                counterDiv--;
            });

            insideDiv.appendChild(buttonTagsFinal[1]);
            insideDiv.appendChild(buttonTagsFinal[2]);

            newDivFinal[0].appendChild(newP);
        }
    } else {
        console.log("Dat kan niet gozer!");
    }
    console.log(counterDiv);
};

buttonID.addEventListener("click", Todo);
buttonID.addEventListener("click", Todo);