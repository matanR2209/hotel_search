import {ISIte} from "../interfaces/Sites";

export default class Utils {
    public static parseSiteNames = (sites: ISIte[]): string[] => {
        return sites.map(site => site.name);
    }
}