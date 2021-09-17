import * as React from "react";
import faker from "faker";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "username",
    headerName: "User Name",
    width: 150,
    editable: true,
  },
  {
    field: "contactno",
    headerName: "Contact No.",
    width: 160,
    editable: true,
  },
  {
    field: "location",
    headerName: "State/Zone/District/Area",
    width: 150,
    editable: true,
  },
  {
    field: "company",
    headerName: "Company / Team Name",
    width: 150,
    editable: true,
  },
  {
    field: "usertype",
    headerName: "User Type",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "Active",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "Active",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "Active",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "InActive",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "Active",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "InActive",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "Active",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "Active",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "InActive",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "Active",
  },
  {
    id: faker.random.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    contactno: faker.phone.phoneNumber("###-##########"),
    location: getLocation(),
    company: faker.company.companyName(),
    usertype: faker.name.jobType(),
    status: "Active",
  },
];

function getLocation() {
  return (
    faker.address.state() +
    " / " +
    faker.address.city() +
    " / " +
    faker.address.streetName() +
    " / " +
    faker.address.city()
  );
}
export default function JobListDG() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
