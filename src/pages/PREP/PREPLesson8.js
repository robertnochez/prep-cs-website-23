import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson8() {
  return (
    <PREPLesson
      header="More HOFs, Iterators and Generators"
      description="Going over HOFs, using iterators and creating generators"
          slideSrc={`https://docs.google.com/presentation/d/12e9Ism1VJYhliNYstddQzlpWufG34mcCR_n-L3q79XM/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          videoSrc={``}
          slideLink={`https://docs.google.com/presentation/d/12e9Ism1VJYhliNYstddQzlpWufG34mcCR_n-L3q79XM/edit?usp=sharing`}
          lessonDownload="./prepDownloads/prep_lesson7.zip"
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
    )
}

/*

<CodeBlock
  code={`
  ############################################################
  ######### linkedlist.py PRACTICE PROBLEM SOLUTIONS #########
  ############################################################

  # Node class --> Blueprint used to create Linked List!
class Node:
    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode

    # Returns the linked list, you don't have to worry about this
    def __repr__(self):
        if self.nextNode:
            rest_repr = ", " + repr(self.nextNode)
        else:
            rest_repr = ""
        return "Node(" +repr(self.value) + rest_repr + ")"
    # Prints the linked list, you don't have to worry about this
    def __str__(self):
        string = "<"
        while self.nextNode is not None:
            string += str(self.value) + ""
            self = self.nextNode
        return string + str(self.value) + ">"
 
def createLinkedLst(x):
    """ Create and return a linked list that counts from 0 to x (inclusive).
 
    >>> LLst = createLinkedLst(4)
    >>> Node.__repr__(LLst)
    'Node(0, Node(1, Node(2, Node(3, Node(4)))))'
   
    """
    head = cur = Node(0)
    for i in range(1, x+1):
        cur.nextNode = Node(i)
        cur = cur.nextNode
    return head

 
def addToBegin(linkedList, x):
    """ Add a new node to the begining of the given linked list and return
    that new linked list.
 
    >>> LLst = Node(1, Node(2, Node(3)))
    >>> newLLst = addToBegin(LLst, 0)
    >>> Node.__str__(newLLst)
    '<0123>'
   
    """
    newNode = Node(x, linkedList)
    return newNode

 
def deleteEnd(linkedList):
    """ Delete a node at the end of a given list, and return the new linked list.
    
    >>> LLst = Node('red', Node('blue', Node('green', Node('yellow'))))
    >>> newLLst = deleteEnd(LLst)
    >>> Node.__str__(newLLst)
    '<redbluegreen>'

    """
    if linkedList == None:
        return None
    if linkedList.nextNode == None:
        linkedList = None
        return None
    curr = linkedList
    prev = None
    while curr.nextNode != None:
        prev = curr
        curr = curr.nextNode
    prev.nextNode = None
    return linkedList

 
def reverseLst(linkedList):
    """ Reverse the given linked list. For example if the list goes:
    1 -> 2 -> 3 -> 4, Node(1, Node(2, Node(3, Node(4)))), <1234>, this function
    should return 4 -> 3 -> 2 -> 1, Node(4, Node(3, Node(2, Node(1)))), <4321>
 
    >>> linked = Node(1, Node(2, Node(3, Node(4))))
    >>> newLinked = reverseLst(linked)
    >>> Node.__str__(newLinked)
    '<4321>'

    >>> LLst = Node('a', Node('b', Node('c', Node('d'))))
    >>> newLLst = reverseLst(LLst)
    >>> Node.__repr__(newLLst)
    "Node('d', Node('c', Node('b', Node('a'))))"
   
    """
    curr = linkedList
    prev = None
    while curr != None:
        nextt = curr.nextNode
        curr.nextNode = prev
        prev = curr
        curr = nextt
    return prev


`} 
/>*/ 

export default PREPLesson8;
