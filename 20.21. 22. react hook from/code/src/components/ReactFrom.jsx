
import {useForm} from "react-hook-form"
import ConditionalForm from "./ConditionalForm"
const ReactFrom = () => {
  
    const {register, handleSubmit,reset,
        formState: { errors }} = useForm()
    const onSubmit = (data)=>{console.log(data)
        reset()

    }
    return (
  
    // This will make its value available for both the form validation and submission.
    // Note: Each field is required to have a name as a key for the registration process.
  
      <>
      <form  className="form"onSubmit={handleSubmit(onSubmit)}>
  
        <div className='form-controls'>
        <label htmlFor="">Name:</label>
        <input
        placeholder="First Name"
  
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        
        {errors.firstName?.type === "required" && (
          <span className='invalid' role="alert">First name is required</span>
        )}
        </div>
  
        <div className='form-controls'>
        <label htmlFor="">Gender:</label>
        <select {...register("gender",{required:true})} 
        aria-invalid={errors.gender?"true":"false"}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender?.type==="required" &&(
          <span className='invalid'  role='alert'>Gender Is required</span>
        )}
        </div>
  
        <div className='form-controls'>
        <label htmlFor="">Age:</label>
        <input type="number" 
        placeholder="Age"
        {...register("age",
        { required:true,min:{value:18,message:"Age must be 18"}})} 
         aria-invalid ={errors.age?"true":"false"}
        />
        {errors.age?.type==="required"&&(
          <span className='invalid'  role='alert'>Age is required</span>
        )}
        {errors.age && <span className='invalid' >{errors.age.message}</span>}
        </div>
      
        <div className='action'>     
           <button type='submit'>submit</button>
        </div>
  
      </form>
      </>
    )
}

export default ReactFrom