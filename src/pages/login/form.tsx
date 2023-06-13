import { Button, TextField } from "@/components/";
import { useFormik } from "formik";
import { FormEvent } from "react";
import { toast } from "react-toastify";
import {user} from '@/constants/user';
import * as Yup from "yup";

const LoginForm = () => {
  const { handleChange, values, errors, handleSubmit, setErrors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username can't be empty"),
      password: Yup.string().required("Password can't be empty"),
    }),
    onSubmit: (values) => {
      const {password, username} = values;
      const {password: defaultPwd, username: defaultUsr} = user;
      if(password === defaultPwd && defaultUsr === username){
        toast.success('You are successfully Signed in');
        return;
      }
      toast.error('Wrong username and password (admin/admin).');
    },
  });

  const onChangeInputVal = (e: Event, name: string) => {
    const newErrors = { ...errors, [name]: null };
    setErrors(newErrors);
    handleChange(e);
  };

  return (
    <>
      <TextField
        value={values.username}
        name="username"
        onChange={(e: Event, name: string) => {
          onChangeInputVal(e, name);
        }}
        placeholder="Enter username"
        error={errors}
      />
      <div className="h-15" />
      <TextField
        value={values.password}
        name="password"
        onChange={(e: Event, name: string) => {
          onChangeInputVal(e, name);
        }}
        placeholder="Enter password"
        type="password"
        error={errors}
      />

      <div style={{ width: "100%" }}>
        <a id="recover-pass">Recovery Password</a>
      </div>

      <Button
        onClick={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
        label="Sign In"
      />
    </>
  );
};

export default LoginForm;
