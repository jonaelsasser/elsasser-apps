import { createDirectus, rest } from "@directus/sdk";

interface NavigationItem {
  text: string;
  url: string;
}

interface NavigationButton {
  text: string;
  url: string;
  style: string;
}

interface Event {
  id: string;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  type: string;
  app: string;
  location: string | null;
  location_url: string | null;
  date: string;
  end_date: string | null;
  sport_match: string | null;
}

interface App {
  id: string;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  hostname: string;
  name: string;
  language: string;
  branding: string;
  navigation: NavigationItem[];
  navigation_buttons: NavigationButton[];
  events: Event[];
}

interface Schema {
  apps: App[];
}

// Client with REST support
const client = createDirectus<Schema>("https://backend.elsasser.cloud").with(
  rest()
);
