import PropTypes from "prop-types"
import { Title } from "./SectionStyled";

export const Section = ({children, title}) => {

    return (

        <section> 
            <Title>{title}</Title>
            {children}

        </section>

    )
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}