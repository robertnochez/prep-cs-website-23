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
          slideSrc="https://docs.google.com/presentation/d/e/2PACX-1vRjODe7bzL9NYyw9p-EyNZJ6lFu4CV0gzFQS0vjxICy3aeVsvqIc3BsahWS3frP9-SPm_A5qMt_SARL/embed?start=false&loop=false&delayms=3000" 
          prevLesson={null}
          nextLesson=""
          videoSrc="https://www.youtube.com/embed/BKh9iRQQDxM"
          slideLink={`https://docs.google.com/presentation/d/1DyzrfbdbxW_4RtJQ1B48QXbIDuxh0fkmVJSJzgY2SBk/edit?usp=sharing`}
          lessonDownload="./prepDownloads/prep_lesson6.zip"
        >
          
          <Header as={"h3"}>Practice Problem Solutions:</Header>
      
          <CodeBlock code={`
##############################################
######### PRACTICE PROBLEM SOLUTIONS #########
##############################################


def first_names_for(lst):
    """Takes in a list of people, with each person listed as a tuple, and returns
    a list of the first names of everyone in the list. The overall format of lst is:
    [(first1, last1, age1), (first2, last2, age2) ...]

    >>> first_names(first_list)
    ['Fairy', 'Prince', 'Princess']
    >>> first_names(second_list)
    ['Tomas', 'Winnie', 'Oski', 'Mickey']
    """
    firsts = []
    for people in lst:
        name = people[0]  # access the first element of the i-th item in lst
        firsts.append(name)
    return firsts


def tup_to_dict_for(lst):
    """Takes in a list of 2-item tuples and returns a dictionary with the items
    as key-value pairs in the format {firstItem: secondItem, ...}

    >>> tup_to_dict_for(first_list) 
    {"Fairy": "Godmother", "Prince": "Charming", "Princess": "Fiona"}
    """
    d = {}
    for tup in lst:
        first, second = tup[0], tup[1]
        d[first] = second
    return d

    # NOTE THE TEST WILL SAY THIS FAILS, BUT ITS JUST THAT ITS SINGLE QUOTES
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

`} />
        </PREPLesson>
      
      </>
    )
}

export default PREPLesson6;
