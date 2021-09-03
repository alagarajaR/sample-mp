import { ListItem, List, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import ViewListRoundedIcon from "@material-ui/icons/ViewListRounded";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";

function DrawerPage(props) {
  const { history } = props;
  const itemList = [
    {
      text: "Dashboard",
      icon: <DashboardRoundedIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "Role Access Matrix",
      icon: <TuneRoundedIcon />,
      onClick: () => history.push("/roleam"),
    },
    {
      text: "User List",
      icon: <GroupRoundedIcon />,
      onClick: () => history.push("/userlist"),
    },
    {
      text: "Joblist",
      icon: <ViewListRoundedIcon />,
      onClick: () => history.push("/joblist"),
    },
    {
      text: "New User",
      icon: <GroupAddRoundedIcon />,
      //onClick : () =>  history.push("/")
    },
  ];

  return (
    <List>
      {itemList.map((item, index) => {
        const { text, icon } = item;
        return (
          <ListItem button key={text}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default DrawerPage;
