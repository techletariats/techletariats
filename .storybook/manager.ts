import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const theme = create({
    base: "dark",
    brandTitle: "Techletariats",
    brandUrl: "https://techletariats.com",
    brandTarget: "_self"
});

addons.setConfig({ theme });
