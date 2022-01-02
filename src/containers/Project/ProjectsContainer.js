import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsComponent from '../../components/Project/ProjectsComponent'

class ProjectsContainer extends Component {

    render() {  
        return (
         <div>
             <ProjectsComponent />
         </div>
        );
      }
    
}
export default ProjectsContainer