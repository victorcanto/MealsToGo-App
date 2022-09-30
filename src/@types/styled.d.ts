import { Theme } from "@infra/theme";

declare module "styled-components/native" {
    export interface DefaultTheme extends Theme {}
}
