import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";

function PREPLesson7() {
  return (
    <PREPLesson
      header="Higher-Order Functions"
      description="Today's lesson focuses on Higher Order Functions (or HOFs for short)! These are functions that
          either return another function or pass in a function as a parameter. After some examples we discuss their practical uses."
      slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vQtqn14Q2srW5C5hGVJpqTq6oSota1izvQ65nd0C4cKw69yikqc55Qoxy1_GEbxQG2W7hyiAvQ5O2Rk/embed?start=false&loop=false&delayms=3000`}
      prevLesson={null}
      nextLesson=""
      slideLink={`https://docs.google.com/presentation/d/1-goU-UOy7GQaGVfITzajwlgCCS4LXB8iN_lcFM9Q-xY/edit?usp=sharing`}
    >
      <CodeBlock
        code={`
def iter_calc(fn):
    """Write a reusable HOF that first takes in a built in method, FN, that uses
    two arguments, and then a numerical index. Perform calls to FN with 
    successive digts from 1 up to the specified index. USE HOF's.

    >>> iter_calc(add)(5) # 1 + 2 + 3 + 4 + 5
    15
    >>> iter_calc(pow)(4) # 1 ** 2 ** 3 ** 4
    1
    >>> iter_calc(mul)(5) # 1 * 2 * 3 * 4 * 5 --> this is reverse factorial
    120
    """
    def calc(n):
        so_far = 1            # every operation starts off with 1
        for i in range(2, n + 1):
            so_far = fn(so_far, i)
        return so_far
    return calc


def find_item(lst, item):
    """Write a function that first takes in a list of tuples, and a specified key. 
    Without assigning any variables or using any loops, iterate through all the tuples 
    and return a list with those that contain the specified value.

    >>> find_item([(True, 17), ("Hello", 21, False), (17 , "GO BEARS")], 17)
    [(True, 17), (17, 'GO BEARS')]
    >>> find_item([(21, 3, 18), (True, False), (True, True, 18), (13, False)], True)
    [(True, False), (True, True, 18)]
    """
    def finder(index, rv):
        if index >= len(lst):
            # at the end of the lst
            return rv
        elif item in lst[index]:
            # item is present in the current tuple
            rv.append(lst[index])
            return finder(index + 1, rv)
        else:
            # item not in tuple, and not at the end of lst. move onto next tuple.
            return finder(index + 1, rv)
    return finder(0, [])
          `}
      />
    </PREPLesson>
  );
}

export default PREPLesson7;
