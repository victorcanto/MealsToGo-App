import * as styledComponents from "styled-components/native";

import { Theme } from ".";

const {
    default: styled,
    css,
    ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<Theme>;

export { css, ThemeProvider };
export default styled;
