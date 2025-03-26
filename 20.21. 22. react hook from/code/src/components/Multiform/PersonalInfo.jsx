import { useFormContext } from "react-hook-form"
import "./PersonalInfo.css"

const PersonalInfo =({errors})=>{
    //get Method React Hook form

    const { register } = useFormContext();
    return(
       <div>

        <h2 className="title">Personal Information</h2>
        <hr />

        <div className="form2-controls"> 
            <label htmlFor="">First Name :</label>
            <input type="text" 
            {...register("firstName",{required:"first name is required"})}
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>

        <div className="form2-controls">
            <label htmlFor="">Last Name :</label>
            <input type="text" 
            {...register("lastName",{required:"last name is required"})}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>

        <div className="form2-controls">
            <label htmlFor="">Email :</label>
            <input type="email" 
            {...register("email",{
                required:"email is required", 
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format"
                }
            })}
            />
            {errors.email && <span>{errors.email.message}</span>}
        </div>

       </div>
    )
}
export default PersonalInfo