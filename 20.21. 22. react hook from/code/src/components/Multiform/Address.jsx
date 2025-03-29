import { useFormContext } from "react-hook-form"
const Address =({errors})=>{
    const {register}= useFormContext()

    return (
        <div >
            <h2 className="title" >Address Information</h2>
            <hr />

            <div className="form2-controls">
                <label htmlFor="">Province :</label>
                <input type="text" 
                placeholder="Province"
                {...register("address",{required:"address is required"})}
                 />
                 {errors.address && <span>{errors.address.message}</span>}
            </div>
            
            <div className="form2-controls">
                <label htmlFor="">City :</label>
                <br />
                <input type="text" 
                placeholder="city"
                {...register("city",{required:"city is required"})}
                 />
                 {errors.city && <span>{errors.city.message}</span>}
            </div>

        </div>
    )
}

export default Address