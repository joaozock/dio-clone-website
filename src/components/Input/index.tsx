import React from 'react'

import { IconContainer, InputText, InputContainer, ErrorText} from './styles'
import { Controller } from 'react-hook-form'
import { IInput } from './types'

const Input = ({leftIcon, name, control, errorMessage, ...rest}:IInput) => {
  return (
    <>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller 
        name={name}
        control={control}
        rules={{required: true}}
        render={({ field: {value, onChange} }) => (
          <InputText value={value} onChange={onChange} {...rest}/>
        )}
        />
    </InputContainer>
    
    </>
  )
}

export { Input }