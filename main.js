const box = document.querySelector('.box');
const vrais = document.querySelectorAll('.vrai');
const faux = document.querySelectorAll('.faux');
const resp = document.querySelectorAll('.result');


vrais.forEach(vrai => {

      vrai.addEventListener('click', () => {
            vrai.classList.add('juste');
      })
})
faux.forEach(fau => {
      fau.addEventListener('click', () => {
            fau.classList.add('injuste');
      })
})



