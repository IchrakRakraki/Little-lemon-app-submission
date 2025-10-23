type rangeDiners = { min: number; max: number };
type rangeTime = { min: string; max: string };
export const minMaxDiners: rangeDiners = { min: 1, max: 20 };
export const minMaxTime: rangeTime = { min: "12:00", max: "22:00" };

// Reservation error messages
export const timeErrorMsg = "Reservation time is required";
export const dinersErrorMsg: { min: string; max: string } = {
  min: `At least ${minMaxDiners.min} diner required`,
  max: `Maximum ${minMaxDiners.max} diners allowed`,
};
export const occasionErrorMsg = "Occasion is required";

// Contact error messages
export const firstNameErrorMsg = "First name is required";
export const lastNameErrorMsg = "Last name is required";
export const emailErrorMsg: { required: string; invalid: string } = {
  required: "Email is required",
  invalid: "Invalid email address",
};
