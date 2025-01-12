import { Country } from '../../types';
import { asiaCountries } from './asia';
import { europeCountries } from './europe';
import { middleEastCountries } from './middle-east';
import { africanCountries } from './africa';
import { oceaniaCountries } from './oceania';
import { northamericaCountries } from './north-america';

export const countries: Country[] = [
  ...middleEastCountries,
  ...asiaCountries,
  ...europeCountries,
  ...africanCountries,
  ...oceaniaCountries,
  ...northamericaCountries
];

export default countries;