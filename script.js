document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".nav-button");
    const tabTitle = document.getElementById("tab-title");
  
    // Function to switch tabs
    function switchTab(tabIndex) {
      // Hide all tabs
      tabs.forEach(tab => (tab.style.display = "none"));
      // Show the selected tab
      document.getElementById(`tab${tabIndex}`).style.display = "block";
  
      // Update the title
      tabTitle.textContent = `Tab ${tabIndex}`;
  
      // Update active button
      buttons.forEach(btn => btn.classList.remove("active"));
      document.querySelector(`.nav-button[data-tab="${tabIndex}"]`).classList.add("active");
    }
  
    // Add click listeners to buttons
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const tabIndex = button.getAttribute("data-tab");
        switchTab(tabIndex);
      });
    });
  
    // Initialize the first tab as active
    switchTab(1);
  });
  