const btnTrocar =
  document.getElementById('btn-trocar')

const lampada = document.getElementById('lampada')

let baseURL = "https://4d7ca93d-0620-4073-bed3-f8fe159d95ed-00-273mqabv0oxlp.picard.replit.dev/lampada1.png"

btnTrocar.addEventListener('click', function() {
  if (lampada.src == baseURL + "lampada1.png") {
    lampada.src = ("lampada2.png")
  }

  else {
    lampada.src = "lampada3.png"
  }
})
