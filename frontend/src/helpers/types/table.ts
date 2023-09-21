export type TableProps = {
  tableHead: string[];
  tableBody: {
    country: string;
    city: string;
    dob: string;
    price: number;
    days: string;
    blank: string;
  }[]; // Assuming tableBody is an array of JSX elements
};
