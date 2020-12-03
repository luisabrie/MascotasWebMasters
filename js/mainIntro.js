const intro = introJs()
intro.setOptions({
    steps: [
        {
            intro: 'Bienvenido a Volver a Casa'
        },
        {
            element: '#step-one',
            intro:'Ayudamos a las mascotas a Volver a Casa. Si perdiste a tu mejor amigo, nosotros podemos ayudarte.'

        },
        {
            element: '#step-two',
            intro: 'Aprende cómo funciona nuestro servicio y de qué manera te podemos ayudar a encontrar a tu mascota en la sección Acerca de',
        },
        {
            element: '#step-three',
            intro: 'Mira la sección de Casos para ver los anuncios más recientes de mascotas desaparecidas',
        },
        {
            element: '#step-four',
            intro: 'Revisa nuestros planes para publicar tu propio anuncio',
        },
        {
            element: '#step-five',
            intro: 'Descubre las actualizaciones sobre nuestros casos en la sección de Noticias'
        },
        {
            element: '#step-six',
            intro: 'Envíanos tus sugerencias o comentarios en la sección Contáctanos'
        }
    ]
})
intro.start()