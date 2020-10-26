function $() 
{var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 
function js1_f1()
{
$('b1').style.background="url(logo1.png) repeat-y #fc0";
}
function js1_f02()
{
$('b02').style.borderRightColor="navy";
}
function js1_f002()
{
$('b02').style.borderRightColor="red";
}
}
function js1_f04()
{
$('b4').style.fontVariant="inherit";
}
function js1_f004()
{
$('b4').style.fontVariant="inherit"
}



function js1_f3()
{
$('b1').style.background="url(logo1.png) repeat-y #fc0";
}
function js1_f4()
{
$('b1').style.paddingLeft ="#f04";
}
function js1_f12()
{
$('b1').style.background="#f00";
}
