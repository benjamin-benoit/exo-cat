import { Appointment, Cat } from "./types";

const baseURL = 'https://europe-west1-matters-test.cloudfunctions.net';

const getCats = (): Promise<Cat[]> => {
  return fetch(`${baseURL}/getCats`)
  .then(response => response.json())
  .then(data => data);
};

const getAdoptionAppointment = (catId: number): Promise<Appointment> => {
  return fetch(`${baseURL}/getAdoptionAppointment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      catId: catId,
    })
  })
  .then(response => response.json())
  .then(data => data)
};

const mattersService = {
  getCats,
  getAdoptionAppointment,
};

export default mattersService;