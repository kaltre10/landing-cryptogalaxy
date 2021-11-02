window.addEventListener("load",()=>{
    document.getElementById("loader").classList.toggle("load-complete")
})

AmCharts.makeChart("chartdiv",
            {
                "type": "pie",
                "angle": 16.2,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "depth3D": 22,
                "innerRadius": 0,
                "labelRadius": 24,
                "baseColor": "#6891A8",
                "titleField": "country",
                "valueField": "litres",
                "fontFamily": "",
                "fontSize": 15,
                "handDrawScatter": 3,
                "theme": "chalk",
                "allLabels": [],
                "balloon": {},
                "titles": [],
                "dataProvider": [
                    {
                        "country": "Team Developers",
                        "litres": "25"
                    },
                    {
                        "country": "Farming In Game",
                        "litres": "45"
                    },
                    {
                        "country": "Presale",
                        "litres": "10"
                    },
                    {
                        "country": "Marketing",
                        "litres": "20"
                    }
                ]
            }
        );