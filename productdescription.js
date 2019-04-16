console.log('hi');
var descVar = document.getElementsByClassName('m')[0];
var addnVar = document.getElementsByClassName('n')[0];
var desc = document.getElementsByClassName('BD')[0];
var addn = document.getElementsByClassName('AI')[0];

descVar.addEventListener('click',xors);
addnVar.addEventListener('click',ors);

function xors(e)
{
desc.style.display='block';
addn.style.display='none';
descVar.style.color='#0cf';
addnVar.style.color='black';
}

function ors(e)
{
desc.style.display='none';
addn.style.display='block';
addnVar.style.color='#0cf';
descVar.style.color='black';
}