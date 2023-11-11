const inputID = document.getElementById("Todo");
const buttonID = document.getElementById("Knop");
const divID = document.getElementById("mainDiv");
let counterDiv = 0;

function Todo() {
    let woord = inputID.value;
    if (woord.length > 0 && 25 > woord.length) {
        const newDiv = document.createElement("div");
        const newP = document.createElement("p");
        if (6 > counterDiv) {
            newP.innerHTML = `${woord}`;
            newP.classList.add('text-white', 'font-bold', 'ml-3');
            newDiv.classList.add('bg-black', 'h-14', 'w-[28rem]', 'my-5', 'mx-5', 'rounded-lg',
                'flex', 'items-center');
            console.log(divID.appendChild(newDiv));
            console.log(newDiv.appendChild(newP));
            counterDiv++;
        }
    } else {
        console.log("Dat kan niet gozer!");
    }
    console.log(counterDiv);
};

buttonID.addEventListener("click", Todo);