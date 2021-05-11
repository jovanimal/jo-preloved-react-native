import React from 'react';
import { Formik } from 'formik';

const AppForm = props => {
  const { initialValues, onSubmit, validationSchema, children } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
};

export default AppForm;
