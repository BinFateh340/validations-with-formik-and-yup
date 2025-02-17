import * as Yup from 'yup'

export const validationSchema = Yup.object({

    firstName: 
            Yup.string()
            .min(3, 'Must be 3 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('First name is required'),

    lastName: 
            Yup.string()
            .min(3, 'Must be 3 characters or more')
            .max(20, 'Must be 20 characters or less')
            .required('Last name is required'),

    email:
            Yup.string()
            .email('Invalid email address')
            .required('Email is required'),

    phone:
            Yup.string()
            .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
            .required('Phone number is required'),

    password:
            Yup.string()
            .min(8, 'Password must be at leat 8 characters')
            .max(20, 'Password must be 20 characters or less')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[0-9]/, 'Password must contain at least one number')
            .matches(/[!@#$%^&*()_+]/, 'Password must contain at least one special character')
            .required('Password is required'),

    confirmPassword:
            Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),

    gender:
            Yup.string()
            .required('Please select your gender'),

    terms: 
            Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions')
            .required('You must accept the terms and conditions')
})