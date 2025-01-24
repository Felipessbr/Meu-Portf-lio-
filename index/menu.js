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
