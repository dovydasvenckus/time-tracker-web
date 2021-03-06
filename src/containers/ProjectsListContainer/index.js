import { connect } from 'react-redux';
import ProjectListContainer from './ProjectsListContainer';
import {
  loadProjects,
  changeFilter,
  archiveProject,
  restoreProject,
} from '../../state/ProjectList/projectListActions';

const mapStateToProps = (state) => ({
  projects: state.projectList.projects,
  currentPage: state.projectList.currentPage,
  totalPages: state.projectList.totalPages,
  statusFilter: state.projectList.statusFilter,
});

const mapDispatchToProps = {
  loadProjects,
  changeFilter,
  archiveProject,
  restoreProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);
