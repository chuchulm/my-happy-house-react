import React, { useState } from 'react';
import '../styles/login.css';
import Input from './input'


const Login =() =>{


  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [islogin, setIsLogin] = useState(false);
  const [hasError, sethasError] = useState(false)

 
  function handleChange (name, value){
    
      if( name  === 'usuario' ){
          setUser(value)
      }else{
         if( value.length < 6 ){
            setPasswordError(true);
            
          }else{
            setPasswordError(false);
            setPassword(value)
            
          }
      }
    }

   function ifMatch(param){
     if(param.user.length > 0 && param.password.length > 0){
       if(param.user === 'jesus' && param.password === '123456'){
         const {user, password} = param;
         let ac = {user, password}
         let account = JSON.stringify(ac);
         localStorage.setItem('accont', account);
         setIsLogin(true);
       }else{
         setIsLogin(false);
         sethasError(true)
       }

       }else{
         setIsLogin(false);
         sethasError(true)
       }
     }
   


  function handleSutmit(){
      let account = { user, password }

      if( account ){
          ifMatch( account );
      } 
  };

    return(

        <>
   <div className ='container-login'>

    <div className='title-container'>
         <label className='title-label'>LOGIN</label>
    </div>

    <div className='label-usuario input-group mb-3'>

       {hasError && 
        <label className='label-alert'>su contraseña son incorrectos o no existen en nuestra palataforma</label>
        
        }
        <label>Usuario</label>

          <Input
            attribute = {{
              id: 'usuario',
              name: 'usuario',
              type: ' text',
              placeholder: 'ingrese su usuario'
          }}
          handleChange={handleChange}
          />
            
        <label>Contraseña</label>
        <Input
            attribute = {{
              id: 'contraseña',
              name: 'contraseña',
              type: 'password',
              placeholder: 'ingrese su contraseña'
          }}
          handleChange={handleChange}
          param = {passwordError}
           />
          
          {passwordError &&
             <label className='label-error'>
                Contraseña invalida o incompleta
             </label>
          }
          <button onClick = {handleSutmit} className='btn btn-danger'>
              Ingresar
          </button>
                 
               
    </div>

  </div>     
    </>
    )
    
}

export default Login;
