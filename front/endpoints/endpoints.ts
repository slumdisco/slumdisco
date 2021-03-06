const BASE_API_TABLE_ENDPOINT =
  "https://api.airtable.com/v0/appDXA3H2rcq1yTWK/";

const GIGS_TABLE_ENDPOINT =
  BASE_API_TABLE_ENDPOINT +
  "Gigs?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc";
const VENUES_TABLE_ENDPOINT = BASE_API_TABLE_ENDPOINT + "Venues";
const MIXES_TABLE_ENDPOINT = BASE_API_TABLE_ENDPOINT + "Mixes";

export { GIGS_TABLE_ENDPOINT, VENUES_TABLE_ENDPOINT, MIXES_TABLE_ENDPOINT };
