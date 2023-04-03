

import { FC } from "react";
import { withFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import { withAlert, withUser } from "./withProvider";
function callLoginApi(values: any, bag: any) {
  console.log("sending data", values.email, values.password);
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })

    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log("MyData", bag);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({
        type: "error",
        message: "Invalid Credentials :" + values.password,
      });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .min(8, "dont you know its really small")
    .max(14, "very bada password"),
});

const initialValues = {
  email: "",
  password: "",
};

type LoginPageProps = {
  handleSubmit: any;
  values: { email: string; password: string };
  errors: { email: string; password: string };
  touched: any;
  handleChange: React.ChangeEvent;
  handleBlur: React.ChangeEvent;
  isLoggedIn: boolean;
};

export const LoginPage: FC<LoginPageProps> = ({
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
    <div className="h-full max-w-6xl mx-auto mt-16 text-2xl bg-white ">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl px-4 py-5 mx-2 space-y-8 bg-white md:mx-auto md:py-8"
      >
        <h1 className="text-2xl font-bold text-gray-light">Login</h1>
        <div className="max-w-5xl px-4 py-5 space-y-8 border border-gray-300 rounded-md pl-8">
          <div>
            <h1 className="text-sm font-bold text-gray-light">
              Username or Email Address
            </h1>
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
              size="large"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-light">Password</h1>
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
              size="large"
            />
          </div>
          <div className="flex flex-row ">
            <div className="mt-1">
              <div className="flex">
                <input type="checkbox" />
                <p className="px-1 text-sm font-bold text-gray-light"> Remember me</p>
              </div>
              <div className="flex flex-col">
              
              
                <Button theme="secondary" size="small" className="py-1" type="submit">LOG IN</Button>
                <Link
                className=" px-2 py-2 text-sm font-black md:text-md"
                to="/signup"
              >
              Create Account
              </Link> 
                <Link
                  className="pt-3 text-sm font-black md:text-md "
                  to="/forgot"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </form>
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
const easyLogin = myHOC(LoginPage);
export default withUser(withAlert(easyLogin));