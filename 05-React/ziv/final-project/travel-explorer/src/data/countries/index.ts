import { Country } from '../../types';
import { asianCountries } from './asia';
import { europeanCountries } from './europe';
import { middleEastCountries } from './middle-east';
import { africanCountries } from './africa';
import { oceaniaCountries } from './oceania';
import { northAmericanCountries } from './north-america';

export const countries: Country[] = [
  ...middleEastCountries,
  ...asianCountries,
  ...europeanCountries,
  ...africanCountries,
  ...oceaniaCountries,
  ...northAmericanCountries
];

export default countries;