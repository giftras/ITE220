window.onload = function() {
	var weather = {
		render: function(){
			var bangkok = document.getElementById("bangkok");
			var london = document.getElementById("london");
			var seoul = document.getElementById("seoul");
		
			
			bangkok.addEventListener("click", function(){
					//alert("bangkok is click");
					$.ajax({

						type: "GET", 
						url:"http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=55d193b8cc97a9dfba634b0c0297f27a",
						success: function(data){
							console.log(data);
							//data.name --> city name
							var city = document.getElementById("city-name");
							city.textContent = data.name;
							//data.weather[0].icon
							var icon = document.getElementById("icon");
							icon.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
							var description = document.getElementById("description");
							description.textContent = data.weather[0].main+"-"+data.weather[0].description;
							var temp = document.getElementById("temp");
							temp.textContent = Math.floor(data.main.temp-273);
						}});

			});
		london.addEventListener("click", function(){
					//alert("bangkok is click");
					$.ajax({
						type: "GET", 
						url:"http://api.openweathermap.org/data/2.5/weather?q=london&appid=55d193b8cc97a9dfba634b0c0297f27a",
						success: function(data){
							console.log(data);
							//data.name --> city name
							var city = document.getElementById("city-name");
							city.textContent = data.name;
							//data.weather[0].icon
							var icon = document.getElementById("icon");
							icon.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
							var description = document.getElementById("description");
							description.textContent = data.weather[0].main+"-"+data.weather[0].description;
							var temp = document.getElementById("temp");
							temp.textContent = Math.floor(data.main.temp-273);
						}});

			});
		seoul.addEventListener("click", function(){
					//alert("bangkok is click");
					$.ajax({
						type: "GET", 
						url:"http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=55d193b8cc97a9dfba634b0c0297f27a",
						success: function(data){
							console.log(data);
							//data.name --> city name
							var city = document.getElementById("city-name");
							city.textContent = data.name;
							//data.weather[0].icon
							var icon = document.getElementById("icon");
							icon.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
							var description = document.getElementById("description");
							description.textContent = data.weather[0].main+"-"+data.weather[0].description;
							var temp = document.getElementById("temp");
							temp.textContent = Math.floor(data.main.temp-273);
						}});

			});

		}

	};
	weather.render();




};
