async function promise1() {
    console.log('hey')
    const p = await new Promise((res, rej) => {
        setTimeout(() => {
            res(Date.now());    
        }, 1000)
    }) 
}





// promise number 4
const promise4 = new Promise((res, rej) => {
    setTimeout(() => {
        const data = true ? {data: "I have data"} : null; // פנייה ל'דטה' אם הוא 'אמת' להחזיר אובייקט ואם הוא 'שקר' תחזיר ריק
        if (data) {
            res(data); //אם זה true אז הוא יחזיר את האובייקט
        } else {
            rej(data) // fulst יחזיר null
        }
    } ,3000);
}) 
    
    +
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const data = await response.json();
    try {

    }

}