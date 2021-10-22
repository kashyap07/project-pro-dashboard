import { Responsive } from "react-grid-layout";
import { withSize } from "react-sizeme";
import { Projects, Popular, Blogs, Recipes } from "./LoremComponents";

const dashBoardComponents = ["projects", "popular", "blogs", "recipes"];
const dashBoardComponentsMapping = {
  projects: <Projects />,
  popular: <Popular />,
  blogs: <Blogs />,
  recipes: <Recipes />,
};

const layouts = {
  lg: [
    { i: "projects", x: 0, y: 0, w: 6, h: 2 },
    { i: "popular", x: 6, y: 0, w: 6, h: 2 },
    { i: "blogs", x: 0, y: 4, w: 12, h: 2 },
    { i: "recipes", x: 0, y: 4, w: 12, h: 2 },
  ],
};

const Dashboard = ({ size: { width } }) => {
  return (
    <Responsive className="layout cursor-move" layouts={layouts} width={width}>
      {dashBoardComponents.map((key) => (
        <div
          className="h-full p-6 bg-gray-100 border-t-8 border-gray-300 overflow-hidden"
          key={key}
          data-grid={{ w: 12, h: 2, x: 0, y: Infinity }}
        >
          {/* data-grid for default values */}
          {dashBoardComponentsMapping[key]}
        </div>
      ))}
    </Responsive>
  );
};

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(
  Dashboard
);
