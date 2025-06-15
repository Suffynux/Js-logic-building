function calculateArea(length , width){
    const area = length * width;

    // Error check for length and width values
    if(length<1 || width<1) {
        throw new Error(`Length and width values must be greater than 1 please enter correct values ${"Length: ", length , "Width: " , width}`)
    }
    console.log(area);
    return;
}

calculateArea(-1, -34)