import {
  DesignToken,
  ColorValue,
  SpaceValue,
  BorderWidthValue,
  BorderColorValue,
  BackgroundColorValue,
  BorderStyleValue,
  BoxShadowValue,
} from '../types/designToken';

interface AuthenticatorModalStyle {
  width: DesignToken<SpaceValue>;
  height: DesignToken<SpaceValue>;
  backgroundColor: DesignToken<ColorValue>;
  top: DesignToken<SpaceValue>;
  left: DesignToken<SpaceValue>;
}

interface AuthenticatorRouterStyle {
  borderWidth: DesignToken<BorderWidthValue>;
  borderStyle: DesignToken<BorderStyleValue>;
  borderColor: DesignToken<BorderColorValue>;
  backgroundColor: DesignToken<BackgroundColorValue>;
  boxShadow: DesignToken<BoxShadowValue>;
}

interface AuthenticatorFooterStyle {
  paddingBottom: DesignToken<SpaceValue>;
}

interface AuthenticatorFormStyle {
  padding: DesignToken<SpaceValue>;
}

interface AuthenticatorStateStyle {
  inactive: {
    backgroundColor: DesignToken<BackgroundColorValue>;
  };
}

interface AuthenticatorOrContainerStyle {
  color: DesignToken<ColorValue>;
  orLine: {
    backgroundColor: DesignToken<BackgroundColorValue>;
  };
}

interface AuthenticatorContainerToken {
  widthMax: DesignToken<SpaceValue>;
}
export interface AuthenticatorTokens {
  maxWidth: DesignToken<SpaceValue>;
  modal: AuthenticatorModalStyle;
  container: AuthenticatorContainerToken;
  router: AuthenticatorRouterStyle;
  footer: AuthenticatorFooterStyle;
  form: AuthenticatorFormStyle;
  state: AuthenticatorStateStyle;
  orContainer: AuthenticatorOrContainerStyle;
}

export const authenticator: AuthenticatorTokens = {
  maxWidth: { value: '60rem' },
  modal: {
    width: { value: '{space.relative.full}' },
    height: { value: '{space.relative.full}' },
    backgroundColor: { value: '{colors.overlay.50.value}' },
    top: { value: '{space.zero}' },
    left: { value: '{space.zero}' },
  },
  container: {
    widthMax: { value: '30rem' },
  },
  router: {
    borderWidth: { value: '{borderWidths.small.value}' },
    borderStyle: { value: 'solid' },
    borderColor: { value: '{colors.border.primary.value}' },
    backgroundColor: { value: '{colors.background.primary.value}' },
    boxShadow: { value: '{shadows.medium.value}' },
  },
  footer: {
    paddingBottom: { value: '{space.medium.value}' },
  },
  form: {
    padding: { value: '{space.xl.value}' },
  },
  state: {
    inactive: {
      backgroundColor: { value: '{colors.background.secondary.value}' },
    },
  },
  orContainer: {
    color: { value: '{colors.neutral.80.value}' },
    orLine: {
      backgroundColor: { value: '{colors.background.primary.value}' },
    },
  },
};
