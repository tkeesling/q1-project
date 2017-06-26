$(document).ready(function() {
	// button click functionality
	$('.submitbtn').click(function(e) {
		e.preventDefault
		// capture values from input form
		var sex = $('input[name=sex]:checked').val()
		var age = $('#age').val()
		var inches = $('#inches').val()
		var height = $('#height').val()
		var weight = $('#weight').val()
		// console.log(feet);
		console.log(inches);
		console.log(height);

		// attach values to local JSON
		$.getJSON('/values.json', function(data) {
			var obj = data
			obj.sex = sex
			obj.age = age
			obj.weight.value = weight
			obj.height.value = height

			// send AJAX POST request
			$.ajax({
				url: 'https://bmi.p.mashape.com/',
				headers: {
					'X-Mashape-Key': 'DTVX3E5LwAmshSXl3UmrvwEF8nwJp1dXZzXjsnVcj6pKHf8U3n',
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				method: 'POST',
				dataType: 'json',
				data: JSON.stringify(obj),
				success: function(data) {
					var pBMI = data.bmi.value
					var pHealth = data.bmi.status
					var pRisk = data.bmi.risk
					console.log(data);
					// append the results section
					$('.pBMI').text(pBMI)
					$('.pHealth').text(pHealth)
					$('.pRisk').text(pRisk)
				} // end of success
			}) // end of AJAX
		}) // end of getJSON
	}) // end of btn click
}) // end of doc ready
