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




var sales = [
        ["2000", "2011"],
        ["Extremely/Very low/Low (0-80% AMI)", 6797, 3516],
 ["Middle (81-120%)", 6788, 9412],
 ["High (over 120%)", 1964, 4343],


 ["Extremely/Very low/Low (0-80% AMI)", 10173, 4816],
 ["Middle (81-120%)", 7915, 9004],
 ["High (over 120%)", 4728, 12025],


 ["Extremely/Very low/Low (0-80% AMI)", 20979, 12996],
 ["Middle (81-120%)", 21967, 22620],
 ["High (over 120%)", 23440, 33810]
    ];
var rentals = [["2000", "2011"],
    ["Extremely low (0-30% AMI)", 27349, 14075],
 ["Very low (31-50%)", 45611, 24141],
 ["Low (51-80%)", 15994, 15257],
 ["Middle/High (over 80%)", 10023, 41913],


 ["Extremely low (0-30% AMI)", 13385, 8182],
 ["Very low (31-50%)", 14684, 15197],
 ["Low (51-80%)", 3464, 6200],
 ["Middle/High (over 80%)", 5606, 15401],


 ["Extremely low (0-30% AMI)", 6339, 6482],
 ["Very low (31-50%)", 4781, 5031],
 ["Low (51-80%)", 1560, 2066],
 ["Middle/High (over 80%)", 3832, 9708]
];

var sales2 = [
        ["2000", "2011"],
        ["Studio/1 bedroom", 6797, 3516],
 ["2 Bedroom", 10173, 4816],
 ["3+ bedroom", 20979, 12996],


 ["Studio/1 bedroom", 6788, 9412],
 ["2 Bedroom", 7915, 9004],
 ["3+ bedroom", 21967, 22620],


 ["Studio/1 bedroom", 1964, 4343],
 ["2 Bedroom", 4728, 12025],
 ["3+ bedroom", 23440, 33810]
    ];
var rentals2 = [["2000", "2011"],
    ["Studio/1 bedroom", 27349, 14075],
 ["2 bedroom", 13385, 8182],
 ["3+ bedroom", 6339, 6482],


 ["Studio/1 bedroom", 45611, 24141],
 ["2 bedroom", 14684, 15197],
 ["3+ bedroom", 4781, 5031],



 ["Studio/1 bedroom", 15994, 15257],
 ["2 bedroom", 3464, 6200],
 ["3+ bedroom", 1560, 2066],


                ["Studio/1 bedroom", 10023, 41913],
 ["2 bedroom", 5606, 15401],
 ["3+ bedroom", 3832, 9708],

];

$(document).ready(function () {





    $(function () {
        $('#sales_eli').highcharts({
            chart: {
                type: 'line',
                marginTop: 80,
                marginBottom: 40
            },
            title: {
                text: 'Extremely low/very low/low'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["2000", "2011"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 40000,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },

            tooltip:{
             style:{
              width:70   
             }
            },
            series: [{
                    name: sales2[1][0],
                    visible: true,
                    data: [sales2[1][1], sales2[1][2]]
                        }, {
                    name: sales2[2][0],
                    visible: true,
                    data: [sales2[2][1], sales2[2][2]]
                        }, {
                    name: sales2[3][0],
                    visible: true,
                    data: [sales2[3][1], sales2[3][2]]
                        }
                    ]
        }); //end sales_1br
        $('#sales_middle').highcharts({
            chart: {
                type: 'line',
                marginTop: 80,
                marginBottom: 40
            },
            title: {
                text: 'Medium'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["2000", "2011"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 40000,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip:{
             style:{
              width:70   
             }
            },
            series: [{
                    name: sales2[4][0],
                    visible: true,
                    data: [sales2[4][1], sales2[4][2]]
                        }, {
                    name: sales2[5][0],
                    visible: true,
                    data: [sales2[5][1], sales2[5][2]]
                        }, {
                    name: sales2[6][0],
                    visible: true,
                    data: [sales2[6][1], sales2[6][2]]
                        }
                    ]
        }); //end sales_2br
        $('#sales_high').highcharts({
            chart: {
                type: 'line',
                marginTop: 80,
                marginBottom: 40
            },
            title: {
                text: 'High'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["2000", "2011"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 40000,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip:{
             style:{
              width:70   
             }
            },
            series: [{
                    name: sales2[7][0],
                    visible: true,
                    data: [sales2[7][1], sales2[7][2]]
                        }, {
                    name: sales2[8][0],
                    visible: true,
                    data: [sales2[8][1], sales2[8][2]]
                        }, {
                    name: sales2[9][0],
                    visible: true,
                    data: [sales2[9][1], sales2[9][2]]
                        }
                    ]
        }); //end sales_2br


        /*Extremely low (0-30% AMI)
Very low (31-50%)
Low (51-80%)
Middle/High (over 80%)*/

        $('#rentals_eli').highcharts({
            chart: {
                type: 'line',
                marginTop: 80,
                marginBottom: 40
            },
            title: {
                text: 'Extremely low'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["2000", "2011"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 50000,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },

            tooltip:{
             style:{
              width:70   
             }
            },
            series: [{
                    name: rentals2[1][0],
                    visible: true,
                    data: [rentals2[1][1], rentals2[1][2]]
                        }, {
                    name: rentals2[2][0],
                    visible: true,
                    data: [rentals2[2][1], rentals2[2][2]]
                        }, {
                    name: rentals2[3][0],
                    visible: true,
                    data: [rentals2[3][1], rentals2[3][2]]
                        }
                    ]
        }); //end rentals_eli
        $('#rentals_vli').highcharts({
            chart: {
                type: 'line',
                marginTop: 80,
                marginBottom: 40
            },
            title: {
                text: 'Very low'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["2000", "2011"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 50000,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip:{
             style:{
              width:70   
             }
            },
            series: [ {
                    name: rentals2[4][0],
                    visible: true,
                    data: [rentals2[4][1], rentals2[4][2]]
                        },{
                    name: rentals2[5][0],
                    visible: true,
                    data: [rentals2[5][1], rentals2[5][2]]
                        }, {
                    name: rentals2[6][0],
                    visible: true,
                    data: [rentals2[6][1], rentals2[6][2]]
                        }
                    ]
        }); //end rentals_vli
        $('#rentals_low').highcharts({
            chart: {
                type: 'line',
                marginTop: 80,
                marginBottom: 40
            },
            title: {
                text: 'Low'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["2000", "2011"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 50000,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip:{
             style:{
              width:70   
             }
            },
            series: [ {
                    name: rentals2[7][0],
                    visible: true,
                    data: [rentals2[7][1], rentals2[7][2]]
                        }, {
                    name: rentals2[8][0],
                    visible: true,
                    data: [rentals2[8][1], rentals2[8][2]]
                        },{
                    name: rentals2[9][0],
                    visible: true,
                    data: [rentals2[9][1], rentals2[9][2]]
                        }
                    ]
        }); //end rentals_low

        $('#rentals_mdhigh').highcharts({
            chart: {
                type: 'line',
                marginTop: 80,
                marginBottom: 40
            },
            title: {
                text: 'Medium/high'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                gridLineWidth: '0',
                lineWidth: 2,
                categories: ["2000", "2011"],
                labels: {
                    step: 0,
                    x: 0,
                    y: 20
                }
            },
            yAxis: {
                min: 0,
                max: 50000,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip:{
             style:{
              width:70   
             }
            },
            series: [ {
                    name: rentals2[10][0],
                    visible: true,
                    data: [rentals2[10][1], rentals2[10][2]]
                        }, {
                    name: rentals2[11][0],
                    visible: true,
                    data: [rentals2[11][1], rentals2[11][2]]
                        }, {
                    name: rentals2[12][0],
                    visible: true,
                    data: [rentals2[12][1], rentals2[12][2]]
                        }
                     
                    ]
        }); //end rentals_mdhigh

    });

}); //document.ready