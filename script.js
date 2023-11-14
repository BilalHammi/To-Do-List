const inputID = document.getElementById("Todo");
const buttonID = document.getElementById("Knop");
const divID = document.getElementById("mainDiv");
let counterDiv = 0;
let idCounter0 = 0;
let idCounter1 = 1;
let idCounter2 = 2;
let newDivID;
//Functie maken voor elke knop? Zodat ze werken.

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
    const Buttonstyles = ["rounded", "border-2", "hover:bg-black", "h-8", "w-8", 'bg-gray-500', 'border-gray-500', 'mx-3'];
    for (let j = 0; j = IDcounters.length; j++) {
        for (let i = 0; i < 3; i++) {
            const ButtonTag = document.createElement("button");
            ButtonTag.setAttribute('id', `${i}`);
            Buttonstyles.forEach(style => {
                ButtonTag.classList.add(style);
            });
            // ButtonTag.setAttribute("")
            ButtonElements.push(ButtonTag);
        }
        return ButtonElements
    }
}

function Delete() {
    let NewDivFinal = NewDivTag();
    let buttonTagsFinal = buttonTagFun();
    // // NewDivFinal.addEventListener("")
    console.log("Hello");
    NewDivFinal[0].remove();

};


function Todo() {
    idCounter0++;
    idCounter1++
    idCounter2++;

    let deleteKnop = Delete();
    let woord = inputID.value;
    let iTagFinal = iTagFun();
    let buttonTagsFinal = buttonTagFun();
    let NewDivFinal = NewDivTag();
    if (woord.length > 0 && 30 > woord.length) {
        const insideDiv = document.createElement("div");
        const newP = document.createElement("p");
        if (6 > counterDiv) {
            newP.innerHTML = `${woord}`;
            // ButtonTag.setAttribute('onclick', `Delete()`);

            insideDiv.classList.add('flex', 'justify-end', 'w-screen', 'mr-5');
            //Reminder: kijken wat de oplossing is voor de w-screen, want het neemt de hele scherm in (wat logisch is) inplaats van de parent div.
            newP.classList.add('text-white', 'font-bold', 'ml-3', 'w-screen');
            divID.appendChild(NewDivFinal[0]);
            NewDivFinal[0].appendChild(insideDiv);
            console.log(buttonTagsFinal[0].setAttribute('onclick', `Delete()`));
            // console.log(buttonTagsFinal[1].setAttribute('id', `${idCounter3}`));
            // console.log(buttonTagsFinal[2].setAttribute('id', `${idCounter4}`));
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


buttonID.addEventListener("click", Todo);