import MainNavigatonBar from "./MainNavigation";

function Layout(props) {
    return <div>
        <MainNavigatonBar {...props}/>
        <main>
            {props.children}
        </main>
    </div>
}

export default Layout;