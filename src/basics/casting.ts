type Employee = {
  name: string;
  startDate?: Date;
};

const json = '{ "name": "Jorge", "startDate": "2022-01-15T19:07:10.817Z" }';
const user = JSON.parse(json);
const employee = user as Employee; // casting

export {};
