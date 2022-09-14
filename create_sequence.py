# -*- coding: utf-8 -*-
"""
Created on Fri Dec 10 09:33:51 2021

In this document, the sequences are created

Terminology:
    Starting Node   - The node that is shown as the current "position"
    Correct Option  - The node/ that is a valid transition from the starting node
    Distractor 1    - A node that has no direct connection to the starting node
    Distractor 2    - A node that has no direct connection to the starting node
    Trial           - One presentation of a Starting node, Correct option, Distractor 1 and Distractor 2
    Block           - A set of trials, which are in themselve 'complete', e.g. contain each node as a starting node once

Things that should be checked for:
    - All nodes are shown the same amount of times
    - All edges are shown the same amount of times
    - Choice positions on the screen should be random and not follow a certain
      distribution/rule (by chance). Not E.g. "always option 1 is correct" or 
      "it's always option 1, then 2", "it's never option 3", etc
    - Sequence of starting nodes within a block should not follow a predictable 
      sequence and should be different/counterbalanced between blocks
      OR
      sequence of starting nodes should follow a certain distribution 
      (e.g. first show clusters, then outside clusters), could be an option we choose for
    - Distance of distractor 1/2 to starting node should be balanced between 
      blocks and participants (so not always 2 for one participant and always 3 for another)
    - The set of starting, correct, distractor1/2 should be counterbalanced, e.g.
      there should always be different distractors with each starting/correct, also between participants
    - There are probably more things to keep in mind and we'll add later, however, for now this is all I can think of

@author: farooq & kern
"""
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


#     nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    # this is just a dummy function that will create a connection between all nodes to all other nodes,
    # e.g. it will create a fully connected graph, you need to include the real edges here of our graph.
    # just a placeholder function
#     edges = list(itertools.combinations(nodes, 2))
    nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
             'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
  # using dictionary
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
# using hamiltonian path function

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

    n_nodes = len(nodes)
    n_edges = 15  # just randomly added
    n_trials = len(nodes)

    for i in range(n_subj):
        file = f'./sequences1/seq_{i:01d}.json'

        blocks = []
        # create each block independently, however you might need to do this differently in the final version
        reinforced_node = np.random.choice(nodes_transition)
        for b in range(n_blocks):
            # create each trial
            nodes_not_taken_yet = nodes.copy()
            start_idx = np.random.randint(0, len(nodes_not_taken_yet))
            random_start_point = nodes_not_taken_yet.pop(start_idx)
            start_node = hamilton(edges, random_start_point)

            trials = []
            for n in range(0, len(nodes)-1):
                # now we create a starting index for this trial

                print('start_node: ', start_node)
                print('start_node: ', start_node[n])
                print('n: ', n)

                # now set which options should be displayed in this trial
                c_t = []  # for correct transition
                w_t = []  # for wrong transition
                corr_trans = []
                # jst looking for the neighbours of the current start node
                neighbour = edges[start_node[n]]

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
#                 corr_trans = set(corr_trans)
#                 wron_trans = set(wron_trans)
                corr_trans = list(dict.fromkeys(corr_trans))
                if corr_trans == reinforced_node:
                    high_reward = 1
                else:
                    high_reward = 0
                wron_trans = list(dict.fromkeys(wron_trans))

                # find a way to assign one of them a correct one, and the others incorrect
                c_options = np.random.choice(
                    corr_trans, size=2, replace=False)
                # i m using just option 1 here i did put option 4 because otherwise by just using option1 it output in an array e.g array[a]
                option1, options4 = c_options
                n_edges = 10
                edge_seen = np.ones(n_edges)
                p = 1/edge_seen**6
                p = p/p.sum()

                w_options = np.random.choice(
                    wron_trans, size=2, p=p, replace=False, )  # p=[0.1]*10

                # w_options = np.random.choice(
                #     wron_trans, size=2, p=[0.1]*10, replace=False)
                option2, option3 = w_options

                correct_idx = 0  # what was that for???

                # so first is correct option as we are getting path from hamiltonian function and other two are wrong
                trial = [start_node[n+1], option2, option3]

                np.random.shuffle(trial)  # making these three options shuffle
                trial.insert(0, start_node[n])  # so
                trial.insert(4, correct_idx)
                # correct option for the next step , putting it in last
                trial.insert(5, start_node[n+1])
                trial.append(high_reward)
                # so now, trial[start_node[n], np.random.shuffle(trial), correct_idx, start_node[n+1]]
                trials.append(trial)
            blocks.append(trials)
        with open(file, 'w') as f:
            # json cannot save numpy arrays and numpy ints, so we need to convert
            # everything into python native data dtypes.
            # there is a neat trick: convert to numpy array first, then
            # convert back to list

            blk = np.array(blocks).tolist()

            json.dump(blk, f)

print(start_node)
print(corr_trans)
print(wron_trans)
print(trial)
