
const INITIAL_STATE = {
    productdata:[],
    currentProduct:{}
   
};
export default  (state = INITIAL_STATE,action) =>  {

    switch (action.type) {   
        case "ADDPRODUCTS":
            return({
                ...state,
                productdata:action.payload
            }
            
            )
        case "ADDCURRENT":
            return({
                ...state,
                currentProduct:action.payload
            }
            
            )
            
        }


        return state;
}