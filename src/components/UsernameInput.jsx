import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AccountCircle } from "@mui/icons-material";
import { Field } from "react-final-form";

export default function InputWithIcon({ labelName, placeholder, fieldName }) {
   return (
      <div className="username-input">
         <Box
            sx={{
               fontSize: "35px",
               display: "flex",
               alignItems: "flex-end",
            }}
         >
            <Field name={fieldName}>
               {({ input, meta }) => (
                  <div style={{ fontSize: "25px" }}>
                     <TextField
                        InputProps={{ style: { fontSize: "25px" } }}
                        InputLabelProps={{ style: { fontSize: "20px" } }}
                        id="input-with-sx"
                        label={labelName}
                        variant="standard"
                        type="text"
                        {...input}
                        color="secondary"
                     />
                     {meta.touched && meta.error && (
                        <span
                           style={{
                              display: "block",
                              color: "red",
                              fontSize: "13px",
                              paddingTop: "3px",
                           }}
                        >
                           {meta.error}
                        </span>
                     )}
                  </div>
               )}
            </Field>
            <AccountCircle
               sx={{
                  color: "action.active",
                  mr: 1,
                  my: 0.5,
                  fontSize: "30px",
                  marginBottom: "10px",
               }}
            />
         </Box>
      </div>
   );
}
