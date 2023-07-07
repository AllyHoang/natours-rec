/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = stripe('pk_test_51NQtblAl0q3T8XfkyAuofozbUwVwYuisIGANU9q8FOhXeV71aml5vTA7DYMnaqd4qiR0mvp5HIcvnWDBbIWlvDHq00LMq6cQ5N');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};