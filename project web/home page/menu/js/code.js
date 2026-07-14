function filterMenu(category) {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })};