import {DefaultTheme} from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const theme: DefaultTheme = {
  borderRadius: {
    small: 4,
    medium: 6,
    big: 8,
  },

  wp,
  hp,

  padding: {
    small: wp('1%'),
    medium: wp('3%'),
    big: wp('5%'),
    large: wp('12%'),
  },

  fontSize: {
    small: RFValue(11),
    medium: RFValue(14),
    large: RFValue(18),
    headline: RFValue(32),
    headline2: RFValue(42),
  },

  colors: {
    primary: '#323062',
    primary2: '#4e4c9a',
    primary_highlight: '#cccafc',

    secondary: '#50A9FC',
    secondary_highlight: '#5099dc',

    danger: '#F769A2',
    danger_highlight: '#FCCADE',

    success: '#5ED46A',
    success_highlight: '#CAFCCF',

    info: '#5e9dd4',
    info_highlight: '#cae5fc',

    background: {
      primary: '#FDFDFF',
    },

    white: '#FFFFFF',

    texts: {
      primary: '#525252',
      secondary: '#757575',
    },

    shadow: '#A3A8B1',

    disabled: '#838B90',
  },
};

export default theme;
