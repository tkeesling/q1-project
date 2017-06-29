function makeAChart(height, weight) {

	const chart = $('#lineChart')

	var data = {

		datasets: [{
				label: 'Your BMI',
				pointBorderColor: 'rgba(0, 0, 0, 1)',
				pointBorderWidth: 5,
				pointRadius: 20,
				pointStyle: 'crossRot',
				data: [{
					x: height,
					y: weight
				}]
			}, {
				label: 'Underweight',
				fill: true,
				lineTentsion: 0.1,
				backgroundColor: "rgba(21, 175, 231, 0.75)",
				borderColor: 'rgba(0,0,0,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [{
					x: 56,
					y: 80.58
				}, {
					x: 58,
					y: 86.44
				}, {
					x: 60,
					y: 92.50
				}, {
					x: 62,
					y: 98.77
				}, {
					x: 64,
					y: 105.24
				}, {
					x: 66,
					y: 111.93
				}, {
					x: 68,
					y: 118.81
				}, {
					x: 70,
					y: 125.90
				}, {
					x: 72,
					y: 133.20
				}, {
					x: 74,
					y: 140.70
				}, {
					x: 76,
					y: 148.41
				}, {
					x: 78,
					y: 156.33
				}, {
					x: 80,
					y: 164.44
				}]
			},
			{
				label: 'Healthy Weight',
				fill: true,
				lineTentsion: 0.1,
				backgroundColor: "rgba(37, 214, 108, .75)",
				borderColor: 'rgba(0,0,0,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [{
						x: 56,
						y: 108.89
					}, {
						x: 58,
						y: 116.81
					}, {
						x: 60,
						y: 125.00
					}, {
						x: 62,
						y: 133.47
					}, {
						x: 64,
						y: 142.22
					}, {
						x: 66,
						y: 151.25
					}, {
						x: 68,
						y: 160.56
					}, {
						x: 70,
						y: 170.14
					}, {
						x: 72,
						y: 180.00
					}, {
						x: 74,
						y: 190.14
					},
					{
						x: 76,
						y: 200.56
					},
					{
						x: 78,
						y: 211.25
					},
					{
						x: 80,
						y: 222.22
					}
				]
			},
			{
				label: 'Overweight',
				fill: true,
				lineTentsion: .1,
				backgroundColor: "rgba(227, 255, 0, 0.75)",
				borderColor: 'rgba(0,0,0,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [{
					x: 56,
					y: 130.67
				}, {
					x: 58,
					y: 140.17
				}, {
					x: 60,
					y: 150.00
				}, {
					x: 62,
					y: 160.17
				}, {
					x: 64,
					y: 170.67
				}, {
					x: 66,
					y: 181.50
				}, {
					x: 68,
					y: 192.67
				}, {
					x: 70,
					y: 204.17
				}, {
					x: 72,
					y: 216.00
				}, {
					x: 74,
					y: 228.17
				}, {
					x: 76,
					y: 240.67
				}, {
					x: 78,
					y: 253.50
				}, {
					x: 80,
					y: 260
				}]
			},
			{
				label: 'Obese',
				fill: true,
				lineTentsion: 0.1,
				backgroundColor: "rgba(241, 45, 45, 0.71)",
				borderColor: 'rgba(0,0,0,0)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [{
					x: 56,
					y: 260
				}, {
					x: 58,
					y: 260
				}, {
					x: 60,
					y: 260
				}, {
					x: 62,
					y: 260
				}, {
					x: 64,
					y: 260
				}, {
					x: 66,
					y: 260
				}, {
					x: 68,
					y: 260
				}, {
					x: 70,
					y: 260
				}, {
					x: 72,
					y: 260
				}, {
					x: 74,
					y: 260
				}, {
					x: 76,
					y: 260
				}, {
					x: 78,
					y: 260
				}, {
					x: 80,
					y: 260
				}]
			}
		]
	}


	let lineChart = new Chart(chart, {
		type: 'scatter',
		data: data,
		options: {
			title: {
				display: true,
				text: 'BMI Ranges (M/F age 20+)',
				fontSize: 24,
			},
			scales: {
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Height (in)',
						fontSize: 18
					},
					ticks: {
						min: 56,
						max: 80,
						stepSize: 2
					}
				}],
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Weight (lbs)',
						fontSize: 18
					},
					ticks: {
						min: 80,
						max: 260,
						stepSize: 10
					}
				}]
			},
			legend: {
				position: 'bottom',
				labels: {
					fontSize: 14
				}
			}
		}
	}) // end chart
}
