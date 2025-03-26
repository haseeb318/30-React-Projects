import { useFormContext } from "react-hook-form"

const SelectInput = ({name,label,options}) => {

  const {
    register,
    formState:{errors}
  }= useFormContext()

  return (
    <div>
      <label htmlFor="">{label}</label>
      <select {...register(name,{required: `${label} is required`})}>

        <option > Select {label}</option>
         {options.map((option)=>
        (
          <option key={option} value={option}>
            {option}
          </option>
         ))}

      </select>

      {errors[name] && <span>{errors[name].message}</span>}
    </div>
    
  )
}

export default SelectInput