let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];

ListCountry(largeCountries);

function push_countries() {
    let value = document.getElementById("push_array").value;
    if(typeof value !== "undefined" && value != null){ 
        largeCountries.push(value);
        document.getElementById("push_array").value='';
    }
    ListCountry(largeCountries);
}

function pop_countries() {
    largeCountries.pop();
    ListCountry(largeCountries);
}

function shift_countries() {
    largeCountries.shift();
    ListCountry(largeCountries);
}

function unshift_countries() {
    let value = document.getElementById("unshift_array").value;
    if(typeof value !== "undefined" && value != null){ 
        largeCountries.unshift(value);
        document.getElementById("unshift_array").value='';
    }
    ListCountry(largeCountries);
}

function ListCountry(largeCountries){
    let show_countries = '<ul class="countries_list_ul">';
    for(var i=0; i<largeCountries.length; ++i){
        show_countries += "<li>"+largeCountries[i]+"</li>";
    }
    show_countries += "</ul>";
    var redText = document.getElementsByClassName("list_countries");
    redText[0].innerHTML = show_countries;
}