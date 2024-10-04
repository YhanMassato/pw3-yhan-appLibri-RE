import style from './Select.module.css'

function Select({name, text, options
    // , handlerChangeCat
    }){
    // return(

    //     <div className={style.form_control}>

    //         <label htmlFor={name}> {text} </label>
    //         <select name={name} id={name}>

    //             {
    //                 options.map((option)=>{
    //                     return <option>{option.nome_categoria}</option>
    //                 })
    //             }

    //         </select>

    //     </div>
    // )

    return (
        <div className={style.form_control}>
            <label htmlFor={name}> {text} </label>
            
            <select name={name} id={name} 
            // onChange={handlerChangeCat}
            >
                <option value="">Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.cod_categoria} value={option.cod_categoria}>
                        {option.nome_categoria}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;