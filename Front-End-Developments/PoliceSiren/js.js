	var timeout = 30;
		var sayac=0;
		var siren = function() {

      
			if (sayac>30)
			{
				sayac=0
			}
			if (sayac<15)
			{
				if (sayac%2==0)
				{
					$(".kirmizi").css('background',"red")
				}
				else
				{
					$(".kirmizi").css('background',"black")
				}
			}
			else if(sayac<30)
			{
				$(".kirmizi").css('background',"black")
				if (sayac%2==0)
				{
					$(".mavi").css('background',"blue")
				}
				else
				{
					$(".mavi").css('background',"black")
				}
			}
			sayac++;
			setTimeout(siren, timeout);
		};
		siren();