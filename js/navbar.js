const collapseID = document.getElementById('example-collapse-navbar');
console.log(collapseID.classList);
function toggleNavbar(collapseID) {
    collapseID.classList.toggle("lg:hidden");
    collapseID.classList.toggle("block");
}

collapseID.addEventListener('click', toggleNavbar);