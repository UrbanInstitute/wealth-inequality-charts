
$(".save-chart").click(function() {
    $(".overlay").css('display','block');
    popUp(this);
});

$(".overlay").click(function(){
	removeOverlay();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { removeOverlay(); }
});

function removeOverlay(){
	$(".overlay").css('display','none');
	d3.select('.popup')
		.remove();
}

function popUp(button){
	var filenames = $(button).data('filenames')

	var popup = d3.select('body')
		.append('div')
		.attr('class','popup');

	var head = popup.append('div')
		.attr('class','popup-title')
		.append('span')
			.text('DOWNLOAD CHART');

	var close = head.append('div')
		.attr('id','close-popup')
		.append('img')
		.attr('src','img/close.png');

	close.on("click",function(){
		removeOverlay();
	});

	var image = popup.append('div')
		.attr('class','popup-image-container')

	var footer = popup.append('div')
		.attr('class','popup-footer');

	if (button.classList.contains('single')){
		singlePopUp(button,footer,image);
	}
	else if (button.classList.contains('double')){
		doublePopUp(button,footer,image);
	}
	else if (button.classList.contains('custom')){
		customPopUp(button,footer,image);
	}
}

function singlePopUp(button,footer,image){

	var filename = $(button).data('filename')

	image
		.append('img')
		.attr('class','single')
		.attr('src','img/'+filename+'.jpg');

	footer.attr('style','height: 60px')
	var container = footer.append('div')
		.attr('class','button-container')

	var jpg = container.append('a')
		.attr('class','btn')
		.attr('id','jpg1')
		.text('JPG')

	var pdf = container.append('a')
		.attr('class','btn')
		.attr('id','pdf1')
		.text('PDF')
	
	var ppt = container.append('a')
		.attr('class','btn')
		.attr('id','ppt1')
		.text('PPT')

	bindButtons(filename,jpg,pdf,ppt);
}

function doublePopUp(button,footer,image){

	var filenames = $(button).data('filenames');
	var headers = $(button).data('headers');
	var f1 = filenames[0];
	var f2 = filenames[1];
	var h1 = headers[0];
	var h2 = headers[1]

	image
		.append('img')
		.attr('class','double')
		.attr('src','img/'+f1+'.jpg');

	image
		.append('img')
		.attr('class','double')
		.attr('src','img/'+f2+'.jpg');

	footer.attr('style','height: 100px')
	image.attr('style','height: 73%')

	var left = footer.append('div')
		.attr('id','popup-left-column')

	var right = footer.append('div')
		.attr('id','popup-right-column')

	left.append('div')
		.attr('id','popup-left-header')
		.text(h1);


	var container = left.append('div')
		.attr('class','button-container')

	var jpg1 = left.append('a')
		.attr('class','btn')
		.attr('id','jpg1')
		.text('JPG')

	var pdf1 = left.append('a')
		.attr('class','btn')
		.attr('id','pdf1')
		.text('PDF')
	
	var ppt1 = left.append('a')
		.attr('class','btn')
		.attr('id','ppt1')
		.text('PPT')

	right.append('div')
		.attr('id','popup-right-header')
		.text(h2);

	
	var container = right.append('div')
		.attr('class','button-container')

	var jpg2 = right.append('a')
		.attr('class','btn')
		.attr('id','jpg1')
		.text('JPG')

	var pdf2 = right.append('a')
		.attr('class','btn')
		.attr('id','pdf1')
		.text('PDF')
	
	var ppt2 = right.append('a')
		.attr('class','btn')
		.attr('id','ppt1')
		.text('PPT')

	bindButtons(f1,jpg1,pdf1,ppt1);
	bindButtons(f2,jpg2,pdf2,ppt2);
}

function customPopUp(button,footer,image){

	var filenames = $(button).data('filenames');
	var headers = $(button).data('headers');
	var f1 = filenames[0];
	var f2 = filenames[1];
	var h1 = headers[0];
	var h2 = headers[1]

	image
		.append('img')
		.attr('class','double')
		.attr('src','img/'+f1+'.gif');

	image
		.append('img')
		.attr('class','double')
		.attr('src','img/'+f2+'.jpg');

	footer.attr('style','height: 100px')
	image.attr('style','height: 73%')

	var left = footer.append('div')
		.attr('id','popup-left-column')

	var right = footer.append('div')
		.attr('id','popup-right-column')

	left.append('div')
		.attr('id','popup-left-header')
		.text(h1);


	var container = left.append('div')
		.attr('class','button-container')

	var gif1 = left.append('a')
		.attr('class','btn')
		.attr('id','jpg1')
		.text('GIF')


	right.append('div')
		.attr('id','popup-right-header')
		.text(h2);

	
	var container = right.append('div')
		.attr('class','button-container')

	var jpg2 = right.append('a')
		.attr('class','btn')
		.attr('id','jpg1')
		.text('JPG')

	var pdf2 = right.append('a')
		.attr('class','btn')
		.attr('id','pdf1')
		.text('PDF')
	
	var ppt2 = right.append('a')
		.attr('class','btn')
		.attr('id','ppt1')
		.text('PPT')

	bindCustomButton(f1,gif1);
	bindButtons(f2,jpg2,pdf2,ppt2);
}

function bindCustomButton(file,gif){
	gif.attr("download",file)
	.attr("href", "img/" + file + ".gif");
}


function bindButtons(file,jpg,pdf,ppt){
	jpg
		.attr("download", file) 
        .attr("href", "img/" + file + ".jpg");

    pdf
		.attr("download", file) 
        .attr("href", "img/" + file + ".pdf");
    
    ppt
		.attr("download", file) 
        .attr("href", "img/" + file + ".ppt");
}