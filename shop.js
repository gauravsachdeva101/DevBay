console.log('hi');
let slider = document.getElementById('slider');
let val = document.getElementById('value');
console.log(slider);
let thumb = slider.getElementsByClassName('-webkit-slider-thumb')[0];

slider.addEventListener('input',xor)

function xor(e)
{
console.log('slider.value')
val.textContent=`Max Price: Rs.${slider.value}/-`
}
