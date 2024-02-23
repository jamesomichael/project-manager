import { useState } from 'react';

import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

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

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectsSidebar
				onCreation={handleProjectCreation}
				projects={projectsState.projects}
			/>
			{/* {content} */}
			{projectsState.selectedProjectId === null ? (
				<NewProject
					onAdd={handleAddProject}
					onCancel={handleCancelProjectCreation}
				/>
			) : projectsState.selectedProjectId === undefined ? (
				<NoProjectSelected onCreation={handleProjectCreation} />
			) : undefined}
		</main>
	);
};

export default App;
