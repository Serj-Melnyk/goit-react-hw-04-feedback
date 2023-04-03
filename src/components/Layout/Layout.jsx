import PropTypes from "prop-types"
import { Container } from "./LayoutStyled";

export const Layout = ({ children }) => {
    return (
        <Container>
            <main>{children}</main>
        </Container>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};