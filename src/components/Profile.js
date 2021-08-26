import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import ImageProfile from './ImageProfile';




export const Profile = () => {
  const validate = Yup.object({
    organization_Name: Yup.string()
    .max(50, 'must be 15 characters or less')
    .required('required'),

    owner_Name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    owner_id: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),

      website: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        ,

        tagline: Yup.string()
      .max(20, 'Must be 20 characters or less')
      ,

      discription: Yup.string()
      .max(100, 'Must be 20 characters or less')
     

   
  })
  return (
    <Formik
      initialValues={{
        organization_Name:'',
        owner_Name: '',
        lastName: '',
        email: '',
        website:'',
        tagline:'',
        discription:''
       
       
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4"> Profile</h1>
          {console.log(formik.values)}
          
          <Form>
          <ul className="input_text">
          <li> 
            <TextField className="ip_box"   label="organization Name" name="organization_Name" type="text" />
          </li>
          <li> 
            <TextField className="ip_box"  label="owner Name" name="owner_Name" type="text" />
          </li>
          <li>
            <TextField className="ip_box"  label="Email" name="email" type="email"  placeholder="@Email" />
          </li>
            <div > 
            <li className="box_right_title">
            <TextField className=" box_right"  label="website" name="website" type="website"  placeholder="http//:url.com" />
            </li>
            <li className="box_right_title">
            <TextField className=" box_right"  label="Tag Line" name="tagline" type="text"  placeholder="#Tag Line" />
           </li>
           </div>
           <li> 
            <TextField
              name="comment" form="usrform" rows="4" cols="50"


           label="discription" name="discription"  placeholder="#discribe your self" />
           </li>
           </ul>

            
           
            <button className="btn btn-dark mt-3" type="submit">Save</button>

          </Form>
        </div>
      )}
    </Formik>
  )
}
