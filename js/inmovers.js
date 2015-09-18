/**
 * Grid-light theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
    href: 'http://fonts.googleapis.com/css?family=Lato:400,600',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);




var data = [
        ["Lived outside of DC", "Lived in DC"],
        ["Extremely low", 13.6, 23.1],
        ["Very low", 13.8, 13.6],
        ["Low", 8.3, 7.4],
        ["Middle", 27.4, 22.1],
        ["High", 36.9, 33.8],

        ["Less than high school", 11.8, 26.6],
        ["High school or GED", 8.6, 15.8],
        ["Some college or associate's degree", 15, 16],
        ["Bachelor's degree", 33.7, 20],
        ["Graduate degree", 30.9, 21.6],

        ["0-17 years", 8.8, 17.8],
        ["18-34 years", 66.6, 30.1],
        ["35-64 years", 21.9, 39.5],
        ["65+ years", 2.6, 12.6],

        ["Single person", 20.6, 21.1],
        ["Two-person, no children", 37.7, 26.5],
        ["Families with children", 22.4, 37.8],
        ["Other", 19.3, 14.7]
    ];



$(document).ready(function () {




    $(function () {
        $('#containerIncome').highcharts({
            chart: {
                type: 'column',
                marginTop: 80,
                marginBottom: 40,
                height:450
            },
            title: {
                //text: 'Income'
                text:''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["Lived outside of DC", "Lived in DC"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 70,
                title: {
                    text: ''
                }
            },
            credits:{
                enabled:true,
				text: "Source: American Community Survey 2011 microdata (obtained from IPUMS-USA) tabluated by NeighborhoodInfo DC.",
				href: ""				
			},
            legend: {
            	floating: 'true',
            	align: 'center',
                verticalAlign: 'top',
                layout: 'horizontal',
                borderWidth: 0,
                y: 20
            },

            series: [{
                    name: data[1][0],
                    visible: true,
                    data: [data[1][1], data[1][2]]
                        }, {
                    name: data[2][0],
                    visible: true,
                    data: [data[2][1], data[2][2]]
                        }, {
                    name: data[3][0],
                    visible: true,
                    data: [data[3][1], data[3][2]]
                        }, {
                    name: data[4][0],
                    visible: true,
                    data: [data[4][1], data[4][2]]
                        }, {
                    name: data[5][0],
                    visible: true,
                    data: [data[5][1], data[5][2]]
                        }
                    ]
        }); //end income

        $('#containerEducation').highcharts({
            chart: {
                type: 'column',
                marginTop: 80,
                marginBottom: 40,
                height:450
            },
            title: {
                //text: 'Education'
                text:''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["Lived outside of DC", "Lived in DC"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 70,
                title: {
                    text: ''
                }
            },
            credits:{
                enabled:true,
				text: "Source: American Community Survey 2011 microdata (obtained from IPUMS-USA) tabluated by NeighborhoodInfo DC.",
				href: ""				
			},
            legend: {
            	floating: 'true',
            	align: 'center',
                verticalAlign: 'top',
                layout: 'horizontal',
                borderWidth: 0,
                y: 20
            },

            series: [{
                    name: data[6][0],
                    visible: true,
                    data: [data[6][1], data[6][2]]
                        }, {
                    name: data[7][0],
                    visible: true,
                    data: [data[7][1], data[7][2]]
                        }, {
                    name: data[8][0],
                    visible: true,
                    data: [data[8][1], data[8][2]]
                        }, {
                    name: data[9][0],
                    visible: true,
                    data: [data[9][1], data[9][2]]
                        }, {
                    name: data[10][0],
                    visible: true,
                    data: [data[10][1], data[10][2]]
                        }
                
                    ]
        }); //end education

        $('#containerAge').highcharts({
            chart: {
                type: 'column',
                marginTop: 80,
                marginBottom: 40,
                height:450
            },
            title: {
                //text: 'Age'
                text:''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["Lived outside of DC", "Lived in DC"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 70,
                title: {
                    text: ''
                }
            },
            credits:{
                enabled:true,
				text: "Source: American Community Survey 2011 microdata (obtained from IPUMS-USA) tabluated by NeighborhoodInfo DC.",
				href: ""				
			},
            legend: {
            	floating: 'true',
            	align: 'center',
                verticalAlign: 'top',
                layout: 'horizontal',
                borderWidth: 0,
                y: 20
            },

            series: [{
                    name: data[11][0],
                    visible: true,
                    data: [data[11][1], data[11][2]]
                        }, {
                    name: data[12][0],
                    visible: true,
                    data: [data[12][1], data[12][2]]
                        }, {
                    name: data[13][0],
                    visible: true,
                    data: [data[13][1], data[13][2]]
                        }, {
                    name: data[14][0],
                    visible: true,
                    data: [data[14][1], data[14][2]]
                        }
                /*,, {
                            name: data[15][0],
                            visible: false,
                            data: [data[15][1], data[15][2]]
                        }, {
                            name: data[16][0],
                            visible: false,
                            data: [data[16][1], data[16][2]]
                        }*/
                    ]
        }); //end Age

        $('#containerFamily').highcharts({
            chart: {
                type: 'column',
                marginTop: 80,
                marginBottom: 40,
                height:450
            },
            title: {
                //text: 'Household'
                text:''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["Lived outside of DC", "Lived in DC"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 70,
                title: {
                    text: ''
                }
            },
            credits:{
                enabled:true,
				text: "Source: American Community Survey 2011 microdata (obtained from IPUMS-USA) tabluated by NeighborhoodInfo DC.",
				href: ""				
			},
            legend: {
            	floating: 'true',
            	align: 'center',
                verticalAlign: 'top',
                layout: 'horizontal',
                borderWidth: 0,
                y: 20
            },

            series: [{
                    name: data[15][0],
                    visible: true,
                    data: [data[15][1], data[15][2]]
                        }, {
                    name: data[16][0],
                    visible: true,
                    data: [data[16][1], data[16][2]]
                        }, {
                    name: data[17][0],
                    visible: true,
                    data: [data[17][1], data[17][2]]
                        }, {
                    name: data[18][0],
                    visible: true,
                    data: [data[18][1], data[18][2]]
                        }
                    ]
        }); //end Age

    });

}); //document.ready