//Advertir sobre los acentos
const input = document.getElementById('inputContenido');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');

input.addEventListener('keypress', (event) => {
    const letra = event.key;
    const sinAcento = quitarAcento(letra);
    if (letra !== sinAcento) {
        event.preventDefault();
        alert('No se permiten letras con acento');
    }
});

function quitarAcento(letra) {
    const acentos = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
    };
    return acentos[letra.toLowerCase()] || letra;
}


//Codigo encriptar 
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const inputContenido = document.getElementById('inputContenido');
const salida = document.getElementById('salida');

botonEncriptar.addEventListener('click', function () {
    const textoEncriptado = encrypt(inputContenido.value);

    salida.innerHTML = `
    <textarea disabled id="Texto-salida">${textoEncriptado}</textarea>
  <button id="copiar">Copiar</button>
`;
    inputContenido.value = '';
    const botonCopiar = document.getElementById('copiar');
    botonCopiar.addEventListener('click', function () {
        const textoAEscribir = document.createElement('textarea');
        textoAEscribir.value = textoEncriptado;
        document.body.appendChild(textoAEscribir);
        textoAEscribir.select();
        document.execCommand('copy');
        document.body.removeChild(textoAEscribir);
        alert('Texto copiado al portapapeles');
    });
});

botonDesencriptar.addEventListener('click',function(){
    const textoDesencriptado = decrypt(inputContenido.value);

    salida.innerHTML = `
    <textarea disabled id="Texto-salida">${textoDesencriptado}</textarea>
    <button id="copiar">Copiar</button>
  `;
    inputContenido.value = '';
      const botonCopiar = document.getElementById('copiar');
      botonCopiar.addEventListener('click', function () {
          const textoAEscribir = document.createElement('textarea');
          textoAEscribir.value = textoDesencriptado;
          document.body.appendChild(textoAEscribir);
          textoAEscribir.select();
          document.execCommand('copy');
          document.body.removeChild(textoAEscribir);
          alert('Texto copiado al portapapeles');
      });
})

//Funcion Encriptar
function encrypt(text) {
    const encryptionKeys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let encryptedText = text;

    for (const key in encryptionKeys) {
        encryptedText = encryptedText.replace(new RegExp(key, 'g'), encryptionKeys[key]);
    }

    return encryptedText;
}

//Funcion Desencriptar
function decrypt(encryptedText) {
    const decryptionKeys = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let decryptedText = encryptedText;

    for (const key in decryptionKeys) {
        decryptedText = decryptedText.replace(new RegExp(key, 'g'), decryptionKeys[key]);
    }

    return decryptedText;
}
