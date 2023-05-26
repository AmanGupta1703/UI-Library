import Dropdown from "./ninja-ui/dropdown";
import Tooltip from "./ninja-ui/tooltip";
import Tab from "./ninja-ui/tabs";


// creating a tooltip component
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// creating dropdown component
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
    const dropdownContainer = new Dropdown(dropdown);

    dropdownContainer.init();
});

// creating tabbed component
const tabs = new Tab(document.querySelector('.tabs'));
console.log(tabs);
tabs.init();