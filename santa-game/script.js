var board = document.getElementById('board');
var array = [
	['images/santa_10_points.png',0,0,'image1',10],
	['images/santa_20_points.png',0,0,'image2',20],
	['images/santa_50_points.png',0,0,'image3',50],
    ['images/santa_60_points.png',0,0,'image4',60],
    ['images/santa_70_points.png',0,0,'image5',70],
    ['images/santa_80_points.png',0,0,'image6',80],
    ['images/santa_90_points.png',0,0,'image7',90],
    ['images/santa_100_points.png',0,0,'image8',100],
	['images/snowman1_100_points.png',0,0,'image9',-100]
	/*['images/snowman2_100_points.png',0,0,'image10',-100]
	['images/snowman3_100_points.png',0,0,'image11',-100]
	['images/snowman4_100_points.png',0,0,'image12',-100]*/
]
var total_score = 0;
var scoreDOM = document.getElementById('score');
var timerDOM = document.getElementById('timer');
var timer = 120;
var interval_step = 1000;

function clear(){
	board.innerHTML = '';
}
function random_position(){
	for (var i = 0; i < array.length; i++) {
	var x = Math.round(Math.random()*1000);
	var y = Math.round(Math.random()*600);

	array[i][1] = x+200;
	array[i][2] = y+200;

	}
}
function start_game(){
	clear();
	timer = 120;
	random_position();
	for (var i = 0; i < array.length; i++) {
		var image = document.createElement('img');
		image.src = array[i][0];
		image.style.left = array[i][1]+'px';
		image.style.top= array[i][2]+'px';
		image.id = array[i][3];
		board.appendChild(image);
		click_handler(image.id);	
	}
}
function update_total_score(score){
	total_score += score;
	scoreDOM.innerHTML = 'Подарки: ' + total_score;
}


function suffle_pics(){
	random_position();
	for (var i = 0; i < array.length; i++) {
		var image = document.getElementById(array[i][3]);
		image.src = array[i][0];
		image.style.left = array[i][1]+'px';
		image.style.top= array[i][2]+'px';		
	}
}
function find_pic(pic_id){
	for (var i = 0; i < array.length; i++) {
		if(array[i][3] == pic_id){
			return array[i];
		}
	}
	return false;
}
function click_handler(pic_id){
	var pic = document.getElementById(pic_id);
	if(pic){
		pic.onclick = function(){
			this.src = 'images/bang.png';
			var pic_e = find_pic(this.id);
			if(pic_e != false){
				update_total_score(pic_e[4]);
			}
		}
	}
}
function end_game(){
	clearInterval(interval);
	var desiredLink='http://zvonok.ua/santa-game/santa_game.html';
	document.body.innerHTML = '';
	if (total_score >= 8000) {
	document.body.style.background = 'url(images/winner_min.jpg)';
    document.body.styl.backgroundSize='cover';
        document.getElementsByTagName('body')[0].innerHTML += '<a href="'+desiredLink+'"><img class="button" src="images/again.png" alt="играть сначала"></a>';
	}
	else{
        document.body.style.background = 'url(images/loser_min.jpg)';
        document.body.styl.backgroundSize='cover';
        document.getElementsByTagName('body')[0].innerHTML += '<a href="'+desiredLink+'"><img class="button" src="images/again.png" alt="играть сначала"></a>';
	}
}

function f(n){
	if (n<10) {
		return '0'+n;
	}
	else{
		return n;
	}
}

start_game();
var interval = setInterval(function(){
	timer -= (interval_step/1000);
	timerDOM.innerHTML = 'Время: ' + f(parseInt(timer/60)) + ':' + f(timer - parseInt(timer/60)*60);
	console.log(timer, parseInt(timer/60));
	if(timer <= 0){
		end_game();
		
	}
	if(timer%2){
		suffle_pics();
	}

},interval_step);



