window.onload = function() {
	var weather = {
		render: function(){
			var bangkok = document.getElementById("bangkok");
			bangkok.addEventListener("click", function(){
					//alert("bangkok is click");
					$.ajax({
						type: "GET", 
						url:"http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=55d193b8cc97a9dfba634b0c0297f27a",
						success: function(data){
							console.log(data);
							alert(data.main.temp);
						}
						});
			});
		}
	};
	weather.render();




};
