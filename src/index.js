import Dropdown from "./ninja-ui/dropdown";
import Tooltip from "./ninja-ui/tooltip";


// creating a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const dropdownContainer = new Dropdown(dropdown);

    dropdownContainer.init();
});