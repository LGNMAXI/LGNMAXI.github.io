const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando mensaje, aguarde un momento.';

   const serviceID = 'default_service';
   const templateID = 'template_7rx735j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      swal('Mensaje enviado correctamente.','','success');

    }, (err) => {
      btn.value = 'Enviar';
      swal('Intente nuevamente.','error');
    });
});