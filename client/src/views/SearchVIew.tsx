import React from "react";
import {Button, StyleRulesCallback, TextField, Theme, withStyles} from "@material-ui/core";
import {stores} from "../state";
import {IHotelRequestBody} from "../interfaces/HTTP";
import HSDropDown from "../components/HSDropDown";
import Utils from "../utils/Utils";
import SITES from "../assets/SITES_LIST";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Search from '@mui/icons-material/Search';

interface IProps {
    classes: any
}
const hotelsStore = stores.hotelsStore;

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    searchContainer: {
        boxShadow: "0 4px 2px -2px gray",
        backgroundColor: "white"
    },
    searchBar: {
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: ".5em 0"

    },
    actionButtonContainer: {
        display: "flex",
        margin: "auto 0"
    }
});

const PERSONS_COUNT = ["1", "2", "3", "4", "5", "6", "7"];
const PARSED_SITES = Utils.parseSiteNames(SITES)

function SearchView(props: IProps) {
    const { classes } = props;
    const [groupSize, setGroupSize] = React.useState<string>("1");
    const [selectedSite, setSelectedSite] = React.useState<string>(PARSED_SITES[0]);
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState<Date>(new Date());

    const fetchHotels = () => {
        const params: IHotelRequestBody= {
            "query": {
                "ski_site": SITES.filter(site => site.name === selectedSite)[0].id,
                "from_date": startDate.toString(),
                "to_date": endDate.toString(),
                "group_size": parseInt(groupSize)
            }
        }
        hotelsStore.fetchHotels(params);
    }



    const updateGroupSize = (event: any) => {
        setGroupSize(event.target.value);
    }

    const updateSelectedSite = (event: any) => {
        setSelectedSite(event.target.value);
    }

    const updateStareDate = (event: any) => {
        setStartDate(event)
    }

    const updateEndDate = (event: any) => {
        setEndDate(event)
    }

    return (
        <div className={classes.searchContainer}>
            <div className={classes.searchBar}>
                <div><HSDropDown items={PARSED_SITES} value={selectedSite} label={"Site"} handleChange={updateSelectedSite}/></div>
                <div><HSDropDown items={PERSONS_COUNT} value={groupSize} label={"Group size"} handleChange={updateGroupSize}/></div>
                <div className={classes.actionButtonContainer}><DatePicker selected={startDate} onChange={(date) => updateStareDate(date)} /></div>
                <div className={classes.actionButtonContainer}><DatePicker selected={endDate} onChange={(date) => updateEndDate(date)} /></div>
                <div className={classes.actionButtonContainer}><Button variant={"contained"} onClick={fetchHotels} >Search</Button></div>
            </div>
        </div>

    );
}

export default withStyles(styles)(SearchView);