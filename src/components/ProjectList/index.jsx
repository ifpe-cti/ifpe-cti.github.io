import React, { Component } from 'react'
import CardProject from '../CardProject'

export default class ProjectList extends Component {
    
    renderList() {

    }
    
    render() {
        return (
            <CardProject
          value={"asdpojas daos jdapos djpao"}
          name={"asadoj adsoa jdoa sjdojosa jd"}
          issuesNumber={"8"}
          contributors={"João da Silva, Aldarbeto Liro, Ademaul Sactus, Lorival Aliral"}
          language={"Java"}
          createdAt={"15/05/2018"}
          license={"nenhuma"}/>
        )
    }
}