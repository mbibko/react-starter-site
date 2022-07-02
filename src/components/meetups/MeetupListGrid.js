import { MeetupList } from "./MeetupList";

export function MeetupListGrid({ data }) {
  return (
    <div className="row row-cols-4 g-4">
      <MeetupList data={data} />
    </div>
  );
}
