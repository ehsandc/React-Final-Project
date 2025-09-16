import { useState, useEffect, useMemo } from "react";

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEvents = () => {
    setLoading(true);
    // Use relative path that works both in development and production
    const baseUrl = import.meta.env.BASE_URL || '/';
    fetch(`${baseUrl}events.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => {
        // The JSON file has events nested under "events" property
        setEvents(data.events || []);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, events]);

  return { events, filteredEvents, setSearchQuery, error, loading };
};

export default useFetchEvents;
