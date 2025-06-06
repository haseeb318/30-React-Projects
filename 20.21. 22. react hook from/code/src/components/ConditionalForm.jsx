import { useForm } from "react-hook-form";
import InputText from "./SmartComp/InputText";

const ConditionalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const hasLicense = watch("hasLicense");

  const onSubmit = (data) => {
    console.log(data);
    reset()


  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>

      <div className="form-controls">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          {...register("firstName", {
            required: "First Name is require",
          })}
        />

        {errors.firstName && (
          <span className="invalid">{errors.firstName.message}</span>
        )}
      </div>
      <div className="form-controls">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          {...register("lastName", {
            required: "Last Name is require",
          })}
        />

        {errors.lastName && (
          <span className="invalid">{errors.lastName.message}</span>
        )}
      </div>

      <div className="formCondition">
        <label htmlFor="">Do you have a driver's license?</label>
        <br />
        <label htmlFor="">
          <input
            type="radio"
            value="Yes"
            {...register("hasLicense", { required: true })}
          />
          Yes
        </label>
        <br />

        <label htmlFor="">
          <input
            type="radio"
            value="No"
            {...register("hasLicense", { required: true })}
          />
          No
        </label>

        {errors.hasLicense && (
          <span className="invalid">Please Select Any Option</span>
        )}
      </div>

      {hasLicense === "Yes" && (
        <>
          <div className="form-controls">
            <label htmlFor="">License Number</label>
            <input
              type="number"
              placeholder="License Number"
              {...register("licenseNumber", {
                required: "License Number is required",
              })}
            />
            {errors.licenseNumber && (
              <span className="invalid">{errors.licenseNumber.message}</span>
            )}
          </div>

          <div className="form-controls">
            <label htmlFor="">License Expiration Date</label>
            <input
              type="date"
              {...register("licenseExpiration", {
                required: "Expiration date is required",
              })}
            />

            {errors.licenseExpiration && (
              <span className="invalid">
                {errors.licenseExpiration.message}
              </span>
            )}
          </div>
        </>
      )}

       <div className="action">
            <button type="submit">Submit</button>
          </div>
    </form>
  );
};
export default ConditionalForm;
