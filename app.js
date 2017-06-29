$(document).ready(function() {
	// button click functionality
	$('.modal').modal()

	$('.submitbtn').click(function(e) {
		e.preventDefault
		// capture values from input form
		$('.finalResults').addClass('finalResults-hide')
		showLoading()

		var sex = $('input[name=sex]:checked').val()
		var age = $('#age').val()
		var feet = $('#feet').val()
		var inches = $('#inches').val()
		var height = feet + '-' + inches
		var weight = $('#weight').val()
		var heightChart = feet * 12 + parseInt(inches)

		// attach values to local JSON
		$.getJSON('/values.json', function(data) {
			var obj = data
			obj.sex = sex
			obj.age = age
			obj.weight.value = weight
			obj.height.value = height
			setTimeout(function() {
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
						var idealWeight = data.ideal_weight
						showResults()

						// append the results section
						$('.pBMI').text(pBMI)
						$('.pHealth').text(pHealth)
						$('.pRisk').text(pRisk)
						$('.yourWeight').text('Current weight: ' + weight + ' lbs')

						kgConverter(idealWeight)
						makeAChart(heightChart, weight)
					}, // end of success
					error: function() {
						alert('Are you sure your information is correct?')
					}
				}) // end of AJAX
			}, 3000) // set timeout
		}) // end of getJSON
	}) // end of btn click

	function kgConverter(str) {
		var arr = str.split(' ')
		var numOne = removeAndConvert(arr[0])
		var numTwo = removeAndConvert(arr[2])
		var returnString = numOne + ' lbs' + ' to ' + numTwo + ' lbs'
		$('.recWeight').text('Ideal weight range: ' + returnString)
	}

	function removeAndConvert(numArr) {
		var onlyNum = (numArr.slice(0, -2) * 2.05).toFixed(1)
		return onlyNum
	}

	function showLoading() {
		$('.logo').addClass('logo-hide')
		$('.loading').removeClass('loading-hide')
	}

	function showResults() {
		$('.loading').addClass('loading-hide')
		$('.finalResults').removeClass('finalResults-hide')
	}

}) // end of doc ready
