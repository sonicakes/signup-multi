import * as yup from "yup";

export const ORGANISATION_SIZE_OPTIONS = [
  "1-10",
  "11-50",
  "51-100",
  "100+",
] as const;
export const PRICING_PLAN_OPTIONS = [
  "Starter",
  "Professional",
  "Enterprise",
  "Global",
] as const;
export const USER_ROLE_OPTIONS = [
  "Ghost",
  "Zombie",
  "Vampire",
  "Clown",
  "Werewolf",
  "Mummy",
  "Demon",
  "Witch/Warlock/Magic Specialist",
  "UFO",
  "Prefer not to say",
];
export const USE_CASE_OPTIONS = [
  "Haunting Houses",
  "Howling at the Moon",
  "Casting Spells",
  "Lurking in the Shadows",
  "Raising the Undead",
  "Collecting Souls",
  "Building a Lair",
  "Contacting the Extraterrestrial",
  "Producing Paranormal Activity",
];

export const signupSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Email is a required field."),

    password: yup
      .string()
      .min(8, "Password must be at least 8 characters.")
      .matches(/[0-9]/, "Password must contain at least 1 number.")
      .required("Password is a required field."),
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters long.")
      .required("Name is a required field."),

    userRole: yup
      .mixed<(typeof USER_ROLE_OPTIONS)[number]>()
      .oneOf(USER_ROLE_OPTIONS, "Please select a valid user role option.")
      .required("User Role is a required field."),

    organisationName: yup
      .string()
      .min(2, "Organization name must be at least 2 characters long.")
      .required("Organization name is required."),

    organisationSize: yup
      .mixed<(typeof ORGANISATION_SIZE_OPTIONS)[number]>()
      .oneOf(ORGANISATION_SIZE_OPTIONS, "Please select a valid size option.")
      .required("Organization size is required."),

    useCase: yup
      .mixed<(typeof USE_CASE_OPTIONS)[number]>()
      .oneOf(USE_CASE_OPTIONS, "Please select a valid use case option.")
      .required("Organization size is required."),

    teamInvites: yup
      .array()
      .of(yup.string().email("Please enter a valid email address.").trim())
      .optional(),

    pricingPlan: yup
      .mixed<(typeof PRICING_PLAN_OPTIONS)[number]>()
      .oneOf(
        PRICING_PLAN_OPTIONS,
        "Please select one of the three pricing options."
      )
      .required("A pricing plan selection is required."),

    acceptedTerms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions to proceed.")
      .required("Accepting terms is required."),

    mailingList: yup.boolean().default(false).optional(),
  })
  .required();

export type SignupFormData = yup.InferType<typeof signupSchema>;
