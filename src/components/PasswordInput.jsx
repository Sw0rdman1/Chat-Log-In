import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Field } from "react-final-form";
import { TextField } from "@mui/material";

export default function PasswordInput() {
   const [values, setValues] = React.useState({
      amount: "",
      password: "",
      weight: "",
      weightRange: "",
      showPassword: false,
   });

   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
   };

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword,
      });
   };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   return (
      <div className="password-input">
         <FormControl
            sx={{ m: 1 }}
            variant="standard"
         >
            <InputLabel
               sx={{ fontSize: "20px" }}
               htmlFor="standard-adornment-password"
            >
               Password
            </InputLabel>

            <Field name="password">
               {({ input, meta }) => (
                  <div>
                     <Input
                        sx={{ fontSize: "28px", paddingTop: "16px" }}
                        label="password"
                        variant="standard"
                        {...input}
                        id="standard-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 aria-label="toggle password visibility"
                                 onClick={handleClickShowPassword}
                                 onMouseDown={handleMouseDownPassword}
                              >
                                 {values.showPassword ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        }
                     />
                     {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
               )}
            </Field>
         </FormControl>
      </div>
   );
}
