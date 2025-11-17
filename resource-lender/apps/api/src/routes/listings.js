import { Router } from 'express'
import { createListing, fetchListings, fetchSpecificListing, searchListings} from '../controllers/listing.controller.js'
import { updateLoan } from '../controllers/loans.controller.js';

const router = Router()
router.post('/createlisting', createListing);
router.get('/', fetchListings);
router.get('/search', searchListings);
router.get('/:id', fetchSpecificListing);
router.post('/updateLoan', updateLoan);

export default router
