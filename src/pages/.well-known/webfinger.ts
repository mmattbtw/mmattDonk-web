import type { APIRoute } from "astro";

export const get: APIRoute = async function get() {
  return {
    body: JSON.stringify({
      subject: "acct:donk@fosstodon.org",
      aliases: ["https://fosstodon.org/@donk", "https://fosstodon.org/users/donk"],
      links: [
        {
          rel: "http://webfinger.net/rel/profile-page",
          type: "text/html",
          href: "https://fosstodon.org/@donk",
        },
        {
          rel: "self",
          type: "application/activity+json",
          href: "https://fosstodon.org/users/donk",
        },
        {
          rel: "http://ostatus.org/schema/1.0/subscribe",
          template: "https://fosstodon.org/authorize_interaction?uri={uri}",
        },
      ],
    }),
  };
};
