import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({children}){

    const [basket, setBasket] = useState([]);

    const addToBasket=(item)=>{
        //  console.log(item);

        const found = basket.find((x)=> x.id === item.id)
        
        if(found){

            const newFound={...found, amount:found.amount + 1 }

            const newBasket = basket.map((i)=> i.id === newFound.id ? newFound : i )

            setBasket(newBasket)
        }else{
            setBasket([...basket, {...item, amount:1}])
        }
        
    }
    

    const removeFromBasket=(delete_id)=>{
        const found = basket.find((x)=> x.id === delete_id)

        if(found.amount > 1 ){

           const newFound = {...found, amount:found.amount -1}

           const newBasket = basket.map((i)=> i.id === newFound.id ? newFound : i)

           setBasket(newBasket)
        }else {
           const filteredBasket = basket.filter((a)=> a.id !== delete_id)
           setBasket(filteredBasket)
        }
        
    }


    return(

        
        <BasketContext.Provider value={{basket, addToBasket, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    )

}