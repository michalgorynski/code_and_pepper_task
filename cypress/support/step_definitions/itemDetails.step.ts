import { Then, When, Given } from '@badeball/cypress-cucumber-preprocessor';
import { ItemDetailsPage } from '../../utils/views/itemDetailsPage';
const itemDetails = new ItemDetailsPage();

Then('Items details page is opened', () => {
  itemDetails.urlIsCorrect();
});

Then('Items details are correct', () => {
  itemDetails.verifyItemsDetails();
});
