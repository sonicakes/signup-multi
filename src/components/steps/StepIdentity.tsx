import { useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  FormHelperText,
} from "@mui/material";
import { USER_ROLE_OPTIONS } from "../../types/SignupFormSchema";
import type { SignupFormData } from "../../types/SignupFormSchema";

export const StepIdentity = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SignupFormData>();

  if (!control) {
    return (
      <Typography color="error">
        Form context error: Control not found.
      </Typography>
    );
  }

  return (
    <Stack spacing={4}>
      <Divider />
      <Stack spacing={1}>
        <Typography variant="h2">What/who do you indentify as*?</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          *In case you are a demon, your name will NOT be used in exorcism as
          referenced in our T&Cs.
        </Typography>
      </Stack>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
        <Controller
          name="userRole"
          control={control}
          render={({ field }) => (
            <FormControl
              fullWidth
              required
              error={!!errors.userRole}
              sx={{ flexGrow: 1 }}
            >
              <InputLabel id="user-role-label">Your Primary Role</InputLabel>
              <Select
                {...field}
                labelId="user-role-label"
                label="Your Primary Role"
                required
                value={field.value || ""}
              >
                {USER_ROLE_OPTIONS.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {errors.userRole?.message
                  ? (errors.userRole.message as string)
                  : "What class of monster do you belong to?"}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Your Name"
              required
              error={!!errors.name}
              helperText={
                errors.name
                  ? (errors.name.message as string)
                  : "You can use pseudonym or nickname."
              }
            />
          )}
        />
      </Stack>
    </Stack>
  );
};
