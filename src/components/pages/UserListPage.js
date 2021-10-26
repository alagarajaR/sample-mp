import menuStyles from '../resources/styles' 
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import UserList from '../marketplace/UserList';
import UserListTable from '../marketplace/UserListTable'

function UserListPage(props) {
    const classes = menuStyles();

    return (
        <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
            <UserListTable></UserListTable>
        </div>
        </Container>
    );

}
export default UserListPage;