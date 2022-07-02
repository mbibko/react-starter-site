import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export function NewMeetup() {
  return (
    <div>
      <h1>Add new Meetup</h1>

      <NewMeetupForm
        defaultValues={{
          title: "Some title",
          description: "Some description",
          address: "Address",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        }}
      />
    </div>
  );
}
