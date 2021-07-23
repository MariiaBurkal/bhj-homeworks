const holes = document.querySelectorAll('.hole')
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

for (let i = 0; i<holes.length; i++) {
    holes[i].onclick = () => {
        if (holes[i].className.includes('hole_has-mole')) {
            dead.textContent++;
        }
        else {
            lost.textContent++;
        }
        if (dead.textContent == 10) {
            alert(`Вы победили`);
        }
        if (lost.textContent == 5) {
            alert(`Вы проиграли`);
        }
    }
}