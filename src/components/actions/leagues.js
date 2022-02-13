import * as axios from 'axios';
import { setLeaguesMatches } from '../../redux/selectedLeagueReducer';

const getLeague = (id) => {
    return async(dispatch) => {
        const response = await axios.get(`http://api.football-data.org/v2/competitions/${id}/matches`, {
            headers: { 'X-Auth-Token': '7d0c5dbb6d9c414ba0c7b513d50a4ab8' }
        })
        dispatch(setLeaguesMatches(response.data))
    }
}

export default getLeague;