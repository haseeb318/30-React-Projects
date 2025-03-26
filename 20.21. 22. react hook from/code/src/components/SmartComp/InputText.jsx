import { useFormContext } from "react-hook-form"



const 
InputText = ({name , label,type}) => {

    const {
        register,
        formState: { errors }
      } = useFormContext()

      const validationRules ={
        required:`*${label} is required`,
        ...(type === "email" &&{
          pattern : {
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:"Invalid email address"
          }

        }),
        ...(type === "password" && {
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long"
          }

        })

      }
    

  return (
    <div>
        <label htmlFor="">{label}</label>
        <input  type ={type}{...register(name,validationRules)} />     
        {errors[name] && <span>{errors[name].message}</span>} 
    </div>
  )

}

export default InputText