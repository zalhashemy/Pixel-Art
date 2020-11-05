

function makeGrid(height,width){
	for(i = 0;i < height;i++){
		$('#pixelCanvas').prepend('<tr><</tr>');
	}
	for(n = 0;n < width;n++){
		$('tr').append('<td></td>');
	}	
}


$('form').on('submit',function(e){
	$('tr').remove(); 
	e.preventDefault(); 
	let height = $("#inputHeight").val();
	let width = $('#inputWidth').val();
	makeGrid(height,width);
});


$('table').on('click', 'tr td', function(){
	$(this).css("background-color", $('#colorPicker').val());
});

