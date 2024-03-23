import { Param } from "./ParamEditor";

export const params: Param[] = [
    {
        id: 1,
        name: "Назначение",
        type: 'string',
    },
    {
        id: 2,
        name: "Длина",
        type: 'string',
    },
];

export const model = {
    paramValues: [
        {
            paramId: 1,
            value: "повседневное",
        },
        {
            paramId: 2,
            value: "макси",
        },
    ],
};
