import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson8() {
  return (
    <PREPLesson
      header="Linked Lists"
      description="An brief introduction to classes, object-oriented programming, and linked lists."
          slideSrc={`https://docs.google.com/presentation/d/1r1rrPoxyWcSBMTdq337c7dg6M2CoJfmueWqLSjW4g4M/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          videoSrc={``}
          slideLink={`https://docs.google.com/presentation/d/1r1rrPoxyWcSBMTdq337c7dg6M2CoJfmueWqLSjW4g4M/edit?usp=sharing`}
        >
      <Header as={"h3"}>Practice Problem Solutions:</Header>

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
/>
        </PREPLesson>
    )
}

export default PREPLesson8;
