import './style.css'

const form = document.querySelector(".conteiner-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  
  const formData = new FormData(form);

  const datos = {
    nombre: formData.get("nform"),
    apellido: formData.get("lform"),
    genero: formData.get("genero"),
    areas: formData.getAll("areas"),
    horario: formData.get("horario"),
    comentarios: formData.get("comentarios"),
  };

  console.log(datos);
});

