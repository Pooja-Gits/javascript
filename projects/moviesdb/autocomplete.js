function createAutoComplete({ rootElement, maxOptions = 10,
    fetchDataIterableCallback, renderOptionCallback,
    clickOptionCallback, clickInputTextCallback }) {
    console.log("manoj is jaffa");
    rootElement.innerHTML = `
        <input class="input" id="searchInput" />
        <div class="dropdown" id="mainDropdown">
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content" id="dropdownContent">

                </div>
            </div>
        </div>
    `;

    const searchInput = rootElement.querySelector("#searchInput");
    const dropdown = rootElement.querySelector("#dropdownContent");
    const mainDropdown = rootElement.querySelector("#mainDropdown");

    searchInput.addEventListener("input", debounce(async (event) => {
        let optionsData = await fetchDataIterableCallback(event.target.value);
        dropdown.innerHTML = "";

        for (let i = 0; i < maxOptions && i < optionsData.length; i++) {
            let optionData = renderOptionCallback(optionsData[i]);
            let anchor = document.createElement("a")
            anchor.innerHTML = optionData;
            anchor.classList.add("dropdown-item");
            dropdown.appendChild(anchor);

            anchor.addEventListener("click", () => {
                event.target.value = clickInputTextCallback(optionsData[i]);
                clickOptionCallback(optionsData[i]);
                mainDropdown.classList.remove("is-active");
            });
        }
        mainDropdown.classList.add("is-active");

        if (optionsData.length === 0) {
            mainDropdown.classList.remove("is-active");
        }

    }), 500);

    document.addEventListener("click", (event) => {
        if (!mainDropdown.contains(event.target)) {
            mainDropdown.classList.remove("is-active");
        }
    });
}