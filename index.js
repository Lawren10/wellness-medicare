const review = document.querySelectorAll('.review-item');

let count = 0;

review[0].style.cssText = 'transform:translateX(0); opacity:1; transition: all 1s ease-in;'
    

const moveReviews = () => {
  count++
  if (count < 0) {
    count = review.length - 1;
  }

  review.forEach((item, index) => {
    
  
  if (index === count) {
    item.style.cssText = 'transform:translateX(0); opacity:1; transition: all 1s ease-in'
    
  }

  if (index === count - 1) {
    item.style.cssText = 'transform:translateX(-100%); opacity:1; transition: all 1s ease-in;'
  
    }

  if (index === count - 2) {
    item.style.cssText = 'transform:translateX(100%); opacity:0; '
  
  } 

  })

  if (count > review.length - 1) {
    review[0].style.cssText = 'transform:translateX(0); opacity:1; transition: all 1s ease-in;'
    review[count - 1].style.cssText = 'transform:translateX(100%); opacity:0; '
    count = 0;
  }


}

setInterval(moveReviews, 10000);


