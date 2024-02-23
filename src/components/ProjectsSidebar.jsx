import Button from './Button';

const ProjectsSidebar = ({
	onCreation,
	projects,
	onSelect,
	selectedProjectId,
}) => {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				Your Projects
			</h2>
			<div>
				<Button onClick={onCreation}>+ Add Project</Button>
			</div>
			<ul className="mt-8">
				{projects.map((project) => {
					let classes =
						'w-full text-left px-2 py-1 my-1 hover:text-stone-200 hover:bg-stone-800';

					if (project.id === selectedProjectId) {
						classes += ' bg-stone-800 text-stone-200';
					} else {
						classes += ' text-stone-400';
					}
					return (
						<li key={project.id}>
							<button
								onClick={() => onSelect(project.id)}
								className={classes}
							>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default ProjectsSidebar;
