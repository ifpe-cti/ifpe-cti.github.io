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

export const generateListProjects = () => {

}

export const issuesNumber = () => {

}

export const contributors = (projectName) => {
    return (dispatch) => {
        const contributorsUrl = `https://api.github.com/repos/ifpe-cti/${projectName}/contributors`

        var reqContributors = axios.get(contributorsUrl)
            .then(resp => resp.data)
            .then(dataContributors => {

                let listContributorsName = []

                for (var i = 0; i < dataContributors.length; i++) {
                    listContributorsName.push(dataContributors[i].login)
                }
                return listContributorsName.join(', ')
            })
            .then(resp => dispatch({
                type: 'CONTRIBUTORS_PROJECT',
                payload: resp
            }))

    }
}

export const downloadUrl = () => {

}
