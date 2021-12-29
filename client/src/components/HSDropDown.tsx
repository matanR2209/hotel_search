import React from "react";
import {InputLabel, MenuItem, Select, StyleRulesCallback, Theme, withStyles} from "@material-ui/core";

interface IProps {
    classes: any;
    value: string;
    label: string;
    handleChange: (val: any) => void;
    items: string[];
}
const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({});


function HSDropDown(props: IProps) {
    const {value, handleChange, items, label} = props;
    return (
            <>
                <InputLabel >{label}</InputLabel>
                <Select
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {items.map(item => <MenuItem value={item}>{`${item}`}</MenuItem>)}
                </Select>
            </>
    );
}

export default withStyles(styles)(HSDropDown);