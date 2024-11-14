let toggleWrapper = document.getElementById("dn");
const noite = document.getElementById('noite');
const lua = document.getElementById('lua');
const sol = document.getElementById('clima');
toggleWrapper.addEventListener("click", () => {
    noite.classList.toggle('noite');
    lua.classList.toggle('lua');
    lua.classList.toggle('lua-hidden');
    if (sol.style.left === '150%') {
        sol.classList.remove('clima');
        sol.style.left = '70%';
        void sol.offsetWidth;
        sol.classList.add('clima');
    } else {
        sol.style.left = '150%';
    };
});