/*
Required Callbacks
1. Add the Autocomplete input to the DOM
2. Fetch Data based on autocomplete inputs text
3. Iterate through results to call a render text function on auto complete html
*/

async function createAutocomplete({ itemType, rootElement, fetchDataCallback, optionItemCallback, onOptionClick, optionValue }) {
    // 1. Add the Autocomplete input to the DOM
    rootElement.innerHTML = `
        <h4 class="title is-4">Search for ${itemType}</h4>
        <input class="input searchInput" type="text" placeholder="Search for ${itemType}" />
        <div class="dropdown searchDropDown">
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content anchorsHere">
                    
                </div>
            </div>
        </div>
        `;

    // 2. & 3.
    const input = rootElement.querySelector(".searchInput");
    input.addEventListener("input", (event) => onInput(event, rootElement, fetchDataCallback, optionItemCallback, onOptionClick, optionValue));
}

const onInput = debounce(async (event, rootElement, fetchDataCallback, optionItemCallback, onOptionClick, optionValue) => {
    let anchorsHere = rootElement.querySelector(".anchorsHere");
    let searchDropDown = rootElement.querySelector(".searchDropDown");

    //Clear all Options
    anchorsHere.innerHTML = "";

    //2. Fetch Data based on autocomplete inputs text
    let textValue = event.target.value;
    let options = await fetchDataCallback(textValue);

    //3. Iterate through results to call a render text function on auto complete html
    for (let item of options) {
        let itemHtml = optionItemCallback(item);
        let itemAnchor = document.createElement("a");
        itemAnchor.innerHTML = `${itemHtml}`;
        itemAnchor.addEventListener("mouseenter", () => { itemAnchor.classList.add("is-active") });
        itemAnchor.addEventListener("mouseleave", () => { itemAnchor.classList.remove("is-active") });
        itemAnchor.addEventListener("click", async () => {
            event.target.value = optionValue(item);
            await onOptionClick(item);
            searchDropDown.classList.remove("is-active");
        });
        itemAnchor.classList.add("dropdown-item");
        anchorsHere.appendChild(itemAnchor);
    }

    if (!options || options.length === 0)
        searchDropDown.classList.remove("is-active");
    else
        searchDropDown.classList.add("is-active");

    //Hide the drop down if user clicks anyplace on the form other than autocomplete
    document.addEventListener("click", (event) => {
        if (!rootElement.contains(event.target))
            searchDropDown.classList.remove("is-active");
    });

}, 500);

