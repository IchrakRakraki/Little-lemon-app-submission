import { useCallback, useEffect, useState } from "react";
import type {
  Contact,
  Reservation,
  ErrorType,
  Touched,
} from "../Containers/BookingPage/BookingPage";
import { minMaxDiners } from "../utils/constants";

export const useFormValidation = (reservation: Reservation, contact: Contact, touched: Touched) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [errors, setErrors] = useState<ErrorType>({
    firstName: "",
    lastName: "",
    email: "",
    dinersCount: "",
  });
  const { firstName, lastName, email } = contact;
  const { dinersCount } = reservation;

  const validateForm = useCallback(() => {
    const newErrors: ErrorType = { firstName: "", lastName: "", email: "", dinersCount: "" };
    if (!firstName.trim() && touched.firstName) newErrors.firstName = "First name is required";
    if (!lastName.trim() && touched.lastName) newErrors.lastName = "Last name is required";
    if (touched.email) {
      if (!email.trim()) newErrors.email = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email address";
    }

    if (touched.dinersCount) {
      if (dinersCount < minMaxDiners.min)
        newErrors.dinersCount = `At least ${minMaxDiners.min} diner required`;
      else if (dinersCount > minMaxDiners.max)
        newErrors.dinersCount = `Maximum ${minMaxDiners.max} diners allowed`;
    }
    setErrors({ ...newErrors });
    setIsSubmitDisabled(!Object.values(newErrors).some(msg => msg !== ""));
  }, [firstName, lastName, email, dinersCount, touched]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);
  return { isSubmitDisabled: isSubmitDisabled, errors: errors };
};
