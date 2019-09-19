


export const setFatQuantityBreakfast = (datafood,foodChoice) => {
    
    // const foodChoice= "Noisette"
    //je crée le tableau d'objets lipide
    const lipidicFood = [];
    datafood.map((food)=> {
        if(food.name === foodChoice){
            lipidicFood.push(food)
                
        }
    })
    
    const fatFood = lipidicFood[0]["lipides"];
    const q_prot_p_dej_din = 16 ;
    const quantityFood = Math.round((q_prot_p_dej_din*100)/fatFood);


    //je récupère la valeur de lipide prévus au petit dej


   return quantityFood;
};