
$(document).ready(function(){
	// remove names from the dropdown
	$.each(['test test','Dave Ducane','Rob Vaillencourt','Dan Martin',"Dave's Friend2"],function(){
		$("select[name='playerid'] option:contains("+this+')').remove();
	});

	// add FNHC banner
	var a = document.createElement('a');
	var img = document.createElement('img');
	a.title = 'Friday Night Hockey Club';
	a.href ='/Keyla/';
	img.style.maxHeight = '200px';
	img.style.float = 'left';
	img.src = 'http://i.imgur.com/aID2iBI.jpg';
	a.appendChild(img);
	$('.span12.banner')[0].children[0].appendChild(a);
});