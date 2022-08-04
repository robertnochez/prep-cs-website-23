import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson7() {
  return (
    <PREPLesson
      header="Iterables Part 2"
      description="Today's lesson continues on the topics of loops by introducing iterators and generators. "
      slideSrc={`https://docs.google.com/presentation/d/1b1MCGHoPYvsqHGBZb6d6zMHUBdF6AY6vF_lAdZLq0IA/embed?start=false&loop=false&delayms=3000`}
      prevLesson={null}
      nextLesson=""
      slideLink={`https://docs.google.com/presentation/d/1b1MCGHoPYvsqHGBZb6d6zMHUBdF6AY6vF_lAdZLq0IA/edit?usp=sharing`}
    >
    <Header as={"h3"}>Practice Problem Solutions:</Header>
    <CodeBlock
          code={`
          
######################################################
######### iter.py PRACTICE PROBLEM SOLUTIONS #########
######################################################

def pairRAs(RA_List):
    """ We've lost track of which RAs are supposed to be teaching together! Please list all the
    possible pairs of RAs for each lesson using a loop. Remember there can only be 2 RAs per lesson, 
    they cannot pair with themselves, and the pairs cannot repeat.
 
    >>> pairRAs(RAs)
    Laila and Marcos
    Laila and Destiny
    Laila and Vincent
    Marcos and Destiny
    Marcos and Vincent
    Destiny and Vincent
    
    """
    pass
    i = 0
    for RAOne in RA_List:
        for RATwo in RA_List[i+1:]:
            if RAOne != RATwo:
                print(RAOne + ' and ' + RATwo)
        i += 1

 
def createRectangle(num, x, y):
    """ Create a picture of a rectangle out of the given number depending
    on the the dimensions given using a loop. Hint: how
 
    >>> createRectangle(3, 6, 5)
    333333
    333333
    333333
    333333
    333333


    >>> createRectangle(1, 4, 2)
    1111
    1111

    """
    pass
    
    row = 0
    while row < y:
        col = 0
        numStr = ""
        while col < x:
            numStr += str(num)
            if col == x-1:
                print(numStr)
            col += 1  
        row += 1 

#######################################################
######### loops.py PRACTICE PROBLEM SOLUTIONS #########
#######################################################

def groceryList(itemLst):
    """Given the list 'grocery' print each item on the list one by one
    using an iterator!
 
    >>> groceryList(shoppingLst1)
    cabbage
    olive oil
    milk
    tomatoes
    hand soap
    >>> groceryList(shoppingLst2)
    yogurt
    frozen pizza
    spinach
    orange juice
    sour cream
    """

    iter_list = iter(itemLst)
    i = 0 
    while i < len(itemLst):
        item = next(iter_list)
        print(item)
        i += 1
    


 
def trickOrTreat(houses):
    """ You are going trick or treating! Create a generator that check whether each
    house has a trick or a treat by yielding "[Insert address here] has given you a trick!"
    or "[Insert address here] has given you a treat!"
 
    >>> TorTgen = trickOrTreat(houseLst)
    >>> next(TorTgen)
    '309 Witches Ave has given you a trick!'
    >>> next(TorTgen)
    '470 Fairy Way has given you a treat!'
    >>> next(TorTgen)
    '906 Batman Cave has given you a treat!'
    """
    for i in range(len(houses)):
      yield list(houses.keys())[i] + " has given you a " + list(houses.values())[i] + "!"        

`}
        /> 
    </PREPLesson>
  );
}

export default PREPLesson7;
