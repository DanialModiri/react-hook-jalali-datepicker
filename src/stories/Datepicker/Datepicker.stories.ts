import { Meta } from "@storybook/react";
import Datepicker from "./Datepicker";

const meta: Meta<typeof Datepicker> = {
    title: 'Example/Datepicker',
    component: Datepicker,
    argTypes: {
        value: { type: 'string', name: 'value' }
    }
};

export default meta;

export const Simple = {

};