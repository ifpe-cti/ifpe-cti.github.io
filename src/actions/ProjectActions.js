import axios from 'axios'

const URL = "https://api.github.com/orgs/ifpe-cti/repos"

export const repository = () => ({

        type: 'asdasd',
        nameNew: 'jubileu'
    
})

export const clickButton = value => ({
    type: 'CLICK_UPDATE_VALUE',
    newValue: value
  });

export const generateList = () => {
    return (dispatch) => {
        const request = axios.get(URL)
            .then(resp => dispatch({
                type: 'GENERATE_LIST_REPOSITORY',
                payload: resp.data
            }))
    }
}
