import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AccountCircle } from "@mui/icons-material";
import { Field } from "react-final-form";

export default function InputWithIcon({ labelName, placeholder, fieldName }) {
   return (
      <div className="username-input">
         <Box sx={{ fontSize: "25px", "& > :not(style)": { m: 1 } }}>
            <Box
               sx={{
                  fontSize: "25px",
                  display: "flex",
                  alignItems: "flex-end",
                  width: "100%",
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
                           placeholder={placeholder}
                        />
                        {meta.touched && meta.error && (
                           <span>{meta.error}</span>
                        )}
                     </div>
                  )}
               </Field>
               <AccountCircle
                  sx={{
                     fontSize: "25px",
                     color: "action.active",
                     mr: 1,
                     my: 0.5,
                  }}
               />
            </Box>
         </Box>
      </div>
   );
}
