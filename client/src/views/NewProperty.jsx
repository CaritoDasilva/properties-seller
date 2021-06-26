import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropertyService from '../services/propertyService';


const NewProperty = () => {

    const propertyService = new PropertyService();

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Este campo es requerido'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Este campo es requerido'),
        location: Yup.string()
            .required('Este campo es requerido'),
    });


    return (
        <div>
            <h1>Ingresar nueva propiedad</h1>
            <div className="form-container">

                <Formik
                    initialValues={{
                        name: '',
                        description: '',
                        location: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                        propertyService.createProperty(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="">Nombre Propiedad</label>
                            <Field name="name" />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                            <label htmlFor="">Descripción</label>

                            <Field name="description" />
                            {errors.description && touched.description ? (
                                <div>{errors.description}</div>
                            ) : null}
                            <label htmlFor="">Ubicación</label>

                            <Field name="location" type="textarea" />
                            {errors.location && touched.location ? <div>{errors.location}</div> : null}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default NewProperty;