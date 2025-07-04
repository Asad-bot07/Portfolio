const menu = document.getElementById('menu');
const PopUp = document.getElementById('info');
const menuContainer = document.querySelector('#info > div');
let count = 0;
menu.addEventListener('click', (e) => {
    e.stopPropagation();
    if (count == 0 || count % 2 !== 0) {
        PopUp.classList.remove('hidden');
        count++;
        setTimeout(() => {
            menuContainer.classList.remove(
                'opacity-0', 'scale-95'
            )
            menuContainer.classList.add(
                'opacity-100', 'scale-95', '-translate-y-2'
            )
        }, 100);
    } else {
        menuContainer.classList.remove(
            'opacity-100', 'scale-95', '-translate-y-2'
        )
        menuContainer.classList.add(
            'opacity-0', 'scale-95'
        )
        setTimeout(() => {
            PopUp.classList.add('hidden');
        }, 300);
        count++;
    }
});
