const inputID = document.getElementById("Todo");
const buttonID = document.getElementById("Knop");
const divID = document.getElementById("mainDiv");
let counterDiv = 0;
let idCounter = 0;
let newDivID;
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
        const ButtonElements = [];
        const Buttonstyles = ["rounded", "border-2", "hover:bg-black", "h-8", "w-8", 'bg-gray-500', 'border-gray-500', 'mx-3'];
        for (let i = 0; i < 3; i++) {

            const ButtonTag = document.createElement("button");

            Buttonstyles.forEach(style => {
                ButtonTag.classList.add(style);
            });
            ButtonElements.push(ButtonTag);
        }
        return ButtonElements
    }

    let woord = inputID.value;
    let iTagFinal = iTagFun();
    let buttonTagsFinal = buttonTagFun();
    buttonTagsFinal;
    if (woord.length > 0 && 30 > woord.length) {
        const newDiv = document.createElement("div");
        const insideDiv = document.createElement("div");
        const newP = document.createElement("p");
        newDivID = document.getElementById(`${idCounter}`);
        if (6 > counterDiv) {
            newP.innerHTML = `${woord}`;
            console.log(idCounter);

            insideDiv.classList.add('flex', 'justify-end', 'w-screen', 'mr-5');
            //kijken wat de oplossing is voor de w-screen, want het neemt de hele scherm in (wat logisch is) inplaats van de parent div.
            newP.classList.add('text-white', 'font-bold', 'ml-3', 'w-screen');
            newDiv.classList.add('bg-black', 'h-14', 'w-[28rem]', 'my-5', 'mx-5', 'rounded-lg', 'flex', 'items-center', 'flex-row-reverse');
            console.log(divID.appendChild(newDiv));
            newDiv.appendChild(insideDiv);
            insideDiv.appendChild(buttonTagsFinal[0]);
            buttonTagsFinal[0].appendChild(iTagFinal[0]);
            buttonTagsFinal[1].appendChild(iTagFinal[1]);
            buttonTagsFinal[2].appendChild(iTagFinal[2]);
            insideDiv.appendChild(buttonTagsFinal[1]);
            insideDiv.appendChild(buttonTagsFinal[2]);
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