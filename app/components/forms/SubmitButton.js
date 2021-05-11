import React from 'react'
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

const SubmitButton = props => {
  const { title } = props;
  const { handleSubmit } = useFormikContext();
  
  return (
    <AppButton title={title} onPress={handleSubmit} />

  )
}

export default SubmitButton
