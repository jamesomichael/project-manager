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

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectsSidebar onCreation={handleProjectCreation} />
			{/* {content} */}
			{projectsState.selectedProjectId === null ? (
				<NewProject />
			) : projectsState.selectedProjectId === undefined ? (
				<NoProjectSelected onCreation={handleProjectCreation} />
			) : undefined}
		</main>
	);
};

export default App;
