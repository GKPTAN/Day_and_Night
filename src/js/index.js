let toggleWrapper = document.getElementById("dn");
const noite = document.getElementById('noite');
const lua = document.getElementById('lua');
const sol = document.getElementById('clima');
toggleWrapper.addEventListener("click", () => {
    noite.classList.toggle('noite');
    lua.classList.toggle('lua');
    lua.classList.toggle('lua-hidden');
    sol.style.left = '150%';
});