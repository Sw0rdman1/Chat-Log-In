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
              <AccountCircle
                sx={{
                  paddingTop: "20px",
                  color: "action.active",
                  mr: 1,
                  my: 0.5,
                  fontSize: "30px",
                }}
              />
              {meta.touched && meta.error && (
                <p
                  style={{
                    color: "red",
                    fontSize: "13px",
                    marginTop: "2px",
                  }}
                >
                  {meta.error}
                </p>
              )}
            </div>
          )}
        </Field>
      </Box>
    </div>
  );
}
