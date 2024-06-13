// const createTable = () =>{
//     // creating table
//    const tbl = document.createElement("table")

//    for(i=0;i<2;i++){
//     const tblHead = document.createElement("th")

//     for(j=0;j<2;j++){
//         const row = document.createElement("tr")
//         const text = document.createTextNode(`this is row ${i}`)
//         row.appendChild(text)
//         tblHead.appendChild(row)
//        }
//        tbl.appendChild(tblHead)
//    }
//    document.body.appendChild(tbl)
//    tbl.setAttribute("border","2");
   
// }


// const ice = document.createElement("div")
// const text = document.createTextNode("hello")
// document.body.appendChild(ice)
// ice.appendChild(text)
// console.log(ice)


const fetchFunction = (id , cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data =>{
        cb(data)
    })

}

fetchFunction(56 , (pokemon) =>{
    console.log(pokemon)
})
