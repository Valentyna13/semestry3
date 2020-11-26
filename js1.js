function $() 
{
	var elements = new Array(); 
	for (var i = 0; i < arguments.length; i++) 
	{
		var element = arguments[i]; 
		if (typeof element == 'string') 
		element = document.getElementById(element); 
		if (arguments.length == 1) 
		return element; 
		elements.push(element); 
	} 
	return elements; 
} 
function js1_f1()
{
	$('b1').style.background="url(logo1.png) repeat-y #fc0";
}
function js1_f2()
{
	$('b1').style.backgroundColor="red";
}
function js1_f01()
{
	$('b1').style.borderBottomColor="navy";
}
function js1_f001()
{
	$('b1').style.borderBottomColor="red";
}
function js1_f02()
{
	$('b02').style.borderRightColor="navy";
}
function js1_f002()
{
	$('b02').style.borderRightColor="red";
}
function js1_f04()
{
	$('b4').style.fontVariant="small-caps";
}
function js1_f004()
{
	$('b4').style.fontVariant="normal";
}
function js1_f007()
{
	$('b7').value='';
}

function js1_f06()
{
	$('b6').style.listStyleType="upper-alpha";
}
function js1_f006()
{
	$('b6').style.listStyleType="circle";
}

function js1_f03()
{
	$('b3').style.paddingLeft = "50px";
}
function js1_f003()
{
	$('b3').style.paddingLeft = "100px";
}

function js1_f05()
{
	$('b5').classList.remove('notblink');
	$('b5').classList.add('blink');
}
function js1_f005()
{
	$('b5').classList.remove('blink');
	$('b5').classList.add('notblink');
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
