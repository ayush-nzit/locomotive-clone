const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


const scrollContainer = document.querySelector('#yourScrollContainerId'); // Replace 'yourScrollContainerId' with the actual ID of your scroll container

let lastScrollPosition = 0;


scroll.on('scroll', (instance) => {
  const currentScrollPosition = instance.scroll.y;

    if (currentScrollPosition < lastScrollPosition) {
        document.querySelector(".train-two").style.transform = "rotateY(0deg)"
       document.querySelector(".train-one").style.transform="rotateY(180deg)"
        
    // Scrolling up logic goes here
    // console.log('Scrolling up!');
  } else if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down logic goes here
         document.querySelector(".train-two").style.transform = "rotateY(180deg)"
       document.querySelector(".train-one").style.transform="rotateY(0deg)"
    // console.log('Scrolling down!');
  }

  lastScrollPosition = currentScrollPosition;
});
