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


let jobs = [], STATUSES = ['Completed', 'Pending', 'Yet to Start'];

for(let i=0;i<20;i++) {
    jobs[i] = {
        jobid: faker.internet.mac().toUpperCase(),
        siteid: faker.address.zipCode(),
        siteName: faker.address.streetName(),
        projectid: faker.random.alphaNumeric(7).toUpperCase(),
        aspteam: faker.company.companyName(),
        createddate: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
        completiondate: faker.date.past().toLocaleDateString('en-US'),
    }
}

function JobList() {

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
            <TableCell className={classes.tableHeaderCell}>Job Id</TableCell>
            <TableCell className={classes.tableHeaderCell}>Site Id/Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Project Id</TableCell>
            <TableCell className={classes.tableHeaderCell}>ASP Team</TableCell>
            <TableCell className={classes.tableHeaderCell}>Register Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>Completion Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.jobid}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.jobid} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={8}>
                          <Typography className={classes.name}>{row.jobid}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.siteid}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.siteName}</Typography>
              </TableCell>
              <TableCell>{row.projectid}</TableCell>
              <TableCell>{row.aspteam}</TableCell>
              <TableCell>{row.createddate}</TableCell>
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
                <TableCell>{row.completiondate}</TableCell>
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
            count={jobs.length}
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

export default JobList;