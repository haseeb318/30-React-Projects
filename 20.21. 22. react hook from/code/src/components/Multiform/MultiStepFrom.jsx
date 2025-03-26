import { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import Address  from "./Address"
import { FormProvider, useForm } from "react-hook-form"

const MultiStepFrom = () => {
  const [step , setStep] =useState(1)
  const [formData, setFormData]=useState({})

  const methods = useForm({
    defaultValues: formData,
  });

  const {handleSubmit,formState:{errors}, reset} =methods

   const onSubmit =(data)=> {

    setFormData((prev)=>({
      ...prev,
      ...data
    }))
    if(step<2){
      setStep(step+1)
    }
    else{
      console.log("Final Data ",{...formData,...data})
      alert("Form Is Submited")
      reset()
      setStep(1)
    }
   }

   const backHandler =()=>{
    setStep(step-1)

   }

  return (

    <>
   <FormProvider {...methods} >

    <form onSubmit={handleSubmit(onSubmit)} className="form2" >
    {step === 1 && <PersonalInfo errors={errors}/> }
    {step === 2 && <Address errors={errors}/>}


    <div className="action2"> 
    {step > 1 && (<button
    onClick={backHandler}>
    Back</button>)}
    <button type="submit">{step===2?"Submit":"Next"}</button>
    </div>
    </form>
    </FormProvider>
    </>
  )
}

export default MultiStepFrom