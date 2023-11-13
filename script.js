const inputID = document.getElementById("Todo");
const buttonID = document.getElementById("Knop");
const divID = document.getElementById("mainDiv");
let counterDiv = 0;
let idCounter = 0;
let newDivID;
let newButton2 = document.querySelector("button");
let newButtonID2;
//Functie maken voor elke knop? Zodat ze werken.

function Todo() {
    idCounter++;

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

    function buttonTagFun() {
        const ButtongElements = [];

        for (let i = 0; i < 3; i++) {
            const ButtonTag = document.createElement("button");
            // newButton2.setAttribute('id', `${idCounter}`)
            console.log(ButtonTag.classList.add('bg-green-500', 'rounded', 'border-2', 'border-green-500', 'hover:bg-black', 'h-8', 'w-8'));
            console.log(ButtonTag.classList.add('bg-red-500', 'hover:bg-black', 'border-red-500', 'rounded', 'border-2', 'h-8', 'w-8', 'mx-3'));
            console.log(ButtonTag.classList.add('bg-gray-500', 'rounded', 'border-2', 'hover:bg-black', 'border-gray-500', 'h-8', 'w-8'));
        }



    }

    let woord = inputID.value;
    let iTagFinal = iTagFun();
    let buttonTagsFinal = buttonTagFun();
    buttonTagsFinal;
    if (woord.length > 0 && 30 > woord.length) {
        const newDiv = document.createElement("div");
        const insideDiv = document.createElement("div");
        const newP = document.createElement("p");
        newButtonID2 = document.getElementById(`${idCounter}`);
        newDivID = document.getElementById(`${idCounter}`);
        console.log(newButtonID2);
        if (6 > counterDiv) {
            console.log(newButton2);
            newP.innerHTML = `${woord}`;
            console.log(idCounter);

            newButton2.setAttribute('onclick', 'Delete()');

            insideDiv.classList.add('flex', 'justify-end', 'w-screen', 'mr-5');
            //kijken wat de oplossing is voor de w-screen, want het neemt de hele scherm in (wat logisch is) inplaats van de parent div.
            newP.classList.add('text-white', 'font-bold', 'ml-3', 'w-screen');
            newDiv.classList.add('bg-black', 'h-14', 'w-[28rem]', 'my-5', 'mx-5', 'rounded-lg', 'flex', 'items-center', 'flex-row-reverse');
            console.log(divID.appendChild(newDiv));
            newDiv.appendChild(insideDiv);
            insideDiv.appendChild(newButton);
            newButton.appendChild(iTagFinal[2]);
            newButton2.appendChild(newI);
            newButton3.appendChild(newI2);
            insideDiv.appendChild(newButton2);
            insideDiv.appendChild(newButton3);
            newDiv.appendChild(newP);
            console.log(newDiv.setAttribute('id', `${idCounter}`));
            console.log();
            counterDiv++;
        }
    } else {
        console.log("Dat kan niet gozer!");
    }
    console.log(counterDiv);
};

function Delete() {
    newButtonID2.addEventListener("click", () => {
        newDivID.remove();
    })
}


buttonID.addEventListener("click", Todo);