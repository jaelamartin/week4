// tax_funcions.js

function getSoSectax(grossPay){
    return grossPay * 0.062;

}

function getMedicaserTax (grossPay){
    return grossPay * 0.0145;
    
}

function getFedralTax (grossPay, code ){
    let rate = 0; 
    if(withholdingCode == 0) { 
        rate =0.23; 
}else if (withholdingCode ==1) {
rate == 0.21;

}
}