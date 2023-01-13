import { useState } from 'react';
import frameworkslist from './item';
import ListView from './ListView';

//COMPONENTE CONTENEDOR (PROCESA LA INFORMACION, MANEJA LOS DATOS)
const List = () =>{
    const [items,setItems] = useState(frameworkslist);

  //CONDICION QUE CONDICIONA LA BUSQUEDA, SI EL INPUT ES NULL NOS RETORNA LA LISTA COMPLETA Y SINO NOS RETORNARA LA BUSQUEDA DE ACUERDO A LO QUE INGRESAMOS 
    const filterItems =  (searchPattern)=>{
 if (searchPattern === ""){
    setItems(frameworkslist)
 }else{
   let newItems = filterItemsBySearchPattern(searchPattern) ;
setItems(newItems);
 }
    }
  
    //FUNCION QUE FILTRA LA LISTA  A PARTIR DE LA BUSQUEDA QUE INGRESAMOS EN EL INPIT
    const filterItemsBySearchPattern = (searchPattern) =>{
        const filterItems = frameworkslist.filter(item => item.includes(searchPattern))
     return filterItems;
    }  
    
    return (
        <div>
 {/* aqui enviamos mediante un props la lista de frameworkslist al componente listView        */}
<ListView elements = {items} funcFilterItems ={filterItems}/>
        </div>
    )
}

export default List