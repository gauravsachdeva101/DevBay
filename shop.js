console.log('hi');
let slider = document.getElementById('slider');
let val = document.getElementById('value');
let thumb = slider.getElementsByClassName('-webkit-slider-thumb')[0];

slider.addEventListener('input',xor)

function xor(e)
{
val.textContent=`Max Price: Rs.${slider.value}/-`
}

var sizes = document.getElementsByClassName('product');
var sizesArr = Array.from(sizes);
sizesArr.forEach(nums=>nums.addEventListener('click',()=>{window.location.href='productdescription.html'}));

