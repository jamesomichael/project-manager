import { useState } from 'react';

import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

const App = () => {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	const handleProjectCreation = () => {
		setProjectsState((prevState) => ({
			...prevState,
			selectedProjectId: null,
		}));
	};

	const handleAddProject = (projectData) => {
		setProjectsState((prevState) => {
			const newProject = {
				...projectData,
				id: Math.random(),
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	};

	const handleCancelProjectCreation = () => {
		setProjectsState((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
		}));
	};

	const handleProjectSelection = (id) => {
		setProjectsState((prevState) => ({
			...prevState,
			selectedProjectId: id,
		}));
	};

	const handleProjectDeletion = () => {
		setProjectsState((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
			projects: prevState.projects.filter(
				(project) => project.id !== prevState.selectedProjectId
			),
		}));
	};

	const selectedProject = projectsState.projects.find(
		(project) => project.id === projectsState.selectedProjectId
	);

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectsSidebar
				onCreation={handleProjectCreation}
				projects={projectsState.projects}
				onSelect={handleProjectSelection}
			/>
			{projectsState.selectedProjectId === null ? (
				<NewProject
					onAdd={handleAddProject}
					onCancel={handleCancelProjectCreation}
				/>
			) : projectsState.selectedProjectId === undefined ? (
				<NoProjectSelected onCreation={handleProjectCreation} />
			) : (
				<SelectedProject
					project={selectedProject}
					onDelete={handleProjectDeletion}
				/>
			)}
		</main>
	);
};

export default App;
