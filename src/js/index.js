let toggleWrapper = document.getElementById("dn");
const noite = document.getElementById('noite');
const lua = document.getElementById('lua');
const sol = document.getElementById('clima');
const contribuidor = document.getElementById('ajudante');
const estrelas = document.getElementById('particles-js');
const html = document.documentElement;
toggleWrapper.addEventListener("click", () => {
    html.classList.toggle('no-scroll');
    toggleWrapper.disabled = true;
    setTimeout(() => {
        toggleWrapper.disabled = false;
    }, 4000);
    noite.classList.toggle('noite');
    lua.classList.toggle('lua');
    lua.classList.toggle('lua-hidden');
    if (sol.style.left === '150%') {
        estrelas.style.opacity = '0';
        contribuidor.style.color = 'black';
        sol.classList.remove('clima');
        sol.style.left = '70%';
        void sol.offsetWidth;
        sol.classList.add('clima');
    } else {
        estrelas.style.opacity = '1';
        sol.style.left = '150%';
        contribuidor.style.color = 'white';
    };
});