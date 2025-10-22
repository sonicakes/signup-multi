import React from "react";
import { useFormContext } from "react-hook-form";
import { Stack, Typography, Paper, Divider, Box, Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import type { SignupFormData } from "../../types/SignupFormSchema";

const formatDisplayValue = (
  key: keyof SignupFormData,
  value: any
//   TODO - change to proper type!!!!!!
): React.ReactNode => {
  if (value === null || value === undefined || value === "") {
    return (
      <Typography
        variant="body2"
        sx={{ fontStyle: "italic", color: "text.secondary" }}
      >
        Not provided
      </Typography>
    );
  }

  if (key === "password") {
    return (
      <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
        {/* TODO - change to actual value so we can view/edit */}
        ••••••••
      </Typography>
    );
  }

  if (typeof value === "boolean") {
    return value ? "Yes (Accepted)" : "No (Declined)";
  }

  if (key === "teamInvites" && Array.isArray(value)) {
    if (value.length === 0) return "No invitations sent";
    return (
      <Stack component="ul" sx={{ m: 0, pl: 2, listStyleType: "none" }}>
        {value.map((email: string, index: number) => (
          <Typography component="li" key={index} variant="body2">
            {email}
          </Typography>
        ))}
      </Stack>
    );
  }

  return value.toString();
};

const SummaryItem: React.FC<{
  label: string;
//   TODO - proper type!!!!! & remove react fc
  value: any;
  fieldKey: keyof SignupFormData;
}> = ({ label, value, fieldKey }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: 1,
      borderBottom: "1px dotted",
      borderColor: "divider",
    }}
  >
    <Typography variant="body1" fontWeight="bold">
      {label}:
    </Typography>
    <Box sx={{ maxWidth: "60%", textAlign: "right", wordBreak: "break-word" }}>
      {formatDisplayValue(fieldKey, value)}
    </Box>
  </Box>
);

export const StepReview = () => {
  const {
    watch,
    formState: { isSubmitSuccessful },
  } = useFormContext<SignupFormData>();

  const formData = watch();

  const accountData = {
    email: formData.email,
    password: formData.password,
  };
  const identityData = {
    name: formData.name,
    userRole: formData.userRole,
  };
  const organizationData = {
    organisationName: formData.organisationName,
    organisationSize: formData.organisationSize,
    useCase: formData.useCase,
    pricingPlan: formData.pricingPlan,
  };
  const teamData = {
    teamInvites: formData.teamInvites,
  };
  const legalData = {
    acceptedTerms: formData.acceptedTerms,
    mailingList: formData.mailingList,
  };

  if (isSubmitSuccessful) {
    return (
      <Paper
        elevation={3}
        sx={{ p: 4, textAlign: "center", bgcolor: "background.paper" }}
      >
        <CheckCircleIcon sx={{ fontSize: 80, color: "primary.main", mb: 2 }} />
        <Typography
          variant="h1"
          sx={{ mb: 2, color: "primary.main" }}
        >
          Registration Complete!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          Thank you for registering, <b>{formData.name || "valued user"}</b>. We
          have processed your submission and an email confirmation is on its way
          to <b>{formData.email}</b>.
        </Typography>

        <Divider sx={{ my: 3 }} />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ color: "text.secondary", mb: 2 }}
        >
          <Typography variant="body1" sx={{ mr: 0.5 }}>
            While you wait, check out how to
            {/* TODO - insert Shorthand story link here */}
            <Link
              href="#"
              target="_blank"
              color="secondary"
              underline="hover"
              sx={{ ml: 0.5 }}
            >
              get the best value of Frightbook <LaunchIcon fontSize="small" />
            </Link>
          </Typography>
        </Stack>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Dont forget to follow/haunt/stalk us on socials:
        </Typography>
        <Stack direction="row" spacing={2} justifyContent={"center"}>
          <Link href="#" target="_blank" sx={{ ml: 0.5 }}>
            <InstagramIcon fontSize="large" />
          </Link>
          <Link href="#" target="_blank" sx={{ ml: 0.5 }}>
            <FacebookIcon fontSize="large" />
          </Link>
          <Link href="#" target="_blank" sx={{ ml: 0.5 }}>
            <LinkedInIcon fontSize="large" />
          </Link>
        </Stack>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" sx={{ mb: 2, color: "secondary.main" }}>
          Submitted Details Summary
        </Typography>

        <Box sx={{ maxWidth: 600, mx: "auto" }}>
          <SummaryItem
            label="Email"
            value={accountData.email}
            fieldKey="email"
          />
          <SummaryItem
            label="Role"
            value={identityData.userRole}
            fieldKey="userRole"
          />
          <SummaryItem
            label="Organization Name"
            value={organizationData.organisationName}
            fieldKey="organisationName"
          />
          <SummaryItem
            label="Org size"
            value={organizationData.organisationSize}
            fieldKey="organisationSize"
          />
          <SummaryItem
            label="Plan"
            value={organizationData.pricingPlan}
            fieldKey="pricingPlan"
          />
          <SummaryItem
            label="Team"
            value={teamData.teamInvites}
            fieldKey="teamInvites"
          />
          <SummaryItem
            label="Legal"
            value={legalData.acceptedTerms}
            fieldKey="acceptedTerms"
          />
          <SummaryItem
            label="Comms"
            value={legalData.mailingList}
            fieldKey="mailingList"
          />
        </Box>

        <Box sx={{ mt: "20px" }} bgcolor={"secondary"}>
          <Typography variant="body2" sx={{color: "text.secondary"}}>
            If you have any questions or concerns, reach our ghostly support
            team at
               <Link
              href="mailto:screamsupport@frightbook.com"
              color="secondary"
              underline="hover"
              sx={{ fontWeight: "bold", ml: 0.5  }}
            >
              screamsupport@frightbook.com
            </Link> or call 
            <Link
              href="tel:1-800-BOO-HELP"
              color="secondary"
              underline="hover"
              sx={{ fontWeight: "bold", ml: 0.5 }}
            >
              13-666-BOO-HELP
            </Link>
         — we’ll raise a ticket (and maybe the dead).
          </Typography>
        </Box>
      </Paper>
    );
  }
  return (
    <Stack spacing={4}>
      <Divider />
      <Typography variant="h2">
        Review and Confirm Your Details
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        Please review the information below carefully before submitting your
        final registration. If you need to make changes, use the "Back" button.
      </Typography>
      <Paper elevation={3} sx={{ p: 3, bgcolor: "background.paper" }}>
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            1. Account Credentials
          </Typography>
          <Divider sx={{ my: 2 }} />
          <SummaryItem
            label="Email"
            value={accountData.email}
            fieldKey="email"
          />
          <SummaryItem
            label="Password"
            value={accountData.password}
            fieldKey="password"
          />
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            2. Identity
          </Typography>
          <Divider sx={{ my: 2 }} />
          <SummaryItem
            label="Full Name"
            value={identityData.name}
            fieldKey="name"
          />
          <SummaryItem
            label="Role"
            value={identityData.userRole}
            fieldKey="userRole"
          />
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            3. Organization & Pricing
          </Typography>
          <Divider sx={{ my: 2 }} />
          <SummaryItem
            label="Organization Name"
            value={organizationData.organisationName}
            fieldKey="organisationName"
          />
          <SummaryItem
            label="Organization Size"
            value={organizationData.organisationSize}
            fieldKey="organisationSize"
          />
          <SummaryItem
            label="Use Case"
            value={organizationData.useCase}
            fieldKey="useCase"
          />
          <SummaryItem
            label="Pricing Plan"
            value={organizationData.pricingPlan}
            fieldKey="pricingPlan"
          />
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            4. Team Invitations
          </Typography>
          <Divider sx={{ my: 2 }} />
          <SummaryItem
            label="Invited Emails"
            value={teamData.teamInvites}
            fieldKey="teamInvites"
          />
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            5. Legal & Consent
          </Typography>
          <Divider sx={{ my: 2 }} />
          <SummaryItem
            label="Terms Accepted"
            value={legalData.acceptedTerms}
            fieldKey="acceptedTerms"
          />
          <SummaryItem
            label="Mailing List"
            value={legalData.mailingList}
            fieldKey="mailingList"
          />
        </Stack>
      </Paper>
    </Stack>
  );
};
