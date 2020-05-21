// import original module declarations
import 'styled-components';

// and extend them!
// TODO: Make this DRY
declare module 'styled-components' {
  export interface DefaultTheme {
    bodyGradientLeft: string;
    bodyGradientRight: string;
    formBg: string;
    inputBg: string;
    inputHover: string;
    submitBg: string;
    submitHover: string;
    iconColor: string;
    mobile: string;
  }
}
