var wraper=document.querySelector(".color_wraper")
			var i=0;
			var arr=['Ac','Ba','Cd','Dc','Ef','Fa','Gg','Ib','Db','Ba','Cc','Aa','Ff','Ce','Ie','Ab','Be','aa','ba','ce','de','ea','ff','ii','ab','cc','da','be','aa','ff','1','','2','3','4','5','6','7','8','9','10'];
			while (i<154) {
				var color_box=document.createElement("div");
				var span=document.createElement("span")

				var h1=document.querySelector("h1");
				color_box.setAttribute("class","box");
				span.setAttribute("class","color_Code");
				wraper.appendChild(color_box);
				color_box.appendChild(span);
				function random_color() {
					for(var j=0;j<7;j++){
						var colors=arr[Math.floor(Math.random()*arr.length)];
						var cls='#'+colors+Math.floor(Math.random()*20935);
						color_box.style.background=`${cls}`;
						h1.style.color=`${cls}`;
						color_box.style.boxShadow =`-2px -2px 5px ${cls},2px 2px 5px ${cls}`;
						h1.style.textShadow =`-2px -2px 5px ${cls},2px 2px 5px ${cls}`;
						span.innerHTML=`${cls}`;
					}
				}
				random_color();
				setInterval(()=>{
					random_color();
				},5000);
		
			span.onclick=()=>{
				console.log(Math.ceil(5.4))
			}
			i++;
			}



