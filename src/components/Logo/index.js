import LogoRoot from "./LogoRoot"
import { APP_NAME } from "../../data/constants"
import { Link } from "react-router-dom"

const Logo = (props) => {
    return (
        <LogoRoot
            variant="h6"
            component={Link}
            to='/'
            href="#"
            {...props}
        >
            {APP_NAME}
        </LogoRoot>
    )
}

export default Logo