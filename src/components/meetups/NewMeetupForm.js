import { FormProvider } from "react-hook-form";
import { useCustomForm } from "../../hooks/useCustomForm";
import { TextControl } from "../forms/TextControl";
import { TextareaControl } from "../forms/TextareaControl";

export function NewMeetupForm(props) {
  const {
    formId,
    methods,
    handleSubmit,
    onError,
    formState: { isSubmitting },
  } = useCustomForm(props);

  const onSubmit = (data) => {
    console.log(data);
    alert("Okay");
  };

  const registerOptions = {
    title: { required: "Field is required" },
    image: { required: "Field is required" },
    address: { required: "Field is required" },
    description: { required: "Field is required" },
  };

  return (
    <FormProvider {...methods}>
      <form id={formId} onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className="mb-3">
          <TextControl
            type="text"
            name="title"
            labelText="Meetup Title"
            registerOptions={registerOptions.title}
          />
        </div>
        <div className="mb-3">
          <TextControl
            type="text"
            name="image"
            labelText="Meetup Image"
            registerOptions={registerOptions.image}
          />
        </div>
        <div className="mb-3">
          <TextControl
            type="url"
            name="address"
            labelText="Meetup Address"
            registerOptions={registerOptions.address}
          />
        </div>
        <div className="mb-3">
          <TextareaControl
            name="description"
            labelText="Meetup Description"
            registerOptions={registerOptions.description}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              />
              Submitting
            </>
          ) : (
            <>Submit</>
          )}
        </button>
      </form>
    </FormProvider>
  );
}
