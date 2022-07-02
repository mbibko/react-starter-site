import { useEffect, useState } from "react";
import { MeetupListGrid } from "../components/meetups/MeetupListGrid";
import { Link } from "react-router-dom";

export function AllMeetups() {
  const [meetups, setMeetups] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch("https://learn-react-6a98d-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setMeetups(
          data && Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        );
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return <p>Error load Meetups. Please check internet connection</p>;

  return (
    <section>
      <h1>All Meetups</h1>

      {meetups?.length > 0 ? (
        <MeetupListGrid data={meetups} />
      ) : (
        <>
          <p>No meetups here. Please add new one.</p>
          <Link to={"/new-meetup"} className="btn btn-primary">
            Add meetup
          </Link>
        </>
      )}
    </section>
  );
}
