window.addEventListener("keypress", reDirect, false);

function reDirect(key){
	if (key.shiftKey && key.keyCode == "80") {
		// 4chan.org/pol
		window.location.replace("https://4chan.org/pol/");
	} else if (key.shiftKey && key.keyCode == "66") {
		// 4chan.org/biz
		window.location.replace("https://4chan.org/biz/");
	} else if (key.shiftKey && key.keyCode == "73") {
		// 4chan.org/int
		window.location.replace("https://4chan.org/int/");
	} else if (key.shiftKey && key.keyCode == "72") {
		// 4chan.org/his
		window.location.replace("https://4chan.org/his/");
	} else if (key.shiftKey && key.keyCode == "65") {
		// 4chan.org/adv
		window.location.replace("https://4chan.org/adv/");
	} else if (key.shiftKey && key.keyCode == "83") {
		// 4chan.org/sci
		window.location.replace("https://4chan.org/sci/");
	} else if (key.shiftKey && key.keyCode == "87") {
		// 4chan.org/wg
		window.location.replace("https://4chan.org/wg/");
	} else if (key.shiftKey && key.keyCode == "71") {
		// 4chan.org/wsg
		window.location.replace("https://4chan.org/wsg/");
	} else if (key.shiftKey && key.keyCode == "89") {
		// youtube.com
		window.location.replace("https://youtube.com/");
	} else if (key.shiftKey && key.keyCode == "86") {
		// bitchute.com
		window.location.replace("https://bitchute.com/");
	} else if (key.shiftKey && key.keyCode == "84") {
		// twitter.com
		window.location.replace("https://twitter.com/");
	} else if (key.shiftKey && key.keyCode == "73" && key.keyCode == "48") {
		// instagram.com
		window.location.replace("https://instagram.com/");
	} else if (key.shiftKey && key.keyCode == "83" && key.keyCode == "96") {
		// schoology.org
		window.location.replace("https://schoology.org/");
	} else if (key.shiftKey && key.keyCode == "71") {
		// mail.google.com
		window.location.replace("https://mail.google.com/");
	} else if (key.shiftKey && key.keyCode == "76") {
		// slides.google.com
		window.location.replace("htts://slides.google.com/");
	} else if (key.shiftKey && key.keyCode == "68") {
		// docs.google.com
		window.location.replace("https://docs.google.com/");
	} else if (key.shiftKey && key.keyCode == "76" && key.keyCode == "48") {
		// localhost
		window.location.replace("http://localhost/");
	} else if (key.shiftKey && key.keyCode == "87" && key.keyCode == "51") {
		// w3schools.com
		window.location.replace("https://w3schools.com/");
	} else if (key.shiftKey && key.keyCode == "80" && key.keyCode == "48") {
		// php.net
		window.location.replace("https://php.net/");
	} else if (key.shiftKey && key.keyCode == "71" && key.keyCode == "48") {
		// github.com
		window.location.replace("https://github.com/");
	} else if (key.shiftKey && key.keyCode == "79") {
		//protonmail.com
		window.location.replace("https://protonmail.com/");
	}
}
