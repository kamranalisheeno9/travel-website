import {React,useState} from 'react'
export const getProducts =(products,currentProduct)=>{
    return(dispatch)=>{
        const product =products
            dispatch({
                type:"ADDPRODUCTS",
                payload:product
    

            })

            const currentP=currentProduct
                
                dispatch({
                    type:"ADDCURRENT",
                    payload:currentP
        
                })
            
                // console.log(currentP)
        
    }
}