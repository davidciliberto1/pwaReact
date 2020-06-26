var count = 0;
setInterval(function() {
var heart = document.querySelector('button.wpO6b ');
var arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
if (heart) { 
heart.click();
count++;
console.log(`Haz clickeado ${count} fotos`);
 }
arrow.click();
}, 3000);
