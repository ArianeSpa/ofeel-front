export const setProteinQuantity = (typeProtein) => {
    if(typeProtein==='Fromage blanc'){
        return '200 gr';
    }else if (typeProtein==='Oeufs'){
        return 'Deux';
    }else{
        return '100 gr';
    }
};

export const setFatQuantity = (typeFat) => {
    if(typeFat.includes('Huile') || typeFat.includes('Beurre')|| typeFat.includes('Purée')){
        return '1 CàS';
    }else if (typeFat==='Avocat'){
        return '1/2';
    }else{
        return '1 poignée';
    }
};

export const setSugarQuantity = (typeSugar) => {
    if(typeSugar.includes('Muesli')){
        return '50 gr';
    }else if (typeSugar.includes('Pain')){
        return '2 tranches';
    }else{
        return '100 gr';
    }
};