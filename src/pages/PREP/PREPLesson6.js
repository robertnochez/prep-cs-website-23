import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson6() {
  return (
    <>
      <PREPLesson
        header="Iterables and the 'For' Loop"
        description="What are iterables? What are the different types of iterables? Today we will discuss for loops and when
          to use them instead of while loops."
        slideSrc={`https://docs.google.com/presentation/d/1H8CizBnuerbOhXvqY9ePiTd_TsXdyCKt58LEho3BlxM/embed?start=false&loop=false&delayms=3000`}
        prevLesson={null}
        nextLesson=""
        videoSrc=""
        slideLink={`https://docs.google.com/presentation/d/1H8CizBnuerbOhXvqY9ePiTd_TsXdyCKt58LEho3BlxM/edit?usp=sharing`}
        lessonDownload="./prepDownloads/prep_lesson6.zip"
      >
        
      </PREPLesson>
    </>
  );
}
/*
<Header as={"h3"}>Practice Problem Solutions:</Header>
        <CodeBlock
          code={`
          
##########################################################
######### lst_prob.py PRACTICE PROBLEM SOLUTIONS #########
##########################################################

def first_names_for(lst):
    """Takes in a list of people, with each person listed as a tuple, and returns
    a list of the first names of everyone in the list using a for loop! The overall format of lst is:
    [(first1, last1, age1), (first2, last2, age2) ...]
 
    >>> first_names_for(first_list)
    ['Fairy', 'Prince', 'Princess']
    >>> first_names_for(second_list)
    ['Tomas', 'Winnie', 'Oski', 'Mickey']
    """
    firsts = []
    for people in lst:
        name = people[0]  # access the first element of the i-th item in lst
        firsts.append(name)
    return firsts


    def tup_to_dict(lst):
    """Takes in a list of 2-item tuples using a while loop and returns a dictionary with the items
    as key-value pairs in the format {firstItem: secondItem, ...}
 
    >>> tup_to_dict(first_list)
    {"Fairy": "Godmother", "Prince": "Charming", "Princess": "Fiona"}
    """
    i, num_pairs, d = 0, len(lst), {}
    while i < num_pairs:
        pair = lst[i]
        first, second = pair[0], pair[1]
        d[first] = second
        i += 1
    return d

    # NOTE THE TEST MAY SAY "FAILS", BUT ITS JUST THAT ITS SINGLE QUOTES
    # INSTEAD OF DOUBLE QUOTES


def last_names(lst):
    """Takes in a list of people, with each person listed as a tuple, and returns
    a list of the first names of everyone in the list. The overall format of lst is:
    [(first1, last1, age1), (first2, last2, age2) ...]

    >>> last_names(first_list)
    ['Godmother', 'Charming', 'Fiona']
    >>> last_names(second_list)
    ['The Train', 'The Pooh', 'Bear', 'Mouse']
    """
    firsts = []
    for people in lst:
        name = people[1]
        firsts.append(name)
    return firsts


def zip_lists(lst1, lst2):
    """Takes 2 lists and puts them together as key value pairs of a dictionary.
    Dictionary structure should be: {i-th elem of lst1: i-th elem of lst2 ...}

    >>> zip_lists([1, 2, 3], ["one", "two", "three"])
    {1: 'one', 2: 'two', 3: 'three'}
    """
    if len(lst1) != len(lst2):
        return                  # this ensures that we have the same number of elements
    d = {}
    for i in range(len(lst1)):
        item1, item2 = lst1[i], lst2[i]
        d[item1] = item2
    return d


def unzip_dict(d):
    """Takes a dictionary and returns its key-value pairs stored as 2-item tuples
    within a list. Format of tuples should be (<key>, <value>)

    >>> unzip_dict({1: 'one', 2: 'two', 3: 'three'})
    [(1, 'one'), (2, 'two'), (3, 'three)]
    """
    lst = []
    for key in d.keys():
        val = d[key]
        tup = tuple((key, val))
        lst.append(tup)
    return lst

    ############################################################
    ######### if_problem.py PRACTICE PROBLEM SOLUTIONS #########
    ############################################################
    def divisors(x):
    """Iterate from zero to a given value (inclusive --meaning including
    the given value, remember that indexing usually is exclusive --stops
    at the num - 1), printing whether the current index is divisible by
    2, 3, or 5. If a number is only divisible by one of these, only print
    that. If it is divisible by all three options, print all three.
 
    >>> divisors(6)
    0 is divisible by 2, is divisible by 3, is divisible by 5,
    1
    2 is divisible by 2,
    3 is divisible by 3,
    4 is divisible by 2,
    5 is divisible by 5,
    6 is divisible by 2, is divisible by 3,
    """

    for i in range(0, x+1):
        diviStr = str(i)
        if (i % 2) == 0:
            diviStr += ' is divisible by 2,'
        if (i % 3) == 0:
            diviStr += ' is divisible by 3,'
        if (i % 5) == 0:
            diviStr += ' is divisible by 5,'
        print(diviStr)
 
def hailstone(x):
    """Begin at a given integer number. If it is even, divide by two.
    If the number is odd, multiply it by 3 and add 1. Continue this
    process until the number 1 is reached. Print the integer at each step.
 
    >>> hailstone(4)
    4
    2
    1
    >>> hailstone(3)
    3
    10
    5
    16
    8
    4
    2
    1
    """
 
    while x > 1:
        print(x)
        if x % 2 == 0:
            x = x//2
        else:
            x = 3 * x + 1    
    print(x)        

`}
        /> 
        */

export default PREPLesson6;
