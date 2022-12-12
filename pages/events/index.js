import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {
  const router = useRouter();
  const { allEvents } = props.allevents;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All my events</title>
      </Head>
      <Head>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
}

export async function getServerSideProps() {
  let events = await fetch('https://saurabhn-nextevents.netlify.app/api/events')
  events = await events.json()

  return {
    props: {
      allevents: events,
    }
  };
}

export default AllEventsPage;
