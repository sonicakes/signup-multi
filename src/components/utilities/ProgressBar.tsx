import React from "react";
import { Box, Typography, LinearProgress, useTheme } from "@mui/material";

interface StepProgressBarProps {
  currentStepIndex: number;
  totalSteps: number;
  stepTitle: string;
}

export const ProgressBar: React.FC<StepProgressBarProps> = ({
  currentStepIndex,
  totalSteps,
  stepTitle,
}) => {
  const theme = useTheme();

  const progressPercent = Math.round(
    ((currentStepIndex + 1) / totalSteps) * 100
  );

  const progressColor = theme.palette.secondary.main;

  return (
    <Box sx={{ width: "100%", mb: 4, pt: 1 }}>
      <Typography
        variant="overline"
        sx={{
          display: "block",
          fontSize: "0.85rem",
          fontWeight: "bold",
          color: "text.secondary",
          letterSpacing: "0.05em",
        }}
      >
        Step {currentStepIndex + 1} of {totalSteps}
      </Typography>

      <Typography
        variant="h4"
        sx={{
          mb: 1,
          color: progressColor,
          fontSize: "1.75rem",
          letterSpacing: "0.01em",
        }}
      >
        {stepTitle}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={progressPercent}
        aria-label={`Progress through ${totalSteps} steps`}
        aria-valuetext={`Step ${
          currentStepIndex + 1
        } of ${totalSteps} (${progressPercent}%) complete`}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: theme.palette.mode === "light" ? "#EAE0D0" : "grey",
          "& .MuiLinearProgress-bar": {
            backgroundColor: progressColor,
            borderRadius: 5,
          },
        }}
      />
    </Box>
  );
};
