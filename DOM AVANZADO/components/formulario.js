const Form =(()=>{
    //recuperando data de formulario
    const form = document.querySelector(["data-form"]);
    const inputTask = document.querySelector(["data-input-task"]);
    const inputtDescription = document.querySelector(["data-input-descripcion"]);
    const date = document.querySelector(["data-input-fecha"]);
    const inputPrioridad = document.querySelector(["data-input-prioridad"]);
    // guardo los datos como objeto
    const datosForm=()=>{
        return{
            task: inputTask.value.trim(),
            description: inputtDescription.value.trim(),
            date: date.value.trim(),
            priority: inputPrioridad.value.trim(),
        };
    };
    // borro los datos del formulairo
    const reset=()=>{
        inputTask.value="";
        inputDescription.value="";
        date.value="";
        inputPrioridad.value="";
    };
    // devuelvo los datos para usarlos en la tabla
    const setDatos=(callback)=>{
        form.addEventListener("submit",(evento)=>{
            evento.preventDefault();
            callback(datosForm());
            reset();
        })
    };
    return {setDatos};
})();
export default Form;