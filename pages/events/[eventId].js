import { Fragment } from "react";
import Head from "next/head";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Comments from "../../components/input/comments";

function EventDetailPage(props) {
  const { eventDetail } = props.selectedEvent;


  if (!eventDetail) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{eventDetail.title}</title>
        <meta name="description" content={eventDetail.description} />
      </Head>
      <EventSummary title={eventDetail.title} />
      <EventLogistics
        date={eventDetail.date}
        address={eventDetail.location}
      />
      <EventContent>
        <p>{eventDetail.description}</p>
      </EventContent>
      <Comments eventId={eventDetail._id} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {

  const { params } = context

  let event = await fetch(`http://localhost:3000/api/events/${params.eventId}`);
  event = await event.json()

  return {
    props: {
      selectedEvent: event,
    }
  };
}


export default EventDetailPage;
