import { useForm } from "react-hook-form"
const ConditionalForm =()=>{
    const {register,handleSubmit, watch ,formState:{errors}}=useForm()
    const hasLicense = watch("hasLicense");
    const onSubmit =(data)=>{
        console.log(data)
    }


    return(
       
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <div className="formCondition"> 
            <label htmlFor="">Do you have a driver's license?</label>
            <br />

            <label htmlFor="">
            <input type="radio"
             value="Yes"
            {...register("hasLicense",{required:true})}
           />
             Yes
            </label>
            <br />

            <label htmlFor="">
            <input type="radio" 
            value="No"
            {...register("hasLicense",{required:true})}
            />
             No
            </label>

            {errors.hasLicense && <span className="invalid">Please Select Any Option</span>}
            </div>

            {hasLicense === "Yes" && (
                <>
                <div className="form-controls">
                    <label htmlFor="">License Number</label>
                    <input 
                    type="number"
                    placeholder="License Number"
                    {...register("licenseNumber",{required:"License Number is required"}
                    )}
                     />
                    {errors.licenseNumber && <span className="invalid">{errors.licenseNumber.message}</span>}
                </div>

                <div className="form-controls">
                    <label htmlFor="">License Expiration Date</label>
                    <input type="date"
                    {...register("licenseExpiration",{required:"Expiration date is required"})}
                    />

                    {errors.licenseExpiration && <span className="invalid">{errors.licenseExpiration.message}</span>}

                </div>

                
                <div className="action">
                <button type="submit">Submit</button>
                </div>
            </>
                
            )}

        </form>
    )
    
}
export default ConditionalForm