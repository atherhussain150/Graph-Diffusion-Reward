# -*- coding: utf-8 -*-
"""
Created on Fri Dec 10 09:34:07 2021

In this file, we test whether the created sequences are valid and do
not contain any sort of spurious randomness or effects that we do not want.


Not using unittest, but i think its fullfilling our requirement, its showing edges seen by each subject

@author: kern & farooq
"""
import statistics
import os
import json  # we'll be saving files as jsons
import numpy as np


files = os.listdir('./sequences1/')
# print(files)
files1 = [f'./sequences1/{f}' for f in files if f.endswith('.json')]
edges = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
}

subjects = [],
for file in files1:
    print('file: \n', file)
    with open(file, 'r') as f:
        content = json.load(f)
        for block in content:
            for trial in block:
                opts = trial[1:4]
                for option in opts:
                    edges[option] += 1
        print(list(edges.values()))
        print('mean: ', np.mean(list(edges.values())))
        print('Std: ', statistics.stdev(list(edges.values())), '\n')
        a = edges.values()
        edges = {
            'a': 0,
            'b': 0,
            'c': 0,
            'd': 0,
            'e': 0,
            'f': 0,
            'g': 0,
            'h': 0,
            'i': 0,
            'j': 0,
            'k': 0,
            'l': 0,
            'm': 0,
            'n': 0,
            'o': 0,
        }
