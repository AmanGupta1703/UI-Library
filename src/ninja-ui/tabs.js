import "./styles/tabs.css";

class Tab {

	constructor(container) {

		this.container = container;
		this.tabs = container.querySelectorAll(".trigger");

	}

	init() {

		this.tabs.forEach((tab) => {
			tab.addEventListener("click", (e) => {
				this.toggleTabs(e);
				this.toggleContent(e);
			});
		});

	}

	toggleTabs(e) {

		// removing active classes from previously selected element
		this.tabs.forEach((tab) => tab.classList.remove("active"));

		// add active class to the clicked element
		e.target.classList.add("active");

	}

	toggleContent(e) {
        
		// removing active classes from previously selected element
		this.container.querySelectorAll(".content").forEach((content) => {
			content.classList.remove("active");
		});

		// add active class to the clicked eleme
		const selector = e.target.getAttribute("data-target");
		const content = this.container.querySelector(selector);
		content.classList.add("active");
        
	}

}

export default Tab;
