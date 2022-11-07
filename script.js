const boton = document.getElementById("boton2")
const input = document.querySelectorAll(`input`)
const formulario = document.getElementById(`formulario`)


boton.addEventListener(`click`, (capturarDatos) =>{
    alert("enviados")
})


const enviardatos = (even) =>{
    even.preventDefault();
    console.log(
        even.target.nombre.value,
        even.target.apellido.value,
        even.target.email.value,
        even.target.contraseña.value);
    var obj = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        contraseña: contraseña.value
    }
    console.log(obj);
    localStorage.setItem(`datos`,JSON.stringify(obj) );
}



formulario.addEventListener(`submit`, enviardatos)

localStorage.setItem(`datos`,JSON.stringify(obj) );