//Hola esto es un cambio

let box1 = document.querySelectorAll('.box01');
console.log(box1[0]);
box1[0].addEventListener('click', function () {
    gsap.to('.box01', {
        x:900,
        rotation:360,
        duration:2,
})
});

// gsap.to('.box02', {
//     scrollTrigger: {
//         trigger: '.box02',
//         start: '20px 80%',
//         markers: true,
//         scrub: 3
//     },
//     rotation:360,
//     duration:2
// });

// gsap.to('.box03', {
//     scrollTrigger: {
//         trigger: '.box03',
//         start: '20px 80%',
//         markers: true,
//         scrub: true
//     },
//     rotation:360,
//     duration:4
// });


gsap.to('fondo', {
    scrollTrigger: {
        trigger: 'fondo',
        start: 'center center',
        markers: true,
        scrub: true,
        pin: true
    },
    background: "#00FF00",
    duration:4
});


