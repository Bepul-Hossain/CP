
prevNode = null;
currentNode = {
    5,
    Next{
    6,
        Next{
        2,
            Null
    }
}
              }
nextNode = {
    6,
    Next{
    2,
        Null
}
           }
currentNode.next = Null
prevNode = {
    5,
    null
         }
currentNode = {
    6,
    Next{
    2,
        Null
}
            }

=========
nextNode = {
            2,
            Null
        }
currentNode.next = {
                    5,
                    null
                }
prevNode = {
            6,
            Next{
                5,
                Null
            }
        }
currentNode = {
    value: 2,
    next: Null
}

=========
nextNode = null
currentNode.next = {
                    6,
                    Next{
                        5,
                        Null
                    }
                }
prevNode = {
    value: 2,
    next: {
        6,
        Next{
            5,
            Null
        }
    }
}
currentNode = null
