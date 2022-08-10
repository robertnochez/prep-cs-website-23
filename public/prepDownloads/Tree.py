class Tree:
    def __init__(self, data, branches = []):
        self.branches = branches
        self.data = data

    def is_leaf(self):
        return self.branches == []

    def print_val(self):
        print(self.data)
