let carousel = document.querySelector('.car');
let product_cards = document.querySelectorAll('.product-card');
let bitcoin = document.querySelector('#bitcoin-animation');

let car_index = 0;

product_cards.forEach(card =>{
    card.addEventListener('click',()=>{
        carousel.style.transform=`translateZ(-300px) rotateY(${car_index *-90}deg)`;
        console.log('event');
    });    
});

function rotate_car(){
    carousel.style.transform=`translateZ(-600px) rotateY(${car_index *-90}deg)`;
}


function next_face(){
    car_index++;
    rotate_car();
}

function prev_face(){
    car_index--;
    rotate_car();

}


