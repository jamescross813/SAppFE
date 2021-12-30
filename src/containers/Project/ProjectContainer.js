import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectComponent from '../../components/Project/ProjectComponent'

class ProjectContainer extends Component {

    render() {  
        return (
         <div>
             <ProjectComponent />
         </div>
        );
      }
    
}
export default ProjectContainer