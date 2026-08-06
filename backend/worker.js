export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (url.pathname === "/") {
      return jsonResponse({ message: "Backend is running" }, 200);
    }

    if (url.pathname === "/health") {
      return jsonResponse({ status: "ok" }, 200);
    }

    if (url.pathname === "/pipelines/parse" && request.method === "POST") {
      try {
        const body = await request.json();
        const nodes = Array.isArray(body?.nodes) ? body.nodes : [];
        const edges = Array.isArray(body?.edges) ? body.edges : [];

        return jsonResponse(
          {
            num_nodes: nodes.length,
            num_edges: edges.length,
            is_dag: isDag(nodes, edges),
          },
          200,
        );
      } catch (error) {
        return jsonResponse(
          {
            detail: "Invalid request body",
          },
          400,
        );
      }
    }

    if (url.pathname.startsWith("/pipelines/")) {
      return jsonResponse({ detail: "Not found" }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};

function isDag(nodes, edges) {
  const graph = {};

  for (const node of nodes) {
    graph[node.id] = [];
  }

  for (const edge of edges) {
    const source = edge.source;
    const target = edge.target;

    if (graph[source] && graph[target] !== undefined) {
      graph[source].push(target);
    }
  }

  const visited = new Set();
  const recursionStack = new Set();

  const dfs = (node) => {
    if (recursionStack.has(node)) {
      return false;
    }

    if (visited.has(node)) {
      return true;
    }

    visited.add(node);
    recursionStack.add(node);

    for (const neighbor of graph[node] || []) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    recursionStack.delete(node);
    return true;
  };

  for (const nodeId of Object.keys(graph)) {
    if (!dfs(nodeId)) {
      return false;
    }
  }

  return true;
}

function jsonResponse(payload, status) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
