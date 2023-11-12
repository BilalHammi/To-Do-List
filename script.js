const inputID = document.getElementById("Todo");
const buttonID = document.getElementById("Knop");
const divID = document.getElementById("mainDiv");
let counterDiv = 0;

function Todo() {
    let woord = inputID.value;
    if (woord.length > 0 && 25 > woord.length) {
        const newDiv = document.createElement("div");
        const insideDiv = document.createElement("div");
        const newP = document.createElement("p");
        const newButton = document.createElement("button");
        const newButton2 = document.createElement("button");
        const newButton3 = document.createElement("button");
        if (6 > counterDiv) {
            newP.innerHTML = `${woord}`;
            newButton.classList.add('bg-green-500', 'rounded', 'border-2', 'border-green-500', 'hover:bg-black', 'h-8', 'w-8');
            newButton2.classList.add('bg-red-500', 'hover:bg-black', 'border-red-500', 'rounded', 'border-2', 'h-8', 'w-8', 'mx-3');
            newButton3.classList.add('bg-gray-500', 'rounded', 'border-2', 'hover:bg-black', 'border-gray-500', 'h-8', 'w-8');
            insideDiv.classList.add('flex', 'justify-end', 'w-screen', 'mr-5');
            //kijken wat de oplossing is voor de w-screen, want het neemt de hele scherm in (wat logisch is) inplaats van de parent div.
            newP.classList.add('text-white', 'font-bold', 'ml-3', 'w-screen');
            newDiv.classList.add('bg-black', 'h-14', 'w-[28rem]', 'my-5', 'mx-5', 'rounded-lg', 'flex', 'items-center', 'flex-row-reverse');
            console.log(divID.appendChild(newDiv));
            console.log(newDiv.appendChild(insideDiv));
            console.log(insideDiv.appendChild(newButton));
            console.log(insideDiv.appendChild(newButton2));
            console.log(insideDiv.appendChild(newButton3));
            console.log(newDiv.appendChild(newP));
            counterDiv++;
        }
    } else {
        console.log("Dat kan niet gozer!");
    }
    console.log(counterDiv);
};

buttonID.addEventListener("click", Todo);