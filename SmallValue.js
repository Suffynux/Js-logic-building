// Function for finding small value from multiple inputs

const minValue = (num1, num2 , num3)=>{
    
    if(num1 < num2 && num1 < num3) {
        console.log(`${num1} is the smallest number`);
        return
    }
    if(num2 < num1 && num2 < num3) {
        console.log(`${num2} is the smallest number`);
        return
    }
    if(num3 < num2 && num3 < num1) {
        console.log(`${num2} is the smallest number`);
        return
    }
    

}

minValue(34243 ,342342 , 234342)