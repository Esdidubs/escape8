const passcodes = {
	try1 : 'HHBI',
	try2 : '1514',
	try3 : 'HKPH'
};

let tries = {};

// Items to run in the beginning of the page load
$(function() {
	buttons();
});

function updateTry() {
	tries = {
		try1 : $('span.l1l1').text() + $('span.l1l2').text() + $('span.l1l3').text() + $('span.l1l4').text(),
		try2 : $('span.l2l1').text() + $('span.l2l2').text() + $('span.l2l3').text() + $('span.l2l4').text(),
		try3 : $('span.l3l1').text() + $('span.l3l2').text() + $('span.l3l3').text() + $('span.l3l4').text()
	};
	return tries;
}

// Events for all of the buttons
function buttons() {
	$('.letter-lock').on('click', '.btnUp', function(e) {
		event.preventDefault();
		let tempClass = 'span.' + e.target.name;
		let ltr = $(tempClass).text();
		ltr === 'Z' ? (ltr = 'A') : (ltr = String.fromCharCode(ltr.charCodeAt(0) + 1));
		$(tempClass).text(ltr);
		updateTry();
	});

	$('.letter-lock').on('click', '.btnDown', function(e) {
		event.preventDefault();
		let tempClass = 'span.' + e.target.name;
		let ltr = $(tempClass).text();
		ltr === 'A' ? (ltr = 'Z') : (ltr = String.fromCharCode(ltr.charCodeAt(0) - 1));
		$(tempClass).text(ltr);
		updateTry();
	});

	$('.num-lock').on('click', '.btnUp', function(e) {
		event.preventDefault();
		let tempClass = 'span.' + e.target.name;
		let num = $(tempClass).text();
		num === '9' ? (num = '0') : (num = String.fromCharCode(num.charCodeAt(0) + 1));
		$(tempClass).text(num);
		updateTry();
	});

	$('.num-lock').on('click', '.btnDown', function(e) {
		event.preventDefault();
		let tempClass = 'span.' + e.target.name;
		let num = $(tempClass).text();
		num === '0' ? (num = '9') : (num = String.fromCharCode(num.charCodeAt(0) - 1));
		$(tempClass).text(num);
		updateTry();
	});

	$('.lock').on('click', '.try', function(e) {
		event.preventDefault();
		updateTry();
		let tempMsg = 'div.' + e.target.name;
		let updatedMsg = 'p.' + e.target.name;

		if (tries[e.target.id] === passcodes[e.target.name]) {
			$(updatedMsg).text('Unlocked');
			$(tempMsg).addClass('top-unlock');
			$(tempMsg).removeClass('top-locked');
		}
	});
}
