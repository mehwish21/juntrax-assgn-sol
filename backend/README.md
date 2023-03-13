1. Create a program in node to generate all possible paths that originate from a particular
node.
2. Wrap the program under express server to create an API which will take in a post
request (a JSON of the graph) and responds the possible paths
3. Create a react frontend that calls the API created in step 2 and display the graph
generated from the API response. One should be able to pass the graph from the GUI

Sample Json for Graph:
data = {
1 : [2,3,4,5],
2 : [6],
3 : [6,7],
4 : [7,8],
5 : [8]
}

Sample API Response
{
paths : [[1, 2, 6], [1, 3, 6], [1, 3, 7], [1, 4, 7], [1, 4, 8], [1, 5, 8]]
}

Things to keep in mind :
1. Make the code extendable in future (Use OOPs or modules concept)
2. Use the Single Responsibility Principle
3. Do not pollute the global namespace