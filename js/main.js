window.onload = () => {

	const goToTop = () => {
		document.body.scrollTop>0 || document.documentElement.scrollTop>0 ? window.scrollBy(0, -50) : setTimeout(goToTop, 20)
	}

	window.onscroll = () => {
		const scrolled = window.pageYOffset || document.documentElement.scrollTop;
		scrolled > 100 ? document.getElementById('back_to_top').style.display = 'flex' :
		document.getElementById('back_to_top').style.display = 'none'
	}


	const el = document.querySelector('#more');

	document.querySelector('#read_more').onclick = () => {
		el.style.display = el.style.display === 'block' ? 'none': 'block'
		el.style.display = el.style.display === 'block' ? document.querySelector('#read_more').value = 'Close' :
		document.querySelector('#read_more').value = 'Read more' 			
	};



};


