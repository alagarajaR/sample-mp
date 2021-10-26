import menuStyles from '../resources/styles' 
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
// import JobList from '../marketplace/JobWorklist';
import JobListDG from '../marketplace/JobListDG'


function JobListPage(props) {
    const classes = menuStyles();

    

    return (
        <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
            <JobListDG></JobListDG>
        </div>
        </Container>
    );

}
export default JobListPage;