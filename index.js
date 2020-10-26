function writeCards(names, event) {
  let thankyoucards = []
    for (let i = 0; i < names.length; i++) {
    thankyoucards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return thankyoucards
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; 
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; 
  }

  return gifts;
}

wrapGifts(gifts);


function countDown(num) {
    while (num>=0){
        console.log(num);
        num--;
    }
}