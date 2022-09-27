import React, {useState} from 'react'

const Formulario = () => {
  // Hook    : setDatos
  // Objetivo: Maneja cambio de estado del objeto datos ( con propiedades nombre y email ).
  const [datos,setDatos] = useState({
     nombre:'', email:''
  })
// Funcion : handleChange
// Objetivo: manejar el cambio de los inputs del formulario 
     const handleChange = (e) =>{
       console.log(e.target.value);
       setDatos({
          ...datos,[e.target.name]:e.target.value
       });
     }

     // function : enviarDatos
     // Objetivo : Enviar los datos del Formulario.
     const enviarDatos = (e) =>{
         e.preventDefault();
         alert('Datos enviados correctamente');
     }


  return (
    <>
       <form className='row contact_form' onSubmit={enviarDatos}>
            <div className='col-md-3'>
               <label for='name'>Nombre </label>
               <input 
                   placeholder='Ingrese Nombre y Apellido'
                   className='form-control-lg'
                   type='text'
                   name='nombre'
                   onChange={handleChange}
               />
               <label for='email'>Email </label>
               <input 
                   placeholder='Ingrese Email'
                   className='form-control-lg'
                   type='email'
                   name='email'
                   onChange={handleChange}
               />
               <div className='p-3'>
                 <button className='btn btn-primary' type='submit'> Enviar</button>
               </div>
            </div>
       </form>
    </>
  );
}


export default Formulario