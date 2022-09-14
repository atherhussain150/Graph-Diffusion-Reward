import algorithmx
nods = {'a': ['b', 'c', 'd', 'e'],
        'b': ['c', 'd', 'e'],
        'c': ['e', 'o'],
        'd': ['e', 'f'],
        'f': ['g', 'h', 'i'],
        'g': ['h', 'i', 'j'],
        'h': ['i', 'j'],
        'i': ['j'],
        'j': ['k'],
        'k': ['l', 'm', 'n'],
        'l': ['m', 'n', 'o'],
        'm': ['n', 'o'],
        'n': ['o'],
        }
# # Created thirty edges from nods
canvas = algorithmx.jupyter_canvas()

# # Set the size of the canvas
# canvas.size((500, 500))

for key in nods.keys():
    for i in nods[key]:
        #         #g.add_edge(key, i)
        canvas.nodes([key, i]).add()
        canvas.edge((key, i)).add()
# # Use the library normally, for example:


# # Display the canvas
display(canvas)
