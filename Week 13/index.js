let firstItem = document.getElementById('first-item').innerHTML='110';
let secondItem = document.getElementById('second-item').innerHTML='70';
let thirdItem = document.getElementById('third-item').innerHTML='40';
let fourthItem = document.getElementById('fourth-item').innerHTML='55';

firstItem =+firstItem;
secondItem =+secondItem;
thirdItem =+thirdItem;
fourthItem =+fourthItem;

let itemSum = document.getElementById('subtotal');
itemSum = firstItem + secondItem + thirdItem + fourthItem;
console.log(`${itemSum}`);
subtotal.innerHTML = itemSum;

function subtractTwentyPercent(itemSum) {
    let result = itemSum - (0.2 * itemSum);
    return result;
  }
let discountedSum = subtractTwentyPercent(itemSum);
console.log(discountedSum);


let discount = document.getElementById("finalDiscount");
finalDiscount.addEventListener("click", function() {
let discountedSum = subtractTwentyPercent(itemSum);
subtotal.innerHTML = discountedSum;
});