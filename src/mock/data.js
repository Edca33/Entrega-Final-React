

export const productos = [
    
    {
        
        name:'Protocolo Calisto ',
        category:'Xbox',
        description:'Protocolo Calisto',
        price:45,
        img:'https://gagadget.com/media/uploads/calsto.png',
        stock:15,
    },
    {
       
        name:'Grand Theft Auto VI',
        category:'PreOrder',
        description:'Grand Theft Auto VI',
        price:65,
        img:'https://media.vandal.net/m/12-2023/2023125940893_1.jpg',
        stock:5,
    },
    {
        
        name:'Assassins Creed Valhalla',
        category:'Xbox',
        description:'Assassin Creed Valhalla',
        price:25000,
        img:'https://allgamersin.com/wp-content/uploads/2020/05/Assassins-Creed-Valhalla-art.jpg',
        stock:25,
    },
    {
        
        name:'Elden Ring',
        category:'Ps5',
        description:'Elden Ring',
        price:280,
        img:'https://mediamaster.vandal.net/m/74234/elden-ring-202221717295615_1.jpg',
        stock:20,
    },

]


export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },2000)
    })
}



export const getOneProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No existe ese prod')
            }else{
                let oneProduct = productos.find((prod)=> prod.id === id)
                resolve(oneProduct)
            }
        },2000)
    })
}