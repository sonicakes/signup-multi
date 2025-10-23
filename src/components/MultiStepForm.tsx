import {
  useForm,
  FormProvider,
  type Resolver,
  type DeepPartial
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema, type SignupFormData } from "../types/SignupFormSchema";
import { FORM_STEPS } from "../config/signupFormSteps";
import { useState } from "react";
import { Button, Box, useTheme, Typography} from "@mui/material";
import { ProgressBar } from "../components/utilities/ProgressBar";

const defaultValues: DeepPartial<SignupFormData> = {
  email: "",
  password: "",
  name: "",
  userRole: "",
  organisationName: "",
  organisationSize: "1-10", 
  useCase: "",
  teamInvites: [],
  pricingPlan: "Starter", //picked starter coz its free so ppl dont get overcharged if they overlooked it
  acceptedTerms: false,
  mailingList: false,
};

export const MultiStepForm = () => {
  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<SignupFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(signupSchema) as Resolver<SignupFormData, any>,
    defaultValues,
    mode: "onTouched",
  });

  const {
    handleSubmit,
    trigger,
    // TODO: integrated isSubmitting to include loading symbol to indicate that API request is being processed
    formState: { isSubmitSuccessful, isSubmitting },
  } = methods;

  const currentStepConfig = FORM_STEPS[currentStep];
  const isLastStep = currentStep === FORM_STEPS.length - 1;

  const handleNext = async () => {
    console.log("is last step", isLastStep);

    const stepFields = FORM_STEPS[currentStep].fields;
    const isValid = await trigger(stepFields as (keyof SignupFormData)[], {
      shouldFocus: true,
    });

    if (!isValid) {
      return;
    }

    if (isLastStep) {
      handleSubmit(onSubmit)();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = (data: SignupFormData) => {
    console.log("Form Submitted Successfully! Data payload:", data);
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: { xs: 2, sm: "0 auto" },
        padding: 4,
        borderRadius: 3,
        boxShadow: theme.shadows[10],
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h5"
        align="left"
        gutterBottom
        sx={{ color: theme.palette.primary.main, fontFamily: "Creepster" }}
      >
        Frightbook
      </Typography>
      {!isSubmitSuccessful && (
        <Typography variant="h1" align="center" gutterBottom>
          Sign Up Form
        </Typography>
      )}

      {!isSubmitSuccessful && (
        <ProgressBar
          currentStepIndex={currentStep}
          totalSteps={FORM_STEPS.length}
          stepTitle={currentStepConfig.title}
        />
      )}

      <FormProvider {...methods}>
        <currentStepConfig.component />
        {!isSubmitSuccessful && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            {currentStep !== 0 && (
              <Button variant="outlined" onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}
            <Button variant="contained" color="primary" onClick={handleNext}>
              {isLastStep ? "Submit Registration" : "Next Step"}
            </Button>
          </Box>
        )}
      </FormProvider>
    </Box>
  );
};

