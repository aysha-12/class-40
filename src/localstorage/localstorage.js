const getData=()=>{
    const storeData=localStorage.getItem("bookmarks")
    if(storeData){
        return JSON.parse(storeData)
    }
    return[]
}

const setdataToLS=(id)=>{
    const data=getData()
    data.push(id)
    localStorage.setItem("bookmarks",JSON.stringify(data))
    
}


export{
    setdataToLS,
    getData
}