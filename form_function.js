function Form() {

    formDiv.setAttribute("id", "formdiv");
    formDiv.classList.add('bg-white', 'h-[26rem]', 'w-96', 'z-40', 'rounded-lg', 'absolute', 'bottom-72', 'ml-14', 'flex', 'items-end', 'justify-center');

    for (let i = 0; i < 1; i++) {
        const buttonForm = document.createElement("button");
        const buttonStyle = ['bg-gray-500', 'rounded-md', 'text-white', 'font-bold', 'py-4', 'px-12', 'mx-3', 'mb-3', 'hover:bg-black'];

        buttonStyle.forEach(style => {
            buttonForm.classList.add(style);
        });

        idCounter0++;

        buttonForm.setAttribute('id', `button_${idCounter0}`);

        formDiv.appendChild(buttonForm);

        const cancelButton = document.getElementById(`button_${idCounter0}`);
        const confirmButton = document.getElementById(`button_${idCounter0}`);

        console.log(idCounter0);
        if (idCounter0 === 2) {
            cancelButton.innerHTML = 'Cancel';
        } else {
            confirmButton.innerHTML = 'Confirm';
        }
    }
}

export { Form }