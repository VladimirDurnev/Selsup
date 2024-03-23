import React from "react";

export interface Param {
    id: number;
    name: string;
    type: "string" | "number" | "select";
    options?: string[];
}

interface ParamValue {
    paramId: number;
    value: string | number | string[];
}

interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    editedParamValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editedParamValues: props.model.paramValues,
        };
    }

    handleParamChange = (
        paramId: number,
        value: string | number | string[]
    ) => {
        const updatedParamValues = this.state.editedParamValues.map(
            (paramValue) => {
                if (paramValue.paramId === paramId) {
                    return { ...paramValue, value };
                }
                return paramValue;
            }
        );
        this.setState({ editedParamValues: updatedParamValues });
    };

    public getModel(): Model {
        return { paramValues: this.state.editedParamValues };
    }

    render() {
        const { params } = this.props;

        return (
            <div>
                {params.map((param) => (
                    <div key={param.id}>
                        <label>{param.name}</label>
                        {param.type === "select" ? (
                            <select
                                value={
                                    (this.state.editedParamValues.find(
                                        (pv) => pv.paramId === param.id
                                    )?.value as string[]) || []
                                }
                                onChange={(e) =>
                                    this.handleParamChange(
                                        param.id,
                                        Array.from(
                                            e.target.selectedOptions,
                                            (option) => option.value
                                        )
                                    )
                                }
                            >
                                {param.options?.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={param.type}
                                value={
                                    (this.state.editedParamValues.find(
                                        (pv) => pv.paramId === param.id
                                    )?.value as string) || ""
                                }
                                onChange={(e) =>
                                    this.handleParamChange(
                                        param.id,
                                        e.target.value
                                    )
                                }
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }
}

export default ParamEditor;
