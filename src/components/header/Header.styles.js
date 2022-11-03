import colors from "../../ui/style/colors.js";
import styled from "styled-components";
import { H1 } from "../../ui/style/typography.js";

const StyledHeader = styled.div`
    background-color: ${colors.GRUEPR_BLUE}
    width: 100%;
    z-index: 20;
    position: fixed;
    font-size: 10em;
`;

const StyledGrueprLogo = styled(H1)`
  color: ${colors.GRUEPR_BLUE};
  font-size: 40px;
`;

export { StyledHeader, StyledGrueprLogo };
