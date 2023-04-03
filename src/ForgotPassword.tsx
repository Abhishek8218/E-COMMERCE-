import { Formik, Form } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";

function ForgotPassword() {
  function callLoginApi(values: any) {
    console.log("sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    number: Yup.string().required().min(10),
  });

  const initialValues = {
    email: "",
  };
  return (
    <div className="h-full max-w-6xl mx-auto mt-16 text-2xl bg-white ">
      <Formik
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
      >
        <Form className="max-w-5xl px-4 py-8 mx-2 space-y-8 bg-white md:mx-auto md:py-8">
          <h1 className="text-2xl font-bold text-gray-light">
  Enter Your Detail To Reset The Password 
            
          </h1>
          <div className="md:flex">
            <div className="max-w-5xl px-4 py-8 space-y-8 border border-gray-300 rounded-md md:w-1/2 -pl-8">
              <div className="flex flex-col">
                <h1 className="text-sm font-bold text-gray-light">
                  Mobile number or Email Address
                </h1>
                <Input
                  name="email"
                  id="email-address"
                  type="email"
                  placeholder="Email or Number"
                />
              </div>

              <div className="flex flex-row justify-between">
                <div className="mt-3">
                  
                  <Button type="submit" size="small" theme="secondary">Reset Password</Button>
                </div>
                <div className="pt-8 ml-2 text-gray-light">
                  <Link
                    className="max-w-xs px-8 py-2 text-sm font-bold text-white rounded-md bg-primary-default hover:bg-primary-dark"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img
                className="hidden w-full md:block"
                src="https://e7.pngegg.com/pngimages/61/200/png-clipart-computer-icons-password-user-forgot-text-area.png"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ForgotPassword;