let elementInView = false;
window.addEventListener('scroll', function () {
    const element = document.getElementById('container');
    const bounding = element.getBoundingClientRect();
    const isInView = bounding.top >= 0 && bounding.bottom <= window.innerHeight;



    if (isInView && !elementInView) {
        // Your function here
        // console.log('Element is in view');
        elementInView = true;

        const quantities = {
            students: 1000,
            hospitals: 100,
            water: 28000,
            packages: 290
        };

        const elements = {
            studentsCount: document.getElementById("studentsCount"),
            hospitalsCount: document.getElementById("hospitalsCount"),
            waterCount: document.getElementById("waterCount"),
            packagesCount: document.getElementById("packagesCount")
        };

        const duration = 1500; // 4 seconds
        const interval = 50; // update every 50 milliseconds
        const iterations = duration / interval;

        let currentCounts = {
            students: 0,
            hospitals: 0,
            water: 0,
            packages: 0
        };
 
        const incrementCounts = () => {
            for (let item in quantities) {
                if (currentCounts[item] < quantities[item]) {
                    currentCounts[item] = Math.min(currentCounts[item] + Math.floor(quantities[item] / iterations), quantities[item]);
                    elements[`${item}Count`].textContent = currentCounts[item];
                }
            }
        };

        const counterInterval = setInterval(() => {
            incrementCounts();
            if (Object.values(currentCounts).every(count => count >= quantities[count])) {
                clearInterval(counterInterval);
            }
        }, interval);

    }

    else if (!isInView && elementInView) {
        // The element just left the view
        elementInView = false;
    }
    
});


document.addEventListener("DOMContentLoaded", function () {
    const typed = document.querySelector('.typed');
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000
        });
    }
});
let dis = document.getElementById('dis')
let ones = document.getElementById('job')
let twos = document.getElementById('qurbani')
let threes = document.getElementById('monthly')
let fours = document.getElementById('food')
function four() {
    ones.selected = true
} function three() {
    fours.selected = true
} function two() {
    threes.selected = true
} function one() {
    twos.selected = true
}

       /*  let elementInView = false;
       
       window.addEventListener('scroll', function() {
           const element = document.getElementById('yourElementId');
           const bounding = element.getBoundingClientRect();
           
           // Check if the element is within viewport
           const isInView = bounding.top >= 0 && bounding.bottom <= window.innerHeight;
       
           if (isInView && !elementInView) {
               // The element just came into view
               elementInView = true;
               console.log('Element is in view');
               
               // Your function here
           } else if (!isInView && elementInView) {
               // The element just left the view
               elementInView = false;
           }
       });*/