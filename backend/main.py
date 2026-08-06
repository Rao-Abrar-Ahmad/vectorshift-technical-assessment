from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "Backend is running"
    }

class Pipeline(BaseModel):
    nodes: list
    edges: list


def is_dag(nodes, edges):

    graph = {}

    # Create empty graph
    for node in nodes:
        graph[node["id"]] = []


    # Add connections
    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)


    visited = set()
    recursion_stack = set()


    def dfs(node):

        # Cycle found
        if node in recursion_stack:
            return False


        # Already checked
        if node in visited:
            return True


        visited.add(node)
        recursion_stack.add(node)


        for neighbour in graph[node]:

            if not dfs(neighbour):
                return False


        recursion_stack.remove(node)

        return True



    for node in graph:

        if not dfs(node):
            return False


    return True



@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    try:
        num_nodes = len(pipeline.nodes)
        num_edges = len(pipeline.edges)

        dag = is_dag(
            pipeline.nodes,
            pipeline.edges
        )

        return {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": dag
        }

    except KeyError as e:
        raise HTTPException(
            status_code=400,
            detail=f"Missing required field: {e}"
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to parse pipeline: {str(e)}"
        )