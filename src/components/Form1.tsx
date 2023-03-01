import React from "react";
import { useForm } from "react-hook-form";

function Form1() {

    const{register,handleSubmit}=useForm()

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Iniciar sesión</h2>
          <span>Registrarse en Nuestro Servicio</span>

          <form id="form" className="flex flex-col" onsubmit={handleSubmit()}>
            <input type="text" {...register('username')} placeholder="Nombre de usuario" required/>
            <input type="text" {...register('password')} placeholder="Password" required/>
            <input type="text" {...register('confirmpwd')} placeholder="Confirmar Password" required/>
            <input type="text" {...register('mobile')} placeholder="Teléfono" required/>

            <button className="btn">Iniciar sesión</button>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </section>
  );
}

export default Form1;
