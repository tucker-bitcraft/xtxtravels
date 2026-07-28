/**
 * Single source of truth for trip inventory.
 *
 * Every JSON file in src/packages/ is a destination package: country-level
 * metadata plus the trips that run there, each with a full day-by-day
 * itinerary. Drop a new JSON file in that folder and it flows through to the
 * trips grid, the homepage featured row, and its own /trips/<slug> page with
 * no further wiring.
 */

const modules = import.meta.glob('../packages/*.json', { eager: true });

/** All destination packages, ordered alphabetically by country. */
export const packages = Object.values(modules)
  .map((mod) => mod.default ?? mod)
  .sort((a, b) => a.country.localeCompare(b.country));

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

/**
 * Flattened trip list. Each trip carries its parent package's country/region
 * down with it, plus the display strings the card and detail templates need.
 */
export const trips = packages.flatMap((pkg) =>
  pkg.trips.map((trip) => ({
    ...trip,
    country: pkg.country,
    countrySlug: pkg.slug,
    region: pkg.region,
    href: `/trips/${trip.slug}`,
    priceLabel: currency.format(trip.priceUSD),
    metaLabel: `${trip.days}d · Max ${trip.maxGuests} guests`,
  }))
);

/** The three trips surfaced in the homepage "Curated Voyages" row. */
export const featuredTrips = trips.filter((trip) => trip.featured);

/** Country names, for the trips-page filter row. */
export const countries = packages.map((pkg) => pkg.country);

/** Look up a single trip by its slug. Used by /trips/[slug]. */
export function getTrip(slug) {
  return trips.find((trip) => trip.slug === slug);
}
