document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart");
  const sidebar = document.querySelector(".cart-menu");
  const sidebarContent = document.querySelector(".cart-menu-cont");

  function showSidebar() {
    sidebar.style.display = "flex";
    document.addEventListener("click", handleClickOutside, true);
  }

  function hideSidebar() {
    sidebar.style.display = "none";
    document.removeEventListener("click", handleClickOutside, true);
  }

  function handleClickOutside(event) {
    if (
      !sidebarContent.contains(event.target) &&
      !cartIcon.contains(event.target)
    ) {
      hideSidebar();
    }
  }

  cartIcon.addEventListener("click", function (event) {
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
      showSidebar();
    } else {
      hideSidebar();
    }
    event.stopPropagation();
  });

  sidebarContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
