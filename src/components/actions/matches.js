import * as axios from 'axios';
import { setMatches } from '../../redux/selectedTeamReducer';

const getTeam = (id) => {
    return async (dispatch) => {
      const response = await axios.get(`http://api.football-data.org/v2/teams/${id}/matches`, {
        headers: { 'X-Auth-Token': '7d0c5dbb6d9c414ba0c7b513d50a4ab8' }
      })
      dispatch(setMatches(response.data))
    }
  }

export default getTeam;  