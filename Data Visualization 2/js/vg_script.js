var vg_1 = "https://raw.githubusercontent.com/monashjaffy2077/FIT3179_Studio_24/main/Data%20Visualization%202/js/vacc_map.vg.json";
vegaEmbed("#vacc_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "https://raw.githubusercontent.com/monashjaffy2077/FIT3179_Studio_24/main/Data%20Visualization%202/js/vacc_cases.vg.json";
vegaEmbed("#dot_plot", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "https://raw.githubusercontent.com/monashjaffy2077/FIT3179_Studio_24/main/Data%20Visualization%202/js/vacc_brand.vg.json";
vegaEmbed("#pie_plot", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "https://raw.githubusercontent.com/monashjaffy2077/FIT3179_Studio_24/main/Data%20Visualization%202/js/vacc_aus.vg.json";
vegaEmbed("#hc_plot", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);