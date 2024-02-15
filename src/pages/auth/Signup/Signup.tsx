// import React from 'react'
// import { CssBaseline, FormControl, Stack, TextField } from '@mui/material'
// import { useForm, SubmitHandler } from "react-hook-form"
// import Button from '@mui/material/Button';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import Wrapper from 'Layout/Wrapper/Wrapper';
// import axios from 'axios';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useState } from 'react';
// import { useQuery } from 'react-query';
// import { signupFunction } from 'api/functions/user.api';
// // import './Signupstyle.css';




// type Inputs = {
// pharmacyName:string,
// name:string,
// surname:string,
// email:string,
// phone:string,
// password:string
 
// }

// // const lightTheme = createTheme({
// //   palette: {
// //     mode: 'light',
// //   },
// // });

// // const darkTheme = createTheme({
// //   palette: {
// //     mode: 'dark',
// //   },
// // });

// const Signup = () => {


//   // const [theme, setTheme] = useState(darkTheme);
//   const[field,setField]= useState(null);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<Inputs>()

//   let navigate = useNavigate();
//   const onSubmit: SubmitHandler<Inputs> = async(data:Inputs) => {
//     try {
//       await signupFunction(data);

      
//       navigate('/login');
//     } catch (error) {
//       console.error(error);
     
//     }

//   }

//   return (
//     <>
    
//     <Wrapper>
//       <h1>Register Yourself</h1>
//       <br/>
     
//       <img src='https://vspot.s3.amazonaws.com/sign-up/Logos/SignUp-Profile-Icon-v2.jpg' alt='logo'></img>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//           <CssBaseline/>
//           <Button onClick={toggleTheme} variant="contained" color="primary">
//             Light Mood/Dark Mood
//           </Button>
//         </div>

//         <br/> */}
    
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>

      
//           <FormControl onSubmit={handleSubmit(onSubmit)}>
//             <Stack
//               component="form"
//               sx={{
//                 width: '25ch',
//                 margin: 'auto'
//               }}
//               spacing={2}
//               noValidate
//               autoComplete="off"
//             >
//               <TextField
//                 hiddenLabel
//                 id="filled-hidden-label-small"
//                 variant="filled"
//                 size="small"
//                 placeholder='Enter your pharmacy name'
//                 {...register("pharmacyName", { required: true })}
//               />
//               <TextField
//                 hiddenLabel
//                 id="filled-hidden-label-normal"
//                 variant="filled"
//                 placeholder='Enter your first name'
//                 {...register("name", { required: true })}
//               />
//               <TextField 
//                 hiddenLabel
//                 id="filled-hidden-label-normal"
//                 variant="filled"
//                 placeholder='Enter your lastname'
//                 {...register("surname", { required: true })}
//               />
//               <TextField
//                 hiddenLabel
//                 id="filled-hidden-label-normal"
//                 variant="filled"
//                 placeholder='Enter your email'
//                 {...register("email", { required: true })}
//               />
//               <TextField
//                 hiddenLabel
//                 id="filled-hidden-label-normal"
//                 variant="filled"
//                 placeholder=' enter your phone'
//                 {...register("phone", { required: true })}
//               />
//               <TextField
//                 hiddenLabel
//                 id="filled-hidden-label-normal"
//                 variant="filled"
//                 placeholder='enter your password'
//                 {...register("password", { required: true })}
//               />
//               <Button variant="contained" type='submit' disableElevation>
//                 SignUp
//               </Button>
//               <p> have any exsisting account?</p>
//               <Link to={'/auth/login'}>
//                           login
//                         </Link>
//             </Stack>
//           </FormControl>
//         </div>
 
//     </Wrapper>
 
    
//     </>
//   )
// }

// export default Signup

import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Alert, Spin } from "antd";
import { signupFunction } from "api/functions/user.api";

import assest from "json/assest";
import validationText from "json/messages/validationText";
import { emailRegex, passwordRegex, phoneNumberRegex } from "lib/regex.lib";
import { useForm } from "react-hook-form";
import PasswordStrengthBar from "react-password-strength-bar";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SignUpNewWrapper } from "styles/StyledComponents/SignUpNewWrapper";

import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email)
    .matches(emailRegex, validationText.error.email_format),

  pharmacyName: yup.string().trim().required(validationText.error.pharmacyName),
  phone: yup
    .string()
    .trim()
    .required(validationText.error.phone)
    .matches(phoneNumberRegex, validationText.error.phoneNumberIsValid)
    .min(10, validationText.error.phoneMinDigit)
    .max(16, validationText.error.phoneNumberMax),
  name: yup
    .string()
    .trim()
    .required(validationText.error.firstName)
    .min(2, "Enter minimum 2 characters"),
  surname: yup
    .string()
    .trim()
    .required(validationText.error.surname)
    .min(2, "Enter minimum 2 characters"),

  password: yup
    .string()
    .trim()
    .required(validationText.error.enter_password)
    .matches(passwordRegex, validationText.error.passwordText),

  confirmPassword: yup
    .string()
    .trim()
    .required(validationText.error.enter_password_confirm)
    //@ts-ignore
    .oneOf([yup.ref("password"), null], validationText.error.passwordMatch)
});

export type signUpSchemaFormData = yup.InferType<typeof schema>;

const Signup = () => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const { mutate, isLoading, error, data } = useMutation(signupFunction);
  const navigate = useNavigate();

  const onSubmit = (data: signUpSchemaFormData) => {
    let payload = {
      pharmacyName: data?.pharmacyName,
      name: data?.name,
      surname: data?.surname,
      email: data?.email,
      phone: data?.phone,
      password: data?.password
    };

    mutate(payload, {
      onSuccess: (data) => {
        reset();
        toast.success("Account created successfully! 🎉✨");
        navigate("/auth/login");
      }
    });
  };

  return (
    <SignUpNewWrapper>
      <Box className="sign-up-left">
        <img src={assest.DummyAuthBg} alt="logo" />
      </Box>

      <Box
        className="sign-up-rgt"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Spin spinning={isLoading} size="large">
          <Box className="loginHeader">
            <Link to="/">
              <img src={assest.Logo} alt="logo" />
            </Link>
          </Box>
          <Box className="loginHeader">
            <Typography variant="h1">Sign up for an account</Typography>
            <Typography variant="body1">
              Register your pharmacy for SignatureRx Connect and increase your
              private prescription revenue.
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}
            className="form_group"
            alignItems="flex-start"
            justifyContent="center"
          >
            {!!error && (
              <Grid item xs={12}>
                <Box mb={2}>
                  {" "}
                  <Alert
                    showIcon
                    // @ts-ignore
                    message={error?.response?.data?.message}
                    type="error"
                  />{" "}
                </Box>
              </Grid>
            )}

            {data?.data.status === "success" && (
              <Grid item xs={12}>
                <Box mb={2}>
                  {" "}
                  <Alert
                    showIcon
                    // @ts-ignore
                    message={
                      "Your pharmacy account registration is currently pending approval from our super admin. Once approved, you will gain access to the full range of features and services offered by our platform."
                    }
                    type="success"
                  />
                </Box>
              </Grid>
            )}

            <Grid item xs={12}>
              <Typography variant="body1" className="label_txt">
                Pharmacy name
              </Typography>
              <InputFieldCommon
                placeholder="Enter pharmacy name"
                type="text"
                {...register("pharmacyName")}
                size="small"
                error={Boolean(errors.pharmacyName)}
                helperText={errors.pharmacyName?.message}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" className="label_txt">
                First name
              </Typography>
              <InputFieldCommon
                placeholder="Enter first name"
                type="text"
                {...register("name")}
                size="small"
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" className="label_txt">
                Last name
              </Typography>
              <InputFieldCommon
                placeholder="Enter last name"
                type="text"
                {...register("surname")}
                size="small"
                error={Boolean(errors?.surname)}
                helperText={errors.surname?.message}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" className="label_txt">
                Email address
              </Typography>
              <InputFieldCommon
                placeholder="Enter email"
                type="text"
                {...register("email")}
                autoComplete="off"
                size="small"
                error={Boolean(errors?.email)}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" className="label_txt">
                Phone number
              </Typography>
              <InputFieldCommon
                placeholder="Enter phone"
                type="text"
                {...register("phone")}
                size="small"
                error={Boolean(errors?.phone)}
                helperText={errors.phone?.message}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" className="label_txt">
                Password
              </Typography>
              <InputFieldCommon
                placeholder="Enter password"
                type="password"
                autoComplete="off"
                size="small"
                isPassword
                {...register("password")}
                error={Boolean(errors?.password)}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" className="label_txt">
                Confirm password
              </Typography>
              <InputFieldCommon
                placeholder="Enter confirm password"
                type="password"
                {...register("confirmPassword")}
                size="small"
                error={Boolean(errors?.confirmPassword)}
                helperText={errors.confirmPassword?.message}
              />
            </Grid>
          </Grid>

          <Box className="password-strength">
            <Typography variant="body1" className="label_txt">
              Password strength :
            </Typography>

            <Stack direction="row" spacing={1} className="p-strength">
              <PasswordStrengthBar
                password={watch("password")}
                style={{
                  width: "450px"
                }}
                className="pass-strength-bar"
              />
              {/* <span className="p-strength"></span>
            <span className="p-strength"></span>
            <span className="p-strength"></span>
            <span className="p-strength"></span> */}
            </Stack>
          </Box>

          <Box className="form-btm">
            <CustomButtonPrimary
              type="submit"
              variant="contained"
              color="primary"
              loading={isLoading}
            >
              <Typography variant="body1">Sign up</Typography>
            </CustomButtonPrimary>

            <Typography variant="body1">
              Already have an account? <Link to="/auth/login">Sign in</Link>{" "}
            </Typography>
          </Box>
        </Spin>
      </Box>
    </SignUpNewWrapper>
  );
};

export default Signup;
