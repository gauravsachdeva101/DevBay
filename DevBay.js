console.log('hi');
let upperNavObj = document.getElementsByClassName('upper-nav')[0];//selecting the upper nav as an object.  The [0] will actually 'select it'.
let upperNav = upperNavObj.getElementsByTagName('li');
let upperNavArr = Array.from(upperNav);
let myAccount = upperNavArr[8];
console.log(myAccount);
myAccount.addEventListener('click',logIN);

function logIN(e)
{
window.location.href='account.html';
}
