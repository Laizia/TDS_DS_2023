const cardContent = window.document.getElementsByClassName("card-content")[0];
var countIndex = 0;
var lista_items = [];

function saveListStorage() {
    const items = window.document.querySelectorAll("li")

    lista_items = [];

    items.forEach((item) => {
        const id = item.id;
        const input = item.getElementsByTagName("input")[0];
        const status = item.getElementsByTagName("span")[1].innerHTML === "check_circle";
        
        if(input.value !== ""){
            lista_items.push({
                id: id,
                value: input.value,
                status : status,
            });
        }

        lista_items.push({
            id: id,
            value: input.value,
            status: status,
        });

    });
    window.localStorage.setItem("dados", JSON.stringify(lista_items));
}

function LoadItems() {
    const list = window.localStorage.getItem("dados");

    if (list) {
        const data = JSON.parse(list);

        data.forEach((item) => {
            addItem(item);
            countIndex = item.id;
        });
    }
    else {
        window.localStorage.setItem("dados", []);
    }

};

function deleteComponent(index) {
    const itemDelete = window.document.getElementById(index)
    itemDelete.outerHTML = "";

}

function onChecked(index) {
    const itemChecked = window.document.getElementById(index)
    const itemRad = itemChecked.getElementsByClassName("item-rad")[0];
    const span = itemRad.getElementsByTagName("span")[0];
    const contentInput = itemChecked.getElementsByClassName("card-content-input")[0];

    const isExistElemnt = itemChecked.getElementsByClassName("item-rad-checked");

    const input = itemChecked.getElementsByTagName("input")[0];

    //checked


    if (isExistElemnt.length <= 0) {
        if (input.value.trim() !== "") {
            itemRad.setAttribute("class", "item-rad item-rad-checked");
            contentInput.setAttribute("class", "card-content-input card-content-input-checked");
            span.innerHTML = "check_circle";
        }
    }
    else {
        itemRad.setAttribute("class", "item-rad");
        contentInput.setAttribute("class", "card-content-input");
        span.innerHTML = "radio_button_unchecked";
    }

}

function addItem(item) {

    if (item) {
        appendComponent(item.id, item.value, item.status)
    }
    else {
        countIndex++
        const item = window.document.getElementById(countIndex -1);
        if (item) {
            const input = item.getElementsByTagName("input")[0];
            if (input.value.trim() !== "") {
                appendComponent(countIndex);
            }
            else {
                appendComponent(countIndex);
            }
        }
    }

}

function appendComponent(index, value, status) {
    var li = window.document.createElement("li");
    li.setAttribute("id", index)
    li.setAttribute("class", "card-content-item");

    //CONSTROI DIV-DEL
    var btnClose = window.document.createElement("div");
    btnClose.setAttribute("class", "item-del");
    btnClose.setAttribute("onClick", "deleteComponent(" + (index) + ")");

    li.appendChild(btnClose);

    //CONSTROI DIV-SPAN
    var spanClose = window.document.createElement("span");
    spanClose.setAttribute("class", "material-symbols-outlined");
    spanClose.innerHTML = "close";

    btnClose.appendChild(spanClose);

    //constroi div descrição
    var itemDescription = window.document.createElement("div");
    itemDescription.setAttribute("class", "item-description");

    var cardContentInput = window.document.createElement("div");
    // cardContentInput.setAttribute("class", "card-content-input");

    if (status) {
        cardContentInput.setAttribute("class", "card-content-input card-content-input-checked");
    }
    else {
        cardContentInput.setAttribute("class", "card-content-input");
    }


    //constriu input
    var input = window.document.createElement("input");
    input.disabled = status;

    if (value) {
        input.value = value;
    }


    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    input.addEventListener("blur", () => {
        saveListStorage();
    });

    cardContentInput.appendChild(input);
    itemDescription.appendChild(cardContentInput);
    li.appendChild(itemDescription);

    // div item rad
    var itemRad = window.document.createElement("div");

    if (status) {
        itemRad.setAttribute("class", "item-rad item-rad-checked");
    }
    else {
        itemRad.setAttribute("class", "item-rad");
    }


    itemRad.setAttribute("onClick", "onChecked(" + (index) + ")");

    var spanChecked = window.document.createElement("span");
    spanChecked.setAttribute("class", "material-symbols-outlined");

    if (status) {
        spanChecked.innerHTML = "check_circle";
    }
    else {
        spanChecked.innerHTML = "radio_button_unchecked";
    }

    itemRad.appendChild(spanChecked);

    li.appendChild(itemRad);

    cardContent.appendChild(li);

    input.focus();

}
LoadItems();
