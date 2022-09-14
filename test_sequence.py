# -*- coding: utf-8 -*-
"""
Created on Fri Dec 10 09:34:07 2021

In this file, we test whether the created sequences are valid and do
not contain any sort of spurious randomness or effects that we do not want.


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

@author: kern & farooq
"""

import os
import json  # we'll be saving files as jsons
import numpy as np
import unittest


class Testing(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        """
        This function is called exactly once before running all other
        tests in this class. 
        Here we load all sequences that have been previously created
        into memory. They can be accessed in all class functions using
        the self.sequence attribute
        """
        files = os.listdir('./sequences2/')
        files = [f'./sequences2/{f}' for f in files if f.endswith('.json')]
        subjects = []
        for file in files:
            with open(file, 'r') as f:
                content = json.load(f)
            subjects.append(content)
        cls.subjects = subjects

    def test_all_nodes_equal_amount_of_times(self):
        """
        Check: All nodes are shown the same amount of times
        also, that each block contains each node once as a starting node

        optionally: you can even add other tests here if they fit
        e.g. it might make sense to add the check about the starting point order 
        within the block or that there are no similarities between blocks in terms
        of starting point ordering. Or that not one block ends with a certain
        starting block and the next block starts with the same starting block
        """
        
        # first run through the sequences for each subject
        for subj in self.subjects:
            # for each block that we created for each subject
            for block in subj:
                # "block" now contains a set of n tuples, each tuple
                # following the structure [start, option1, option2, option3, correct_index, correct_choice]
                # this might be different depending on how you implement saving the sequences
                # filter out only starting nodes
                for trial in block:
                    start, opt1, opt2, opt3, correct_choice = trial
                    opts = trial[1:4]
                    corret_option = opts[correct_choice]
                starting_nodes_per_block = [
                    start for start, opt1, opt2, opt3,  correct_choice in block]
                
                # check that each item is contained just once (a set can only contain unique items)
                assert len(starting_nodes_per_block) == len(
                    set(starting_nodes_per_block))
                # check that all possible starting nodes are contained once
                # e.g. once starting at node 1, once at node 2 etc etc
                assert set(starting_nodes_per_block) == set(range(15))
                """
                for this its showing pass, by using len function instead of set, but nothing in one block is repeating itself as we are popping nodes that are used in a block 
                """

    def test_all_edges_equal_amount_of_times(self):
        """
        Check: All edges are shown the same amount of times 
        for this its becoming difficult 
        , i am confused in it, to (need clarification , as, in current scenario i am using wrong options from other clusters.... and the right one is already selected by using hamiltonian path,
        how to achieve that thing? each block equals to 15 trials, as we got 15 nodes, but not getting an idea about the randomness in options because by looking manually in sequence files, its not giving 
        any pattern, but sure it must have any pattern, but i didnt get any options for showing edges same number of time and for checking pattern in random options)
        that 
        """
        pass
        #


if __name__ == '__main__':

    unittest.main()
