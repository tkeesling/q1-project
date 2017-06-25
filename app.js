$(document).ready(function() {
	// button click functionality
	$('.btn').click(function(e) {
		e.preventDefault
		// capture values from input form
		var sex = $('input[name=sex]:checked').val()
		var age = $('#age').val()
		var height = $('#height').val()
		var weight = $('#weight').val()

		// attach values to local JSON
		$.getJSON('/values.json', function(data) {
			var obj = data
			obj.sex = sex
			obj.age = age
			obj.weight.value = weight
			obj.height.value = height
		}) // end of getJSON
	}) // end of btn click
}) // end of doc ready
