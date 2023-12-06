const formDiv = document.createElement("div");

export function removeBlurSelector() {
    const allDiv = document.querySelectorAll("div");

    allDiv.forEach(div => {
        if (!div.id.includes('exclude1') && !div.id.includes('exclude2') && !div.id.includes('formdiv')) {
            div.classList.remove('blur-md');
        }
    });
}

export function inputForm(styleArray, styleElement, woordValue) {
    const array = styleArray;
    const Element = document.createElement(`${styleElement}`);
    let inputName;
    array.forEach(style => {
        Element.classList.add(style)
        formDiv.appendChild(Element);
    });
    if (styleElement == "input") {
        Element.value = woordValue;
        inputName = document.getElementsByTagName(`${styleElement}`);
    }
};

inputForm(['text-black', 'font-bold'], "h1");

export function formFun(woordValue) {
    formDiv.setAttribute("id", "formdiv");
    formDiv.classList.add('bg-white', 'h-[17rem]', 'w-96', 'z-40', 'rounded-lg', 'absolute', 'bottom-72', 'ml-14', 'flex', 'items-end', 'justify-center');

    if (woordValue) {
        for (let i = 0; i < 1; i++) {
            inputForm(['rounded-lg', 'w-48', 'h-10', 'border-2', 'border-black', 'mb-[8rem]', 'fixed', 'font-bold', 'pl-3'], "input", woordValue);
            break;
        }
    }

    const formDivID = document.getElementById("formdiv");
    const buttonsInParent = formDivID.getElementsByTagName("button");

    inputForm(['bg-gray-500', 'rounded-md', 'text-white', 'font-bold', 'py-3', 'px-10', 'mx-3', 'mb-3', 'hover:bg-black', 'justify-center'], "button", woordValue);

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