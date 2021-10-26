import menuStyles from '../resources/styles' 
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

function Dashboard(props) {
    const classes = menuStyles();

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            New User Page
        </div>
        </Container>
    );

}

export default Dashboard;