AOS.init({
	duration: 1200,
});
(function(){
	let h1 = document.getElementsByTagName("h1"),
		spans = document.getElementsByTagName("span"),
		hamb = document.getElementById("hamb-menu"),
		top = document.querySelector(".top"),
		middle = document.querySelector(".middle"),
		bottom = document.querySelector(".bottom"),
		overlay = document.querySelector(".overlay"),
		project = document.querySelectorAll(".projects"),
		home = document.querySelector(".home"),
		technologies = document.querySelector(".technologies"),
		about = document.querySelector(".about"),
		contact = document.querySelector(".contact"),
		lang = document.querySelectorAll(".language img");
		
	hamb.addEventListener("click", changeHamb);
	project[0].addEventListener("click", function(){goTo("#projects", 500, "easeOutQuad");});
	project[0].addEventListener("click", hideNav);
	project[1].addEventListener("click", function(){goTo("#projects", 500, "easeOutQuad");});
	home.addEventListener("click", function(){goTo("#home", 500, "easeOutQuad");});
	home.addEventListener("click", hideNav);
	technologies.addEventListener("click", function(){goTo("#technologies", 500, "easeOutQuad");});
	technologies.addEventListener("click", hideNav);
	about.addEventListener("click", function(){goTo("#about_me", 500, "easeOutQuad");});
	about.addEventListener("click", hideNav);
	contact.addEventListener("click", function(){goTo("#contact", 500, "easeOutQuad");});
	contact.addEventListener("click", hideNav);
	lang[0].addEventListener("click", changeLanguage);
	lang[1].addEventListener("click", changeLanguage);
	document.addEventListener("scroll", underline);
	document.addEventListener("mouseup", function(){
		if(overlay.style.right === "0px"){
			changeHamb();
		}
	});
	overlay.addEventListener("mouseup", function(e){
		e.stopPropagation();
	});
	setTimeout(function(){
		h1[0].style.color= "rgba(255,255,255,1)";
		h1[0].style.textShadow= "0 0 10px black";
	}, 13000);
	setTimeout(function(){
		spans[0].style.color= "rgba(255,255,255,1)";
		spans[0].style.textShadow= "0 0 10px black";
	}, 2000);
	setTimeout(function(){
		spans[1].style.color= "rgba(255,255,255,1)";
		spans[1].style.textShadow= "0 0 10px black";
	}, 7000);

	function changeHamb(){
		if(hamb.className){
			hamb.style.transform = "rotate(0deg)";
			setTimeout(function(){
				top.style.transform = "rotate(0deg) translateX(0px)";
				top.style.width = "35px";
				top.style.background = "rgba(0, 102, 193, 1)";
			}, 500);
			setTimeout(function(){
				bottom.style.transform = "rotate(0deg) translateX(0px)";
				bottom.style.width = "35px";
				bottom.style.background = "rgba(0, 102, 193, 1)";
			}, 500);
			setTimeout(function(){
				middle.style.transform = "translateX(0px)";
				middle.style.background = "rgba(0, 102, 193, 1)";
			}, 500);
			hamb.className = "";
			if(window.innerWidth < 768){
				overlay.style.width = "25%";
				overlay.style.right = "-25%";
			}else if (window.innerWidth >= 768 && window.innerWidth < 1200){
				overlay.style.width = "40%";
				overlay.style.right = "-40%";
			} else {
				overlay.style.width = "25%";
				overlay.style.right = "-25%";
			}
		} else {
			hamb.style.transform = "rotate(180deg)";
			setTimeout(function(){
				top.style.transform = "rotate(-45deg) translateX(-4px)";
				top.style.width = "25px";
				top.style.background = "white";
			}, 500);
			setTimeout(function(){
				bottom.style.transform = "rotate(45deg) translateX(-4px)";
				bottom.style.width = "25px";
				bottom.style.background = "white";
			}, 500);
			setTimeout(function(){
				middle.style.transform = "translateX(5px)";
				middle.style.background = "white";
			}, 500);
			hamb.className = "active";
			if(window.innerWidth < 768){
				overlay.style.width = "100%";
				overlay.style.right = "0";
			}else if (window.innerWidth >= 768 && window.innerWidth < 1200){
				overlay.style.width = "40%";
				overlay.style.right = "0";
			}else{
				overlay.style.right = "0";
				overlay.style.width = "25%";
			}
		}
	}
	function hideNav(){
		if(window.innerWidth < 768){
			overlay.style.width = "25%";
			overlay.style.right = "-25%";
			changeHamb();
		}
	}
	function underline(){
		var hr = document.getElementsByTagName("hr");
		if(hr[0].parentElement.classList[1] === "aos-animate"){
			hr[0].style.width = "170px";
		}else{
			hr[0].style.width = "100%";
		}
		if(hr[1].parentElement.classList[1] === "aos-animate"){
			hr[1].style.width = "250px";
		}else{
			hr[1].style.width = "100%";
		}
		if(hr[2].parentElement.classList[1] === "aos-animate"){
			hr[2].style.width = "190px";
		}else{
			hr[2].style.width = "100%";
		}
		if(hr[3].parentElement.classList[1] === "aos-animate"){
			hr[3].style.width = "170px";
		}else{
			hr[3].style.width = "100%";
		}
	}
	function changeLanguage(){
		var h1 = document.querySelectorAll("h1");
		var h2 = document.querySelectorAll("h2");
		var h3 = document.querySelectorAll("h3");
		var p = document.querySelectorAll("p");
		var a = document.querySelectorAll("nav ul li a");
		if(this.id === "POL"){
			h1[1].textContent = "Projekty";
			h1[8].textContent = "Technologie";
			h1[9].textContent = "O mnie";
			h1[10].textContent = "Kontakt";
			h2[0].textContent = "Podstawy";
			h2[1].textContent = "Kierunek nauki";
			h3[0].textContent = "Napisz do mnie";
			h3[1].textContent = "lub zadzwoń";
			p[p.length -1].textContent = "Cześć. Mam na imię Tomek. Koduje już od pewnego czasu i im więcej piszę, tym bardziej mi się to podoba. Każdego dnia ucze się czegoś nowego i czytam o wielu technologiach. Zdecydowałem ukierunkować się w stronę front-endu. Tworzenie estetycznych, dobrze działających projektów sprawia mi dużo satysfakcji. Zdaje sobię sprawę że jestem dopiero na początku kariery programistycznej, jednak żądza wiedzy i rozwijania umiejętności silnie mnie motywuje. Poszukuje zatrudnienia lub stażu jako junior front end developer. Z mojej strony mogę zaoferować skrupulatność oraz silną wolę poszerzania swoich kompetencji.";
			a[1].textContent = "PROJEKTY";
			a[2].textContent = "TECHNOLOGIE";
			a[3].textContent = "O MNIE";
			a[4].textContent = "KONTAKT";
		}else{
			h1[1].textContent = "Projects";
			h1[8].textContent = "Technologies";
			h1[9].textContent = "About me";
			h1[10].textContent = "Contact";
			h2[0].textContent = "Fundamentals";
			h2[1].textContent = "Want to learn";
			h3[0].textContent = "Write me an mail";
			h3[1].textContent = "or call me";
			p[p.length -1].textContent = "Hello! My name is Thomas. I heve been coding from some time and the more I write, the more I like it. Every day I learn something new and read about many technologies. I decided to focus on the front-end development. Making estetic, well working projects gives me a lot of contentedness. I realise that I'm still just at just beginning of my development journey but I'm higly motivated by my desire to gain knowledge. I'm looking for employment or practice as the junior front end developer. From my side I can offer scrupulosity and strong will to enhance my competences.";
			a[1].textContent = "PROJECTS";
			a[2].textContent = "TECHNOLOGIES";
			a[3].textContent = "ABOUT ME";
			a[4].textContent = "CONTACT";
		}
	}
})();
function goTo(a, b, c){
	$(a).animatescroll({scrollSpeed: b,easing: c});
}