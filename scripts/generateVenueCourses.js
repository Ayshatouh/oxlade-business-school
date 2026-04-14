const fs = require('fs');
const path = require('path');
const { COURSE_LISTINGS } = require('../src/data/courseListings');

const venueCourses = COURSE_LISTINGS.map(listing => ({
  courseId: listing.courseId,
  title: listing.title,
  date: listing.date,
  venue: listing.venue,
  price: listing.price,
}));

const outPath = path.resolve(__dirname, '../src/data/venue-courses.json');
fs.writeFileSync(outPath, JSON.stringify(venueCourses, null, 2), 'utf8');
console.log('Venue courses JSON written to', outPath);
