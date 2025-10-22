import { useFormContext, Controller } from "react-hook-form";
import {
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormControl,
  Link,
  Divider,
} from "@mui/material";
import type { SignupFormData } from "../../types/SignupFormSchema";

export const StepLegal = () => {
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
    <Stack>
      <Divider />
      <FormControl required error={!!errors.acceptedTerms} component="fieldset">
        <Controller
          name="acceptedTerms"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  color="secondary"
                />
              }
              label={
                <Typography variant="body1">
                  I agree to the{" "}
                  <Link
                    href="#"
                    target="_blank"
                    color="secondary"
                    underline="hover"
                    sx={{ mr: 0.5 }}
                  >
                    Terms & Conditions
                  </Link>
                  & Privacy Policy.
                </Typography>
              }
            />
          )}
        />

        {errors.acceptedTerms && (
          <FormHelperText sx={{ ml: 4 }}>
            {errors.acceptedTerms.message as string}
          </FormHelperText>
        )}
      </FormControl>

      <Controller
        name="mailingList"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={!!field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                color="secondary"
              />
            }
            label={
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Subscribe to our monthly newsletter and product updates
                (Optional)
              </Typography>
            }
          />
        )}
      />
    </Stack>
  );
};
