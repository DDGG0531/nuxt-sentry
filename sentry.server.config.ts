import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://90967af761cc4293b11384f31ec0cd14@o1375478.ingest.us.sentry.io/4508441663045632",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
