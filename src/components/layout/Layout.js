import MainNavigatonBar from "./MainNavigation";

function Layout(props) {
    return <div>
        <MainNavigatonBar/>
        <main>
            {props.children}
        </main>
    </div>
}

export default Layout;