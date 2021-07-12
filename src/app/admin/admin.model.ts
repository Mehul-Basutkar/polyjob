export class Profile {
  username: string;
  typeofcompany: string;
  Typeofcontrol: string;
  Typeofproduct: string;
  Categories: string;
  subcategories: string;
  numberofemployee: number;
  Address: string;
  district: string;
  city: string;
  Pincode: number;
  Achievements: string;
  optionalcontactnumber: number;
  companyimages: string;
  contactPname: string;
  designation: string;
  contactnum: number;
  email: string;
}

export class Addjob {
  id: number;
  // tslint:disable-next-line: variable-name
  job_type: string;
  technologies: any;
  description: string;
  salary: string;
  district: string;
  city: string;
  experiance: string;
  post: string;
  vacancies: [];
}
