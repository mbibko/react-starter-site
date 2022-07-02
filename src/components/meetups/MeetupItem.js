import { Card } from "../ui/Card";

export function MeetupItem({ data: { title, image, address, description } }) {
  return (
    <Card>
      <div className="card">
        <img src={image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <address>{address}</address>
          <p className="card-text">{description}</p>
          <div className="btn btn-primary">"To favorites"</div>
        </div>
      </div>
    </Card>
  );
}
