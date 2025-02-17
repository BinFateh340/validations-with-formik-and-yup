import { useFormik } from "formik";
import { initialValues } from "./initialValue"; // Importing the initial values
import { validationSchema } from "./validationSchema"; // Importing the validation schema
import "./form.css";

const Form = () => {
  // useFormik() is a custom hook that helps to build forms in React
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values, action) => {
        console.log("🚀 ~ Form ~ values:", values);
        action.resetForm();
      },
    });

  return (
    // The form is wrapped in a div with the class name form-container
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Registration Form</h2>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            // If the firstName field has an error and is touched, the input-error class is added to the input field
            className={
              errors.firstName && touched.firstName ? "input-error" : ""
            }
          />

          {/* If the firstName field has an error and is touched, the error message is displayed */}
          {errors.firstName && touched.firstName ? (
            <p className="error-message">{errors.firstName}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastName && touched.lastName ? "input-error" : ""}
          />
          {errors.lastName && touched.lastName ? (
            <p className="error-message">{errors.lastName}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email ? (
            <p className="error-message">{errors.email}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? "input-error" : ""}
          />
          {errors.phone && touched.phone ? (
            <p className="error-message">{errors.phone}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password ? (
            <p className="error-message">{errors.password}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="error-message">{errors.confirmPassword}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.gender && touched.gender ? "input-error" : ""}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && touched.gender ? (
            <p className="error-message">{errors.gender}</p>
          ) : null}
        </div>

        <div className="form-group checkbox-group">
          <label htmlFor="terms" className="checkbox-label">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span>I agree to the terms and conditions</span>
          </label>
          {errors.terms && touched.terms ? (
            <p className="error-message">{errors.terms}</p>
          ) : null}
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
