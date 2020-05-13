export  const generateConfig = () =>{
    return {
        url:"http://localhost",
        port :8082,
        data:{
            uid:1
        }
    }
}


export  const generateAnthorConfig = () =>{
    return {
        url:"http://localhost",
        port :8083,
        data:{
            uid:1
        }
    }
}

export  const generateDateConfig = () =>{
    return {
        url:"http://localhost",
        port :8083,
        data:{
            uid:1
        },
        date:new Date()
    }
}