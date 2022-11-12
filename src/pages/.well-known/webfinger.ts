import type { APIRoute } from "astro";

export const get: APIRoute = async function get() {
  return {
    body: JSON.stringify({
      subject: "acct:donk@mas.to",
      aliases: ["https://mas.to/@donk", "https://mas.to/users/donk"],
      links: [
        {
          rel: "http://webfinger.net/rel/profile-page",
          type: "text/html",
          href: "https://mas.to/@donk",
        },
        {
          rel: "self",
          type: "application/activity+json",
          href: "https://mas.to/users/donk",
        },
        {
          rel: "http://ostatus.org/schema/1.0/subscribe",
          template: "https://mas.to/authorize_interaction?uri={uri}",
        },
      ],
    }),
  };
};
