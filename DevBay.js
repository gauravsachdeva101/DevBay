console.log('hi');
let upperNavObj = document.getElementsByClassName('upper-nav')[0];//selecting the upper nav as an object.  The [0] will actually 'select it'.
let upperNav = upperNavObj.getElementsByTagName('li');
let upperNavArr = Array.from(upperNav);
let myAccount = upperNavArr[8];
let socialLinksObj = document.getElementsByClassName('socials')[0];
let socialObj = socialLinksObj.getElementsByTagName('i');
let socialArr = Array.from(socialObj)
let rightSlid = document.getElementsByClassName('rightSlid')[0];
let leftSlid = document.getElementsByClassName('leftSlid')[0];
let jumboDisp = document.getElementsByClassName('jumbodisp')[0];
rightSlid.addEventListener('click',switchR);
leftSlid.addEventListener('click',switchL);
let arr = ["https://www.hlimg.com/images/events/738X538/c_1527765363e.jpg","http://www.indiaonlinepages.com/festivals/navratri/gifs/navratri-dates.jpg","https://cdn1.newsstate.com/images/2019/04/03/navratra-21_5.jpg","https://htoindia.com/wp-content/uploads/2017/05/19-amazing-temple-of-south-india.jpg"];
let counter =3;let jhanda=0;
function switchR(e)
{
    counter++;
    if(counter==4)counter=0;
jumboDisp.style.backgroundImage=`url("${arr[counter]}")`;


}
function switchL(e)
{
counter--;
if(counter==-1)counter=3;
jumboDisp.style.backgroundImage=`url("${arr[counter]}")`;


}

console.log(socialArr);
console.log(myAccount);
myAccount.addEventListener('click',logIN);
function logIN(e) 
{
window.location.href='account.html';
}

var lol = document.getElementsByClassName('sliderRB')[0];
var collec = lol.getElementsByTagName('div');
var ays=[];
var lols = document.getElementsByClassName('sliderPG')[0];
var collecs = lols.getElementsByTagName('div');
var ars=[];

for(var i=0;i<collec.length;i+=2)
{
var tem = collec[i];
ays.push(tem);
}
ays.forEach(nums=>nums.addEventListener('click',(nums)=>{window.location.href='productdescription.html';}))

for(var j=0;j<collecs.length;j+=2)
{
var tems = collecs[j];
ars.push(tems);
}
ars.forEach(num=>num.addEventListener('click',()=>{window.location.href='productdescription.html';}))
