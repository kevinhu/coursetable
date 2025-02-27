/**
 * @file utilities used for fetching catalog files.
 */

import { catalogBySeasonQuery, listSeasonsQuery } from './catalog.queries';
import { GRAPHQL_ENDPOINT, STATIC_FILE_DIR } from '../config';
import fs from 'fs';
import { request } from 'graphql-request';

import winston from '../logging/winston';

/**
 * Get static catalogs for each season from Hasura,
 * @param overwrite - whether or not to skip existing catalogs.
 */
export async function fetchCatalog(
  overwrite: boolean
): Promise<{ [x: string]: PromiseSettledResult<unknown> }> {
  let seasons;
  // get a list of all seasons
  try {
    seasons = await request(GRAPHQL_ENDPOINT, listSeasonsQuery);
  } catch (err) {
    winston.error(err);
    throw Error(err);
  }

  winston.info(`Fetched ${seasons.seasons.length} seasons`);
  fs.writeFileSync(
    `${STATIC_FILE_DIR}/seasons.json`,
    JSON.stringify(seasons.seasons)
  );

  // for each season, fetch all courses inside it and save
  // (if overwrite = true or if file does not exist)
  const processSeasons = await seasons.seasons.map(
    async ({ season_code }: { season_code: string }) => {
      const output_path = `${STATIC_FILE_DIR}/catalogs/${season_code}.json`;

      if (!overwrite && fs.existsSync(output_path)) {
        winston.info(`Catalog for ${season_code} exists, skipping`);
        return;
      }

      let catalog;

      try {
        catalog = await request(GRAPHQL_ENDPOINT, catalogBySeasonQuery, {
          season: season_code,
        });
      } catch (err) {
        winston.error(err);
        throw err;
      }

      if (catalog.computed_listing_info) {
        fs.writeFileSync(
          output_path,
          JSON.stringify(catalog.computed_listing_info)
        );

        winston.info(
          `Fetched season ${season_code}: n=${catalog.computed_listing_info.length}`
        );
      }
    }
  );

  return Promise.allSettled(processSeasons);
}
