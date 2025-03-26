import React from 'react'
import { useForm , FormProvider } from 'react-hook-form'
import InputText from './InputText'
import SelectInput from './SelectInput'
const MainFrom = () => {
    
 const methods =  useForm()
 const onSubmit = (data)=>{
    console.log(data)
 }
  return (

    <FormProvider {...methods}  >
        <form onSubmit={methods.handleSubmit(onSubmit)} className='form2'>
            <InputText name="firstName" label ="First Name" type="text"/>
            <InputText name="email" label ="Email" type="email" />
            <InputText name="number" label ="Password" type="password"/>
            
            {/* <InputText name="address.country" label ="Country" type="text"/>
            <InputText name="address.city" label ="City" type="text"/> */}

            <SelectInput name="gender" label ="Gender" options={["Male","Female"]}/>
            <button>submit</button>
        </form>
    </FormProvider>
  )
}

export default MainFrom