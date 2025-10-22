import { useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import type { SignupFormData } from "../../types/SignupFormSchema";

export const StepAccountSetup = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SignupFormData>();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack spacing={4}>
      <Divider />
      <Typography variant="h2">
        Welcome to Frightbook - your doom feed awaits.👻🧟🧛
      </Typography>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email Address"
            type="email"
            required
            error={!!errors.email}
            helperText={
              errors.email
                ? errors?.email.message
                : "Use your work or personal email."
            }
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            error={!!errors.password}
            helperText={
              errors.password
                ? errors.password.message
                : "Do not pick something that is easy to guess, e.g. the date of your death or name of your familiar."
            }
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="secondary"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
    </Stack>
  );
};
