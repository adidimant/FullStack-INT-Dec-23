console.log(`first`)


//HW Q2



//HW Q3
async function getDataFromOurServer():Promise<any> {
    const response = await fetch("https://our-server.com");
    const data = await response.json();
    return data
}
getDataFromOurServer()
.then((data: any) =>{
    const element = document.getElementById("user-data-el") as HTMLDivElement
    element.innerHTML = data;
})
.catch(err =>{
    console.error(`Error fetching data: ${err}`)
})
