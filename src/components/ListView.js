import '../App.css';


//COMPONENTE DE PRESENTACION (COMPONENTE QUE MUESTRA LOS DATOS)
const listView = ({elements, funcFilterItems}) =>{
    console.log(elements)
    return (
        <div className='listView'>
        <input type ="text" onChange = {ev=> funcFilterItems(ev.target.value)} className="input"/>

       
        <ul className='lista'>
         {/* mapeamos elements para iterar sobre cada elemento */}
        {
         elements.map (nombre => <li>{nombre}</li>)
        }
      </ul>
 
       
        </div>
    )
}

export default listView