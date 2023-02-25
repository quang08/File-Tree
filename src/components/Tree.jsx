import React from "react";

function Tree() {
  // const [isExpanded, setIsExpanded] = React.useState(false); //cant be global state because it will be shared across all entries
  const [files, setFiles] = React.useState({
    children: [
      {
        name: "src",
        children: [
          {
            name: "components",
            children: [
              {
                name: "Tree",
                children: [
                  {
                    name: "Entry.jsx",
                  },
                ],
              },
              {
                name: "App.jsx",
              },
            ],
          },
        ],
      },

      {
        name: "public",
      },

      {
        name: "node_modules",
      },
    ],
  });

  function Entry({ entry, depth }) { 
    const [isExpanded, setIsExpanded] = React.useState(false);
    // local state for each entry so that it can be expanded/collapsed independently
    // cannot be global state because it will be shared across all entries

    return (
      <>
        <div className="bg-slate-500/50 rounded-lg mb-3 p-2 mt-3">
          {entry.children ? (
            <button
              className="font-bold"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {entry.children && "+ "}
              {entry.name}
            </button>
          ) : (
            <div className="font-bold">{entry.name}</div>
          )}

          {isExpanded && (
            <div className="ml-5 mt-2 rounded-lg">
              {entry.children?.map((entry) => (
                <Entry entry={entry} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="text-white w-1/2 h-1/2 p-5 text-left bg-blue-500/50 rounded-lg overflow-scroll">
      <h1 className="text-center text-white p-2 font-bold w-full">Root Folder</h1>
      {files.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default Tree;
