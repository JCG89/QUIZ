const box = document.querySelector('.box');
const vrais = document.querySelectorAll('.vrai');
const faux = document.querySelectorAll('.faux');
const resp = document.querySelectorAll('.result');
console.log(resp)


vrais.forEach(vrai => {

      vrai.addEventListener('click', () => {
            vrai.classList.add('juste');
            alert('Bonne réponse')
      })
})
faux.forEach(fau => {
      fau.addEventListener('click', () => {
            fau.classList.add('injuste');
            alert('Mauvaise réponse!')
      })
})






