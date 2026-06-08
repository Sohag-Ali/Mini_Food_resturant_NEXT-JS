import React from 'react';
import ReviewsPage from './ReviewsPage';

export const metadata = {
  title: {
    absolute: "All Reviews - Yatun khaijan",
  },
  description: "Best food review website in Bangladesh",
};

const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;