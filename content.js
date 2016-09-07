function getKeyword()
{
	alert($('#main-search-box').val());
}

$(document).ready(function(){
	$('button[name="search"]').click(function(){
		getKeyword();
	});

	$(document).keypress(function(e){
		if($('#main-search-box').is(':focus') && e.which==13)
		{
			getKeyword();
		}
	});
});