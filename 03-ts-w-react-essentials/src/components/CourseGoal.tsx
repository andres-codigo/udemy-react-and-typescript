// 1. REACTNODE TYPE EXAMPLE TO ACCESS CHILDREN
// import { type ReactNode } from 'react';

// interface CourseGoalProps {
// 	title: string;
// 	children: ReactNode;
// }

// 2. REACT FUNCTION COMPONENTS (FC) TYPE EXAMPLE TO ACCESS CHILDREN
// import { type FC, type PropsWithChildren } from 'react';

// type CourseGoalProps = PropsWithChildren<{ title: string }>;
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>Delete</button>
// 		</article>
// 	);
// };

// export default CourseGoal;

import { type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
	id: number;
	title: string;
	onDelete: (id: number) => void;
}>;

export default function CourseGoal({
	id,
	title,
	children,
	onDelete,
}: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>Delete</button>
		</article>
	);
}
