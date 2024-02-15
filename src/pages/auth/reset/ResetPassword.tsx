import React from 'react'

const ResetPassword = () => {
  return (
    <>
    
    
    
    ResetPassword
    
    
    
    </>
  )
}

export default ResetPassword

// import { yupResolver } from "@hookform/resolvers/yup";
// import { Box, Grid, Stack, Typography } from "@mui/material";
// import { Alert, Spin } from "antd";
// import { forgetpassFunction  } from "api/functions/user.api";

// import assest from "json/assest";
// import validationText from "json/messages/validationText";
// import { useForm } from "react-hook-form";
// import PasswordStrengthBar from "react-password-strength-bar";
// import { useMutation } from "react-query";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { toast } from "sonner";
// import { SignUpNewWrapper } from "styles/StyledComponents/SignUpNewWrapper";
// import InputFieldCommon from "ui/CommonInput/CommonInput";
// import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   token: yup.string(),
//   password: yup
//     .string()
//     .trim()
//     .required(validationText.error.enter_password)
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       "Password must include at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long"
//     ),

//   confirmPassword: yup
//     .string()
//     .trim()
//     .required(validationText.error.enter_password)
//     //@ts-ignore
//     .oneOf([yup.ref("password"), null], "Passwords must match")
// });

// export type ResetPasswordSchemaFormData = yup.InferType<typeof schema>;

// const ResetPassword = () => {
//   const {
//     handleSubmit,
//     register,
//     watch,
//     reset,
//     formState: { errors }
//   } = useForm({
//     resolver: yupResolver(schema),
//     mode: "all"
//   });

//   const { mutate, isLoading, error, data } = useMutation(forgetpassFunction );
//   const navigate = useNavigate();
//   const p = useParams();

//   const onSubmit = (data: ResetPasswordSchemaFormData) => {
//     let payload = {
//       token: p?.token,
//       password: data?.password
//     };

//     mutate(payload, {
//       onSuccess: (data) => {
//         reset();
//         toast.success("Your password has been changed");
//         navigate("/auth/login");
//       }
//     });
//   };

//   return (
//     <SignUpNewWrapper>
//       <Box className="sign-up-left">
//         {" "}
//         <img src={assest.DummyAuthBg} alt="logo" />
//       </Box>

//       <Box
//         className="sign-up-rgt reset-password"
//         component="form"
//         onSubmit={handleSubmit(onSubmit)}
//         autoComplete="off"
//       >
//         <Spin spinning={isLoading} size="large">
//           <Box className="loginHeader">
//             <Link to="/">
//               <img src={assest.Logo} alt="logo" />
//             </Link>
//           </Box>
//           <Box className="loginHeader">
//             <Typography variant="h1">Reset Password</Typography>
//           </Box>

//           <Grid container spacing={3} className="form_group">
//             <Grid item xs={12}>
//               <Box mb={2}>
//                 {!!error && (
//                   <Alert
//                     showIcon
//                     // @ts-ignore
//                     message={error?.response?.data?.message}
//                     type="error"
//                   />
//                 )}

//                 {/* {data?.status === "success" && (
//                   <Alert
//                     showIcon
//                     // @ts-ignore
//                     message={
//                       "Your pharmacy account registration is currently pending approval from our super admin. Once approved, you will gain access to the full range of features and services offered by our platform."
//                     }
//                     type="success"
//                   />
//                 )} */}
//               </Box>
//             </Grid>

//             <Grid item xs={6}>
//               <Typography variant="body1" className="label_txt">
//                 Password
//               </Typography>
//               <InputFieldCommon
//                 placeholder="Password"
//                 type="password"
//                 autoComplete="off"
//                 size="small"
//                 isPassword
//                 {...register("password")}
//                 error={Boolean(errors?.password)}
//                 helperText={errors.password?.message}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="body1" className="label_txt">
//                 Confirm password
//               </Typography>
//               <InputFieldCommon
//                 placeholder="Confirm password"
//                 type="password"
//                 {...register("confirmPassword")}
//                 size="small"
//                 error={Boolean(errors?.confirmPassword)}
//                 helperText={errors.confirmPassword?.message}
//               />
//             </Grid>
//           </Grid>

//           <Box className="password-strength">
//             <Typography variant="body1" className="label_txt">
//               Password strength :
//             </Typography>

//             <Stack direction="row" spacing={1}>
//               <PasswordStrengthBar
//                 password={watch("password")}
//                 style={{
//                   width: "450px"
//                 }}
//               />
//               {/* <span className="p-strength"></span>
//             <span className="p-strength"></span>
//             <span className="p-strength"></span>
//             <span className="p-strength"></span> */}
//             </Stack>
//           </Box>

//           <Box className="form-btm">
//             <CustomButtonPrimary
//               type="submit"
//               variant="contained"
//               color="primary"
//               loading={isLoading}
//             >
//               <Typography variant="body1">Reset</Typography>
//             </CustomButtonPrimary>

//             <Typography variant="body1">
//               Already have an account? <Link to="/auth/login">Sign in</Link>{" "}
//             </Typography>
//           </Box>
//         </Spin>
//       </Box>
//     </SignUpNewWrapper>
//   );
// };

// export default ResetPassword;