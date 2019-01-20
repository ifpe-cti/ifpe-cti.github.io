import React from 'react'
import CardProject from '../CardProject'
import { connect } from 'react-redux'
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux';

class ProjectList extends React.Component {


    render() {
        const renderTows = () => {
            const listRepos = this.props.list || []
            const asd = [0, 1, 2, 3, 4, 5, 6]
            
            console.log(this.props.nameNew)
            return asd.map(project => (
                project + '     ' + this.props.nameNew
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
    nameNew: state.projectState.nameNew
})
export default connect(mapStateToProps)(ProjectList)