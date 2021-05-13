import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = props => {
  const { name, width, ...otherProps } = props;
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </React.Fragment>
  );
};

export default AppFormField;
