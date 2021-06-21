var firstTime = true;

function showMovie(){
	if(!firstTime){
		document.querySelector('.bg-div').innerHTML = '';
		document.querySelector('.bg-div').remove();
	}
	var name = document.getElementById('search-movie').value;
	var apikey = "202835d2";
	var url = 'http://www.omdbapi.com/?apikey=202835d2&s=' + name;
	var request = new XMLHttpRequest();
 	request.open('GET', url, true);
 	request.onreadystatechange = function(){
 		if(this.readyState == 4 && this.status == 200){
 			var data = JSON.parse(this.response);
 			var m = data.Search;
 			var bg = document.createElement('div');
 			bg.setAttribute('class', 'bg-div');
 			document.body.appendChild(bg);
 			for(var i = 0; i < m.length; i++){
 				firstTime = false;
 				var small = document.createElement('div');
 				small.setAttribute('class', 'small-div');
 				bg.appendChild(small);
 				var image = document.createElement('img');
 				image.setAttribute('id', 'poster');
 				image.setAttribute('src', m[i].Poster);
 				small.appendChild(image);
 				var info = document.createElement('div');
 				info.setAttribute('class', 'info');
 				info.innerHTML = '<strong>' + m[i].Type.toUpperCase() + ': ' + m[i].Title + '</strong><p><em>YEAR: ' + m[i].Year + '</em></p>'; 
 				small.appendChild(info);
 			}	
 		}
 	}
	request.send();
}

