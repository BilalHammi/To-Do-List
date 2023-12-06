export function removeBlurSelector() {
    const allDiv = document.querySelectorAll("div");

    allDiv.forEach(div => {
        if (!div.id.includes('exclude1') && !div.id.includes('exclude2') && !div.id.includes('formdiv')) {
            div.classList.remove('blur-md');
        }
    });
}

export function inputForm(styleArray, styleElement, woordValue, parentElement) {
    const array = styleArray;
    const Element = document.createElement(`${styleElement}`);
    let inputName;

    array.forEach(style => {
        Element.classList.add(style);
    });
    switch (styleElement) {
        case "input":
            Element.value = woordValue;
            inputName = document.getElementsByTagName(`${styleElement}`);
            console.log(parentElement.appendChild(Element));
            break;
        case "h1":
            Element.innerHTML = "Change you're goal!";
            console.log(parentElement.appendChild(Element));
            break;
        case "button":
            console.log(parentElement.appendChild(Element));
            break;

        default:
            break;
    }
};

export function formFun(woordValue) {
    const firstDiv = document.getElementById('exclude2');
    const formDiv = document.createElement("div");

    formDiv.setAttribute("id", "formdiv");
    formDiv.classList.add('bg-white', 'h-[17rem]', 'w-96', 'z-40', 'rounded-lg', 'absolute', 'bottom-72', 'ml-14', 'flex', 'items-end', 'justify-center');

    firstDiv.append(formDiv);




    if (woordValue) {
        for (let i = 0; i < 1; i++) {
            inputForm(['rounded-lg', 'w-48', 'h-10', 'border-2', 'border-black', 'mb-[8rem]', 'fixed', 'font-bold', 'pl-3'], "input", woordValue, formDiv);
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

    //transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300

    const formDivID = document.getElementById("formdiv");
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

    //     buttonsInParent[1].addEventListener("click", () => {
    //         woord =
    //     })
};