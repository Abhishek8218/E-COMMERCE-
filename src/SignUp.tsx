
import { FC, FocusEventHandler,ChangeEventHandler} from "react";
import { withFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import { withAlert, withUser } from "./withProvider";

function callLoginApi(values: any, bag: any) {
  console.log("sending data", values.email, values.password, values.fullName);
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      email: values.email,
      password: values.password,
      fullName: values.fullName,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log("MyData", bag);
      bag.props.setUser(user);
      bag.props.setMyName(values.fullName);
    })
    .catch(() => {
      bag.props.setAlert({
        type: "error",
        message: "User Already exists :" + values.email,
      });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .min(8, "Please Input Long Password")
    .max(14, "Please Input Small Password"),
});

const initialValues: any = {
  email: "",
  password: "",
};

type SignupProps = {
  handleSubmit: any;
  values: any;
  errors: any;
  touched: any;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  isLoggedIn: boolean;
};

export const SignUp: FC<SignupProps> = ({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isLoggedIn,
}) => {
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-full max-w-6xl mx-auto mt-4 text-2xl bg-white md:mt-16 ">
      <div className="max-w-5xl px-2 py-2 mx-2 space-y-8 bg-white md:px-4 md:py-8 md:mx-auto ">
        <h1 className="text-xl font-bold md:text-2xl text-gray-light">
          Signup
        </h1>
        <div className="flex justify-between">
          <form
            onSubmit={handleSubmit}
            className="max-w-5xl px-2 py-4 bg-white md:mx-auto md:py-8"
          >
            <div className="max-w-5xl px-4 py-4 space-y-3 border border-gray-300 rounded-md md:space-y-6 md:py-8 -pl-8">
              <div>
                <Input
                  values={values.fullName}
                  errors={errors.fullName}
                  touched={touched.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="fullName"
                  id="id"
                  type="text"
                  placeholder="Full Name"
                  label="fullName"
                  required
                  size="large"
                />
              </div>
              <div>
                <Input
                  values={values.email}
                  errors={errors.email}
                  touched={touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Email address"
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="email"
                  size="large"
                />
              </div>
              <div>
                <Input
                  values={values.number}
                  errors={errors.number}
                  touched={touched.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Mobile Number"
                  name="number"
                  id="number"
                  required
                  label="Mobile Number"
                  size="large"
                />
              </div>
              <div>
                <Input
                  values={values.password}
                  errors={errors.password}
                  touched={touched.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="current-password"
                  size="large"
                />
              </div>
              <div>
                <Input
                  values={values.confirm_password}
                  errors={errors.confirm_password}
                  touched={touched.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm Password"
                  name="confirm_password"
                  id="confirm_password"
                  type="password"
                  label="confirm_password"
                  size="large"
                />
              </div>
              <div className="flex flex-row ">
                <div className="mt-3">
                  <div className="flex flex-col">
                    <Button type="submit" size="small" theme="secondary" >SignUp</Button>
                    <Link
                      className="pt-4 text-sm font-black md:text-md text-primary-default"
                      to="/forgot"
                    >
                      Lost Your Password?
                    </Link>
                  </div>
                </div>
                <div className="mt-1 ml-5 text-gray-light ">
                  <h1 className="text-sm font-black md:text-md">
                    login if you Already have an account
                  </h1>
                  <Link
                    className="max-w-xs px-8 py-2 text-sm font-bold text-white rounded-md bg-orange-500 hover:bg-primary-dark"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>

          <div>
            <img
              className="hidden md:block"
              src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/signup-icon.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const myHOC = withFormik({
  mapPropsToValues: () => {
    return initialValues;
  },
  validationSchema: schema,
  handleSubmit: callLoginApi,
  validateOnMount: false,
});
const easySignup = myHOC(SignUp);
export default withUser(withAlert(easySignup));