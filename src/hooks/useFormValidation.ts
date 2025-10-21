import { useCallback, useEffect, useState } from "react";
import type { Contact, Reservation } from "../Containers/BookingPage/BookingPage";

export const useFormValidation = (reservation: Reservation, contact: Contact) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const { firstName, lastName, email } = contact;
  const { dinersCount } = reservation;

  const validateForm = useCallback(() => {
    if (!firstName || !lastName || !email || dinersCount < 1) return false;
    return true;
  }, [firstName, lastName, email, dinersCount]);

  useEffect(() => {
    setIsSubmitDisabled(!validateForm());
  }, [validateForm]);
  return isSubmitDisabled;
};
