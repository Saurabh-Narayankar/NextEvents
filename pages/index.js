import Head from "next/head";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";

function HomePage(props) {

  const { filteredEvents } = props.events

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <br />
      <h1>Featured - Events</h1>
      <EventList items={filteredEvents} />
      <br/>
      <NewsletterRegistration />
    </div>
  );
}

export async function getServerSideProps() {
  let featuredEvents = await fetch('http://localhost:3000/api');
  featuredEvents = await featuredEvents.json()

  return {
    props: {
      events: featuredEvents,
    }
  };
}

export default HomePage;
