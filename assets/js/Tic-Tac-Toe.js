//declaring boxes
var boxes = [];
boxes[0] = document.getElementById('r1c1');
boxes[1] = document.getElementById('r1c2');
boxes[2] = document.getElementById('r1c3');
boxes[3] = document.getElementById('r2c1');
boxes[4] = document.getElementById('r2c2');
boxes[5] = document.getElementById('r2c3');
boxes[6] = document.getElementById('r3c1');
boxes[7] = document.getElementById('r3c2');
boxes[8] = document.getElementById('r3c3');
var reset = document.getElementById("reset");
var chance = true;
var win = false;
var val = [];

for (var i =0; i<9; i++)
{
	val[i] = 0;
}

function getIndex(element)
{
	for (var i=0; i<9; i++)
	{
		if(boxes[i] == element)
		{
			return i;
		}
	}
}
//winner checking
function winner()
{
	for(var i=0; i<3; i++)
	{
		var y = i*3;
		if(val[y]==val[y+1] && val[y]==val[y+2] && val[y]!=0)
		{
			won();
			return 0;
		}
	}
	for(var i=0; i<3; i++)
	{
		var y = i;
		if(val[y]==val[y+3] && val[y]==val[y+6] && val[y]!=0)
		{
			won();
			return 0;
		}
	}
	if(val[0]==val[4] && val[0]==val[8]  && val[0]!= 0)
	{
		won();
		return 0;
	}
	else if(val[2]==val[4] && val[2]==val[6]  && val[2]!= 0)
	{
		won();
		return 0;
	}
	else
	{
		if(val[0]!=0 && val[1]!=0 && val[2]!=0 && val[3]!=0 && val[4]!=0 && val[5]!=0 && val[6]!=0 && val[7]!=0 && val[8]!=0)
		{
			draw();
		}
	}
}


//to mention what happens at click
for (var i=0; i<val.length; i++)
{
	boxes[i].addEventListener("click", function(event)
	{
		var ind = getIndex(this);
		if (val[ind] == 0 && win == false)
		{
			if (chance)
			{
				this.innerHTML = '<img src="assets/images/circle.jpeg" width ="75" height ="75" style="padding-left: 12px; padding-top: 5px">';
				val[ind] = 1;
				winner();
				chance = false;
			}
			else
			{
				this.innerHTML = '<img src="assets/images/cross.jpeg" width ="75" height ="75" style="padding-left: 12px; padding-top: 5px">';
				val[ind] = 2;
				winner();
				chance = true;
			}
		}
	});
}

//display draw
function draw()
{
	document.getElementById("draw").style.display = "block";
	win = true;
}

//display win
function won()
{
	if (chance)
	{
		document.getElementById("p1").style.display = "block";
		win =true;
	}
	else
	{
		document.getElementById("p2").style.display = "block";
		win = true;
	}
}

reset.addEventListener("click",function(event){
	
	for (var i =0; i<9; i++)
	{
		val[i] = 0;
	}

	win = false;

	for (var i=0; i<val.length; i++)
	{
		boxes[i].innerHTML = "";
	}

	document.getElementById("draw").style.display = "none";
	document.getElementById("p1").style.display = "none";
	document.getElementById("p2").style.display = "none";

});
