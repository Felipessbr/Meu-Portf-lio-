(function () {
    emailjs.init("bPYsKNUOa516NBaZX"); //Public Key
  })();

  const form = document.getElementById("contact-form");
  const loader = document.getElementById("loader");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Mostra o loader
    loader.classList.remove("hidden");

    // Envia o formulário com EmailJS
    emailjs
      .sendForm("service_qzsw6hz", "template_aprmcib", this)
      .then(() => {
        loader.classList.add("hidden");
        form.reset();

        // SweetAlert2 - sucesso
        Swal.fire({
          title: "Mensagem enviada!",
          text: "Obrigado por entrar em contato, retornarei em breve 😊",
          icon: "success",
          confirmButtonColor: "#808080",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => {
        loader.classList.add("hidden");

        // SweetAlert2 - erro
        Swal.fire({
          title: "Erro ao enviar!",
          text: "Houve um problema ao enviar sua mensagem. Tente novamente.",
          icon: "error",
          confirmButtonColor: "#d33",
          showClass: {
            popup: "animate__animated animate__shakeX",
          },
        });

        console.error("Erro:", error);
      });
  });

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

$(document).ready(function() {
    $('#mobile-btn').on('click', function () {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');

    });
});

window.revelar = ScrollReveal({reset:false})


//? TOPO DO SITE

revelar.reveal('.efeito-txt-topo',{
    duration: 2000,
    distance: '50px'
})
revelar.reveal('.efeito-img-topo',{
    duration: 2000,
    distance: '50px',
    delay:100
})

//!SOBRE MIM

revelar.reveal('.imag',{
    duration: 2000,
    distance: '50px',
    delay:100,
    origin: 'left'
})
revelar.reveal('.tx-title',{
    duration: 2000,
    distance: '50px',
    delay:100,
    origin: 'left'
})
revelar.reveal('.tx-titulo',{
    duration: 2000,
    distance: '50px',
    delay:100,
    origin: 'right'
})
revelar.reveal('.sobre-mim',{
    duration: 2000,
    distance: '50px',
    delay:100
})


//* PROJETO

revelar.reveal('#title',{
    duration: 2000,
    distance: '50px',
    delay:100

})
revelar.reveal('.imagem-1',{
    duration: 2000,


})
revelar.reveal('.imagem-2',{
    duration: 2000,
    delay:300

})
revelar.reveal('.imagem-3',{
    duration: 2000,
    delay:500

})

//! HABILIDADES

revelar.reveal('#html-5',{
    duration: 2000,
    distance: '50px',
    delay:500,
    origin:'left'

})

revelar.reveal('#css',{
    duration: 2000,
    distance: '50px',
    delay:500,
    origin:'top'

})

revelar.reveal('#javaScript',{
    duration: 2000,
    distance: '50px',
    delay:500,
    origin:'right'

})
revelar.reveal('#bootstrap',{
    duration: 2000,
    distance: '50px',
    delay:500,
    origin:'left'

})
revelar.reveal('#react',{
    duration: 2000,
    distance: '50px',
    delay:500

})
revelar.reveal('#node',{
    duration: 2000,
    distance: '50px',
    delay:500,
    origin: 'right'

})


//? FORMULARIO

revelar.reveal('.tx1',{
    duration: 2000,
    distance: '50px'

})
revelar.reveal('.tx2',{
    duration: 2000,
    distance: '50px',
    delay:200

})
revelar.reveal('.tx3',{
    duration: 2000,
    distance: '220px',
    delay:400

})
revelar.reveal('.tx4',{
    duration: 2000,
    distance: '50px',
    delay:800
})
