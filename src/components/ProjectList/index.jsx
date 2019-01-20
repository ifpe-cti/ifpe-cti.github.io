import React from 'react'
import CardProject from '../CardProject'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { generateList } from '../../actions/ProjectActions'

class ProjectList extends React.Component {

    constructor(props) {
        super(props)
        this.props.generateList()
    }

    render() {
        const renderTows = () => {
            const listRepos = this.props.list || []

            return listRepos.map(project => (
                <CardProject
                    key={project.id}
                    name={project.name}   
                    language={project.language === null ? "não informado" : project.language} 
                    lincense={project.lincense === null ? "não informado" : project.lincense}
                    createdAt={project.created_at}
                    description={project.description}
                    svn_url={project.svn_url}
                />
            ))




            /*return list.map(project => (
                <CardProject
                    key={project.id}
                    value={project.name}
                    name={project.name}
                    issuesNumber={"8"}
                    contributors={"João da Silva, Aldarbeto Liro, Ademaul Sactus, Lorival Aliral"}
                    language={project.language}
                    createdAt={project.created_at}
                    license={project.license === null ? "nenhuma" : project.license} />
            ))*/
        }

        return (
            <div>
                {renderTows()}
            </div>
        )


    }

}




const mapStateToProps = state => ({
    nameNew: state.projectState.nameNew,
    list: state.clickState.list
})

const mapDispatachToProps = dispatch => bindActionCreators({
    generateList
},dispatch)


export default connect(mapStateToProps, mapDispatachToProps)(ProjectList)