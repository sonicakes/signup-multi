import { type FunctionComponent } from 'react';
// TODO - create individual step components
// import { StepAccountSetup } from "../components/steps/StepAccountSetup";
// import { StepIdentity } from "../components/steps/StepIdentity";
// import { StepOrganization } from "../components/steps/StepOrganization";
// import { StepTeam } from "../components/steps/StepTeam";
// import { StepLegal } from "../components/steps/StepLegal";
// import { StepReview } from "../components/steps/StepReview";

interface FormStep {
    id: 'account' | 'identity' | 'organization' | 'team' | 'legal' | 'review';
    title: string;
    component: FunctionComponent;
    fields: string[];
}

export const FORM_STEPS: FormStep[] =[
  { id: 'account', title: 'Account Setup', component: StepAccountSetup, fields: ['email', 'password'] },
  { id: 'identity', title: 'Identity', component: StepIdentity, fields: ['name', 'userRole'] },
  { id: 'organization', title: 'Company & Use Case', component: StepOrganization, fields: ['organisationName', 'organisationSize', 'useCase'] },
  { id: 'team', title: 'Team & Pricing', component: StepTeam, fields: ['teamInvites', 'pricingPlan'] },
  { id: 'legal', title: 'Legal Agreement & Communication', component: StepLegal, fields: ['acceptedTerms', 'mailingList'] },
  { id: 'review', title: 'Review & Submit', component: StepReview, fields: [] },
];

export const STEP_IDS = FORM_STEPS.map(step => step.id);