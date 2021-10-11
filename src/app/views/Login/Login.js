import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../Components/inputLogin/Input";
import classes from "./Login.module.scss";
import { object } from "yup/lib/locale";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = yup.object({
    email: yup.string().email("email is invalid").required("email is required"),
    password: yup
      .string()
      .required("password is  required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  console.log(formik);
  return (
    <div className={classes.login}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Login</h1>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Input type="email" name="email" label="Email" formik={formik} />
          <Input
            type="password"
            name="password"
            label="password"
            formik={formik}
          />
          <button type="submit" className={classes.button} disabled={!formik.isValid}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
