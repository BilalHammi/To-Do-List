// import { updateWoord } from './script.js';
// let test;
// let formInputWorth = '';
// let pElement = ;
let arrayWoords = [];

export function removeBlurSelector() {
    const allDiv = document.querySelectorAll("div");

    allDiv.forEach(div => {
        if (!div.id.includes('exclude1') && !div.id.includes('exclude2') && !div.id.includes('formdiv')) {
            div.classList.remove('blur-md');
        }
    });
}

export function inputForm(styleArray, styleElement, woordValue, parentElement, counter, ParaValue) {
    const array = styleArray;
    const Element = document.createElement(`${styleElement}`);
    let inputName;

    array.forEach(style => {
        Element.classList.add(style);
    });

    switch (styleElement) {

        case "input":
            Element.setAttribute('id', `inputFormID-${counter}`);
            const lastElement = arrayWoords[arrayWoords.length - 1];

            if (arrayWoords.length > 0 && ParaValue.innerHTML === lastElement) {
                console.log(Element.value);
                Element.value = lastElement;
            } else {
                Element.value = woordValue;

            }
            inputName = document.getElementsByTagName(`${styleElement}`);
            console.log(parentElement.appendChild(Element));
            break;
        case "h1":
            Element.innerHTML = "Change you're goal!";
            console.log(parentElement.appendChild(Element));
            break;
        case "button":
            console.log(parentElement.appendChild(Element));
            console.log("Button");
            break;

        default:
            break;
    }
};

export function formFun(ParaValue, woordValue, counter) {
    const firstDiv = document.getElementById('exclude2');
    const formDiv = document.createElement("div");

    formDiv.setAttribute("id", `formdiv-${counter}`);
    formDiv.classList.add('bg-white', 'h-[17rem]', 'w-96', 'z-40', 'rounded-lg', 'absolute', 'bottom-72', 'ml-14', 'flex', 'items-end', 'justify-center');

    firstDiv.append(formDiv);




    if (woordValue) {
        for (let i = 0; i < 1; i++) {
            inputForm(['rounded-lg', 'w-48', 'h-10', 'border-2', 'border-black', 'mb-[8rem]', 'fixed', 'font-bold', 'pl-3'], "input", woordValue, formDiv, counter, ParaValue);
            break;
        }
    }
    if (woordValue) {
        for (let i = 0; i < 1; i++) {
            inputForm(['absolute', 'font-bold', 'text-lg', 'text-center', 'mb-48'], "h1", woordValue, formDiv);
            break;
        }

    }
    inputForm(['bg-gray-500', 'rounded-md', 'text-white', 'font-bold', 'py-3', 'px-10', 'mx-3', 'mb-6', 'hover:bg-black', 'justify-center', 'transition', 'ease-in-out', 'delay-100', 'hover:scale-110', 'duration-200'], "button", woordValue, formDiv);
    inputForm(['bg-gray-500', 'rounded-md', 'text-white', 'font-bold', 'py-3', 'px-10', 'mx-3', 'mb-6', 'hover:bg-black', 'justify-center', 'transition', 'ease-in-out', 'delay-100', 'hover:scale-110', 'duration-200'], "button", woordValue, formDiv);


    const formDivID = document.getElementById(`formdiv-${counter}`);
    console.log(formDivID);
    const buttonsInParent = formDivID.getElementsByTagName("button");

    console.log(buttonsInParent);

    buttonsInParent[0].innerHTML = "Cancel";
    buttonsInParent[1].innerHTML = "Confirm";

    buttonsInParent[0].addEventListener("click", () => {
        formDiv.remove();
        removeBlurSelector();

        for (let i = buttonsInParent.length; i >= 0; i--) {
            if (buttonsInParent[i]) {
                console.log(buttonsInParent[i])
                buttonsInParent[i].remove();
            }
        }
    })

    const inputFormValue = document.getElementById(`inputFormID-${counter}`);
    console.log(inputFormValue.value);

    buttonsInParent[1].addEventListener("click", () => {
        let newValue = inputFormValue.value;

        arrayWoords.push(newValue);
        console.log(ParaValue);
        ParaValue.innerHTML = newValue;

        formDiv.remove();
        removeBlurSelector();
    })
};