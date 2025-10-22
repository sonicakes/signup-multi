import { useState, type KeyboardEvent } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  Stack,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Chip,
  Box,
  Divider,
} from "@mui/material";

import { PRICING_PLAN_OPTIONS } from "../../types/SignupFormSchema";
import type { SignupFormData } from "../../types/SignupFormSchema";

export const StepTeam = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SignupFormData>();

  const [inputValue, setInputValue] = useState("");

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
      <Controller
        name="pricingPlan"
        control={control}
        render={({ field }) => (
          <FormControl
            fullWidth
            required
            error={!!errors.pricingPlan}
            sx={{ flexGrow: 1 }}
          >
            <InputLabel id="pricingPlan-label">Pricing Plan</InputLabel>
            <Select labelId="pricingPlan-label" label="Pricing Plan" {...field}>
              <MenuItem value="">— Select Plan —</MenuItem>
              {PRICING_PLAN_OPTIONS.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {errors.pricingPlan
                ? (errors.pricingPlan.message as string)
                : "Select the plan that best fits your needs."}
            </FormHelperText>
          </FormControl>
        )}
      />

      <Controller
        name="teamInvites"
        // TODO - atm only providing valid email(s) works to proceed to the next steps
        control={control}
        render={({ field }) => {
          const handleAddEmail = () => {
            const trimmed = inputValue.trim();
            if (trimmed && !field.value.includes(trimmed)) {
              field.onChange([...field.value, trimmed]);
            }
            setInputValue("");
          };

          const handleDelete = (email: string) => {
            field.onChange(field.value.filter((e: string) => e !== email));
          };

          const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              handleAddEmail();
            }
          };

          return (
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Team Invitations (Optional)
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  p: 1,
                  border: "1px solid",
                  borderColor: errors.teamInvites ? "error.main" : "divider",
                  borderRadius: 1,
                }}
              >
                {field.value?.map((email: string) => (
                  <Chip
                    key={email}
                    label={email}
                    onDelete={() => handleDelete(email)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
                <TextField
                  variant="standard"
                  placeholder="Type email and press Enter"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  InputProps={{
                    disableUnderline: true,
                    sx: { minWidth: 150 },
                  }}
                  error={!!errors.teamInvites}
                />
              </Box>
              <FormHelperText error={!!errors.teamInvites}>
                {errors.teamInvites
                  ? (errors.teamInvites.message as string)
                  : "Add emails one by one (e.g., dr.frankenstein@madscience.org)."}
              </FormHelperText>
            </Box>
          );
        }}
      />
    </Stack>
  );
};
