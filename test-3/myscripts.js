function check_discount() {
    let value = document.getElementById("discount").value;
    if(typeof value !== "undefined" && value != null && !isNaN(value)){ 

        // less than 6 years old -> free
        if(value < 6){
            document.getElementById("discount_code").innerHTML = 'Free';
        }
        // 6 to 17 years old     -> child discount
        else if(value >= 6 && value <= 17 ){
            document.getElementById("discount_code").innerHTML = 'child discount';
        }
        // 18 to 26 years old    -> student discount
        else if(value >= 18 && value <= 26 ){
            document.getElementById("discount_code").innerHTML = 'student discount';
        }
        // 27 to 66 years old    -> full price
        else if(value >= 27 && value <= 66 ){
            document.getElementById("discount_code").innerHTML = 'full price';
        }
        // over 66 years old     -> senior citizen discount
        else{
            document.getElementById("discount_code").innerHTML = 'senior citizen discount';
        }

        document.getElementById("discount").value='';
    }
}
