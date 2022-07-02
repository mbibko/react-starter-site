import { MeetupItem } from "./MeetupItem";

export function MeetupList({ data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="col">
          <MeetupItem data={item} />
        </div>
      ))}
    </>
  );
}
