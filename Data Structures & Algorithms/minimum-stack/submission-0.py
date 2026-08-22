class MinStack:

    def __init__(self):
        self.value_stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.value_stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self) -> None:
        ele_pop = self.value_stack.pop()
        if ele_pop == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self) -> int:
        ele_top = self.value_stack[-1]
        return ele_top

    def getMin(self) -> int:
        ele_min = self.min_stack[-1]
        return ele_min
