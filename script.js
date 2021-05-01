
$(()=>{
    let animation = anime({
        targets: '.square',
        rotateZ: anime.stagger([0,130], 
        {
            grid: [5,14], from: 'center',
        }),
        translateY: anime.stagger(-10, 
        {
            grid: [5,14], from: 'center',
            axis: 'x'
        }),
        direction: 'alternate',
        loop: true,
        duration: 1000,
        easing: 'easeInOutSine' // increase delay by 100ms for each elements.
    });
    document.querySelector('button').onclick = animation.pause;

})
