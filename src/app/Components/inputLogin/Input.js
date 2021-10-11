import classes from "./Input.module.scss";
const Input = ({ name, formik, label,type }) => {
  return (
    <>
      <div className={classes.feild}>
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <input
          id={name}
          name={name}
          className={classes.input}
          type={type}
          {...formik.getFieldProps(name)}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className={classes.errors}>{formik.errors[name]}</div>
      )}
    </>
  );
};

export default Input;
