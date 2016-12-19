window.onload = function() {

	var task1 = {
		
		render: function(){
			document.getElementById("screenX").textContent = window.screenX;
			document.getElementById("screenY").textContent = window.screenY;
			document.getElementById("screenWidth").textContent = window.innerWidth;
			document.getElementById("screenHeight").textContent = window.innerHeight;
			document.getElementById("location").textContent = window.location.pathname;
		},
		resize: function(){
			window.addEventListener("resize", this.render);
		},
		devInfo: function(){
			var btnDev = document.getElementById("dev-info");
			btnDev.addEventListener("click", function(){
				
				var displayInfo = document.getElementById("dev-info-container");
				displayInfo.innerHTML = "<br>Raviporn Saetiew <br> Student";
				displayInfo.innerHTML += "<br><a href='https://giftras.github.io/ITE220/ '> https://giftras.github.io/ITE220/ </a>"


			});
		}

	};
	task1.render();
	task1.resize();
	task1.devInfo();
};