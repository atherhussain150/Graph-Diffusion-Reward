import os
import json
import numpy as np
import itertools
import matplotlib.pyplot as plt  # for drawing


if __name__ == '__main__':
    # first make the directory containing the sequences
    os.makedirs('./sequences1/', exist_ok=True)

    n_subj = 100
    n_blocks = 7  # can be different, not sure what we agreed on

    # this is a very simple way of representing the graph
    # depending on how you want to proceed there might be better ways of
    # storing it e.g. using the library. This is simply a list of nodes
    # and
#     nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    # this is just a dummy function that will create a connection between all nodes to all other nodes,
    # e.g. it will create a fully connected graph, you need to include the real edges here of our graph.
    # just a placeholder function
#     edges = list(itertools.combinations(nodes, 2))
    nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
             'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
# edges_count = {'ab':0,'ac':0, 'ad':0, 'ae':0, 'bc':0, 'bd':0, 'be':0, 'co':0, 'ce':0, 'df':0, 'ec':0, 'ed':0,
#             'fg':0, 'fh':0, 'fi':0, 'gh':0, 'gi':0, 'gj':0, 'hi':0, 'hj':0, 'ij':0, 'jk':0, 'kl':0, 'km':0,
#                'kn':0, 'lm':0, 'ln':0, 'lo':0, 'mn':0, 'mo':0, 'no':0}
# edges_counter = {}
# node1 ='b'
# node2 = 'a'
# edge = ''.join(sorted(node1 + node2)) -> 'ab'
# edge = ''.join(sorted('ba')) -> 'ab'
# edge = ''.join(['a','b']) -> 'ab'
# edge = 'ab' -> 'ab'
# edges[edge] += 1

    edges = {
        'a': ['b', 'c', 'd', 'e'],
        'b': ['a', 'c', 'd', 'e'],
        'c': ['a', 'b', 'e', 'o'],
        'd': ['a', 'b', 'e', 'f'],
        'e': ['a', 'b', 'c', 'd'],
        'f': ['d', 'g', 'h', 'i'],
        'g': ['f', 'h', 'i', 'j'],
        'h': ['g', 'f', 'i', 'j'],
        'i': ['f', 'g', 'h', 'j'],
        'j': ['g', 'h', 'i', 'k'],
        'k': ['j', 'l', 'm', 'n'],
        'l': ['k', 'm', 'n', 'o'],
        'm': ['k', 'l', 'n', 'o'],
        'n': ['k', 'l', 'm', 'o'],
        'o': ['l', 'm', 'n', 'c'],
    }

    G1 = {
        1: [2, 3, 4, 5],
        2: [1, 3, 4, 5],
        3: [1, 2, 5, 15],
        4: [1, 2, 5, 6],
        5: [1, 2, 3, 4],
        6: [4, 7, 8, 9],
        7: [6, 10, 8, 9],
        8: [7, 6, 9, 10],
        9: [7, 6, 8, 10],
        10: [7, 8, 9, 11],
        11: [10, 12, 13, 14],
        12: [11, 15, 14, 13],
        13: [11, 12, 14, 15],
        14: [11, 13, 12, 15],
        15: [12, 13, 14, 3]
    }

    def dfs(u, graph, visited_edge, path=[]):
        path = path + [u]
        for v in graph[u]:
            if visited_edge[u][v] == False:
                visited_edge[u][v], visited_edge[v][u] = True, True
                path = dfs(v, graph, visited_edge, path)
        return path

    def check_circuit_or_path(graph, max_node):
        odd_degree_nodes = 0
        odd_node = -1
        for i in range(max_node):
            if i not in graph.keys():
                continue
            if len(graph[i]) % 2 == 1:
                odd_degree_nodes += 1
                odd_node = i
        if odd_degree_nodes == 0:
            return 1, odd_node
        if odd_degree_nodes == 2:
            return 2, odd_node
        return 3, odd_node

    def check_euler(graph, max_node):
        n_edges = 15
        edge_seen = np.ones(n_edges)
        p = 1/edge_seen**6
        p = p/p.sum()
        visited_edge = [[False for _ in range(
            max_node + 1)] for _ in range(max_node + 1)]
        check, odd_node = check_circuit_or_path(graph, max_node)
        if check == 3:
            print("graph is not Eulerian")
            print("no path")
            return
    #     start_node = 1
        start_node = np.random.choice(list(graph.keys()), p=p, replace=False)
#         print("start_node: ", start_node)
        if check == 2:
            start_node = odd_node
            print("graph has a Euler path")
        if check == 1:
            print("")
        path = dfs(start_node, graph, visited_edge)
#         print(path)
        newList = []
        edge = list(edges.keys())
        #     print(list(edges.keys())[1])
        for node in path:
            newList.append(edge[node-1])
        return newList

    max_node = 15

    def hamilton(graph, start_v):
        size = len(graph)
        # if None we are -unvisiting- comming back and pop v
        to_visit = [None, start_v]
        path = []
        while(to_visit):
            v = to_visit.pop()
            if v:
                path.append(v)
                if len(path) == size:
                    break
                for x in set(graph[v])-set(path):
                    to_visit.append(None)  # out
                    to_visit.append(x)  # in
            else:  # if None we are comming back and pop v
                path.pop()
        return path

    # It would be good nevertheless to visualize the network once, to make sure everything is correct
    # TODO: find function/library that can create a simple visualization of all edges and nodes
    # to visualise

    n_nodes = len(nodes)
    n_edges = 15  # len(fouredges)
    n_trials = len(nodes)

    for i in range(n_subj):
        file = f'./sequences1/seq_{i:01d}.json'

        blocks = []
        # create each block independently, however you might need to do this differently in the final version
        for b in range(n_blocks):
            # create each trial

            nodes_not_taken_yet = nodes.copy()
            start_idx = np.random.randint(0, len(nodes_not_taken_yet))
            random_start_point = nodes_not_taken_yet.pop(start_idx)
#             start_node = hamilton(edges, random_start_point)

            start_node = check_euler(G1, 15)
            print("euler: ", start_node)
            trials = []
            for n in range(0, 30):
                # now we create a starting index for this trial

                #                 print('start_node: ', start_node)
                #                 print('start_node: ', start_node[n])
                #                 print('n: ',n)
                #print("here is start node")
                # print(start_node)
                # now set which options should be displayed in this trial
                c_t = []
                w_t = []
                corr_trans = []
                neighbour = edges[start_node[n]]
               # next_node = edges[trial.insert(5, option1)]
                # print(neighbour)

                for i, j in edges.items():
                    if start_node[n] in j:
                        for item in j:
                            c_t.append(item)

                for i in c_t:
                    if i in neighbour:
                        corr_trans.append(i)

                wron_trans = []
                neighbour = edges[start_node[n]]
                # print(neighbour)

                for i, j in edges.items():
                    if start_node[n] not in j:
                        for item in j:
                            w_t.append(item)

                for i in w_t:
                    if i != start_node[n] and i not in neighbour:
                        wron_trans.append(i)
                corr_trans = list(dict.fromkeys(corr_trans))
                wron_trans = list(dict.fromkeys(wron_trans))

                # node2 for node1, node2 in edges if start_node not in [(node1, node2)]]
                # here I now assign option1-3 in one go, which does not really make
                # sense, as all options are now correct.
                # find a way to assign one of them a correct one, and the others incorrect
                c_options = np.random.choice(
                    corr_trans, size=2, replace=False)
                option1, options4 = c_options

                n_edges = 10
                edge_seen = np.ones(n_edges)
                p = 1/edge_seen**6
                p = p/p.sum()

                w_options = np.random.choice(
                    wron_trans, size=2, p=p, replace=False, )  # p=[0.1]*10
                option2, option3 = w_options
                # in fact all 3 are correct in my toy example ;-) as we have a fully connected graph
                # however, in the final graph this will not be the case
                correct_idx = 0

                trial = [start_node[n+1], option2, option3]

                np.random.shuffle(trial)
                trial.insert(0, start_node[n])
                trial.insert(4, correct_idx)
                trial.insert(5, start_node[n+1])
                print("start_node after trial: ", start_node)

                trials.append(trial)
            blocks.append(trials)
        with open(file, 'w') as f:
            # json cannot save numpy arrays and numpy ints, so we need to convert
            # everything into python native data dtypes.
            # there is a neat trick: convert to numpy array first, then
            # convert back to list

            blk = np.array(blocks).tolist()

            json.dump(blk, f)
