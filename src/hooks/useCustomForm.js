import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { generateID } from "../helpers";

export function useCustomForm({
  id = "Form",
  defaultValues = {},
  validate = false,
  onFormSuccess = () => {},
  createForm = () => {},
  updateForm = () => {},
  removeForm = () => {},
}) {
  const methods = useForm({
    defaultValues,
    shouldFocusError: false,
    mode: "onBlur",
    shouldUnregister: true,
  });
  const { handleSubmit } = methods;
  const formId = id + "_" + generateID(id);
  const ref = useRef(null);
  const onSubmit = (data) => {
    try {
      return onFormSuccess(data);
    } catch (e) {
      updateForm({ formId, data: { error: true } });
    } finally {
      updateForm({ formId, data: { error: false } });
    }
  };
  const onError = () => {
    updateForm({ formId, data: { error: true } });
  };

  useEffect(() => {
    createForm({ formId });
    return () => removeForm(formId);
  }, []);

  useEffect(() => {
    if (validate) {
      handleSubmit(onSubmit, onError)();
    }
  }, [validate]);

  return {
    formId,
    ref,
    methods,
    onSubmit,
    onError,
    ...methods,
  };
}
