import colors from './colors'
import styled from 'styled-components'


const fonts = {
    paytoneRegular: 'Paytone-Regular'
};


const H1 = styled.h1`
    font-familyL ${fonts.paytoneRegular};
    color: ${colors.GRUEPR_BLUE}
    font-size: 10em;
`;

export {fonts, H1};