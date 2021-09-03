import faker from 'faker';
import React from 'react';

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';
 import EditIcon from '@material-ui/icons/Edit';
 import DeleteIcon from '@material-ui/icons/Delete';
import tableStyles from '../resources/tablestyle';


let USERS = [], STATUSES = ['Completed', 'Pending', 'Yet to Start'];

for(let i=0;i<14;i++) {
    USERS[i] = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        registerdate: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

function UserList() {

  const classes = tableStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Register Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.jobTitle}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.company}</Typography>
                </TableCell>
              <TableCell>{row.registerdate}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Completed' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Yet to Start' && 'orange'))
                    }}
                  >{row.status}</Typography>
                </TableCell>
                <TableCell>
                    <EditIcon style={{ color: 'grey' }}/>
                    <DeleteIcon style={{ color: 'red' }}/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination style={{ display:"flex" }}
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default UserList;