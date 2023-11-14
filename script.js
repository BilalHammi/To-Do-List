const inputID = document.getElementById("Todo");
const buttonID = document.getElementById("Knop");
const divID = document.getElementById("mainDiv");
let counterDiv = 0;
let idCounter = 0;
let idCounter2 = 1;
let idCounter3 = 2;
let idCounter4 = 3;
let newDivID;
//Functie maken voor elke knop? Zodat ze werken.

function Todo() {
    idCounter++;
    idCounter2++
    idCounter3++;
    idCounter4++;

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

    function NewDivTag() {
        const NewDivElement = [];
        const styles = ['bg-black', 'h-14', 'w-[28rem]', 'my-5', 'mx-5', 'rounded-lg', 'flex', 'items-center', 'flex-row-reverse'];
        const newDiv = document.createElement("div");
        styles.forEach(style => {
            newDiv.classList.add(style);
        });
        NewDivElement.push(newDiv);
        return NewDivElement;
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
    let NewDivFinal = NewDivTag();
    if (woord.length > 0 && 30 > woord.length) {
        const insideDiv = document.createElement("div");
        const newP = document.createElement("p");

        if (6 > counterDiv) {
            newP.innerHTML = `${woord}`;
            console.log();
            console.log(NewDivFinal[0].setAttribute("id", `${idCounter}`));
            insideDiv.classList.add('flex', 'justify-end', 'w-screen', 'mr-5');
            //Reminder: kijken wat de oplossing is voor de w-screen, want het neemt de hele scherm in (wat logisch is) inplaats van de parent div.
            newP.classList.add('text-white', 'font-bold', 'ml-3', 'w-screen');
            divID.appendChild(NewDivFinal[0]);
            NewDivFinal[0].appendChild(insideDiv);
            console.log(buttonTagsFinal[0].setAttribute('id', `${idCounter2}`));
            console.log(buttonTagsFinal[1].setAttribute('id', `${idCounter3}`));
            console.log(buttonTagsFinal[2].setAttribute('id', `${idCounter4}`));
            insideDiv.appendChild(buttonTagsFinal[0]);
            buttonTagsFinal[0].appendChild(iTagFinal[0]);
            buttonTagsFinal[1].appendChild(iTagFinal[1]);
            buttonTagsFinal[2].appendChild(iTagFinal[2]);

            insideDiv.appendChild(buttonTagsFinal[1]);
            insideDiv.appendChild(buttonTagsFinal[2]);

            NewDivFinal[0].appendChild(newP);
            console.log();
            counterDiv++;
        }
    } else {
        console.log("Dat kan niet gozer!");
    }
    console.log(counterDiv);
};

function Delete() {
    newDivID.remove();
};


buttonID.addEventListener("click", Todo);