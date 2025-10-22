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
  Divider,
  Tooltip,
} from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import type { SignupFormData } from "../../types/SignupFormSchema";
import { ORGANISATION_SIZE_OPTIONS } from "../../types/SignupFormSchema";
import { USE_CASE_OPTIONS } from "../../types/SignupFormSchema";

export const StepOrganization = () => {
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
      <Stack direction="row">
        <Typography variant="h2" sx={{ mr: "0.5rem" }}>
          What are you up to this Spooktober?
        </Typography>
        <Tooltip
          title="We won't judge you on your activity (unless blatantly illegal - have
            some shame, Ghouls and Goblins!!)"
          placement="right"
          arrow
        >
          <InfoOutlineIcon
            fontSize="small"
            color="primary"
            sx={{ cursor: "pointer", mt: -0.5 }}
          />
        </Tooltip>
      </Stack>

      <Controller
        name="organisationName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Organization Name"
            required
            fullWidth
            error={!!errors.organisationName}
            helperText={
              errors.organisationName
                ? (errors.organisationName.message as string)
                : "The official name of your company or team (e.g. Wayward Warlocks)."
            }
          />
        )}
      />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
        <Controller
          name="useCase"
          control={control}
          render={({ field }) => (
            <FormControl
              fullWidth
              required
              error={!!errors.useCase}
              sx={{ flexGrow: 1 }}
            >
              <InputLabel id="use-case-label">Primary Use Case</InputLabel>
              <Select
                {...field}
                labelId="use-case-label"
                label="Primary Use Case"
                required
                value={field.value || ""}
              >
                {USE_CASE_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {errors.useCase?.message
                  ? (errors.useCase.message as string)
                  : "What do you intend to use Frightbook for?"}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="organisationSize"
          control={control}
          render={({ field }) => (
            <FormControl
              fullWidth
              required
              error={!!errors.organisationSize}
              sx={{ flexGrow: 1 }}
            >
              <InputLabel id="organisationSize-label">
                Organization Size
              </InputLabel>
              <Select
                labelId="organisationSize-label"
                label="Organization Size"
                {...field}
              >
                <MenuItem value="">— Select Size —</MenuItem>
                {ORGANISATION_SIZE_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {errors.organisationSize
                  ? (errors.organisationSize.message as string)
                  : "Number of your team members."}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Stack>
    </Stack>
  );
};

