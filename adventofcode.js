function countFloors (floors) {
	var val=0;
	for (i = 0; i < floors.length; i++){
		var x = floors.charAt(i);
		if (x == "("){
			val+=1;
		}else
		{
			val-=1;
		}
	}
	console.log(floors.length);
	return val;
}

function countGiftWrap (gifts) {

	var giftsArr = gifts.split(",");
	var len= giftsArr.length - 1;
	var tot=0;
	for(i = 0; i < len; i++){
		var giftArr = giftsArr[i].split("x");
		var l = Number(giftArr[0]);
		var h = Number(giftArr[1]) ;
		var w =  Number(giftArr[2]);
		var lh = l*h;
		var lw = l*w;
		var wh = w*h;
		var temp = (2 * lw) + (2 * wh) + (2 * lh) + Math.min(lh, lw, wh);
		console.log(giftArr);
		console.log(temp);
		tot+=temp;
	}
	return tot;
}

function countHouses (directions) {
	var beento = [];
	var cur = "";
	for (i = 0; i < directions.length; i++){
		var x = directions.charAt(i);
		if (x == "<"){
			if (-1 == cur.indexOf("e")){
				cur +="w";
			} else {
				cur = cur.replace('e', '');
			}
		}
		else if (x == ">"){
			if (-1 == cur.indexOf("w")){
				cur +="e";
			} else {
				cur = cur.replace('w', '');
			}
		}
		else if (x == "^"){
			if (-1 == cur.indexOf("s")){
				cur +="n";
			} else {
				cur = cur.replace('s', '');
			}
		}
		else {
			if (-1 == cur.indexOf("n")){
				cur +="s";
			} else {
				cur = cur.replace('n', '');
			}
		}

		var temp1 = cur.split('');
		var temp = temp1.sort().toString();
		temp = temp.replace(/,/g , '');


		if (-1 == beento.indexOf(temp)){
			beento.push(temp);
		}
	}

	console.log(beento)

	return beento.length;
}

// NOT WORKING