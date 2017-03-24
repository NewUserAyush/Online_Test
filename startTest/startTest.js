app.controller('StartTestCtrl',function($scope,$location,$rootScope){
    
    
    var self = this;
    $scope.result = [];
    
     self.correctanswer = [
    {
      'question':'Which one of the below is not divide and conquer approach?',
      'answers': ['Heap Sort']
    },
    {
      'question':'What data structure is used for breadth first traversal of a graph?',
      'answers': ['queue']
    },
    {
      'question':'Maximum degree of any vertex in a simple graph of vertices n is?',
      'answers': ['n - 1']
    },
    {
      'question':'What is minispec?',
      'answers': ['It is a step-by-step description of how an operation transforms its inputs to outputs', 'Calls to other operations may be included in minispec']
    },
    {
      'question':'What are Abstract Data Type?',
      'answers': ['They are a set of values and operations for manipulating those values', 'Arrays, stacks, queues,lists, and trees are all examples of abstract data types']
    }
     ];
    
    self.Data = [
    {
      'question':'Which one of the below is not divide and conquer approach?',
      'answers': ['Cooley-Tukey fast Fourier transform', 'Euclidean algorithm to compute the greatest common divisor','Quick Sort','Heap Sort'],
      'isMultipleType': false,
      'selectedbox':[]
    },
    {
      'question':'What data structure is used for breadth first traversal of a graph?',
      'answers': ['queue','stack','list','none of the above'],
      'isMultipleType': false,
      'selectedbox':[]
    },
    {
      'question':'Maximum degree of any vertex in a simple graph of vertices n is?',
      'answers': ['2n - 1', 'n', 'n + 1','n - 1'],
      'isMultipleType': false,
      'selectedbox':[]
    },
    {
      'question':'What is minispec?',
      'answers': ['It is a step-by-step description of how an operation transforms its inputs to outputs', 'Calls to other operations may be included in minispec', 'They are more often written in a programming language','other'],
      'isMultipleType': true,
      'selectedbox':[]
    },
    {
      'question':'What are Abstract Data Type?',
      'answers': ['They are a set of values and operations for manipulating those values', 'They are a scheme for storing values in computer memory', 'Arrays, stacks, queues,lists, and trees are all examples of abstract data types','other'],
      'isMultipleType': true,
      'selectedbox':[]
    }];
    
    
  $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };
    
  $scope.toggle = function (item, qAList) {
      
      if(qAList.selectedbox.indexOf(item)===-1)
          qAList.selectedbox.push(item);
  };
    
  $scope.next=function(qAList){
       
      var isupdate=false;
          var updatedata;
          $scope.result.find(function(item){
              if(item.question===qAList.question)
                {isupdate=true;updatedata=item;}
          });

      
      if(qAList.selectedRadio!==undefined)
        {
            if(isupdate)
             updatedata.answers=qAList.answers[qAList.selectedRadio];
          else 
              $scope.result.push({'question':qAList.question,'answers':[qAList.answers[qAList.selectedRadio]]});
            
        }else{
    
         
          if(isupdate)
             updatedata.answers=qAList.selectedbox;
          else 
              $scope.result.push({'question':qAList.question,'answers':qAList.selectedbox});
        
        }
  }
  
  $scope.submit=function(){
      
     for(var i=0;i<$scope.result.length;i++)
      $scope.result[i].CorrectAnswer=matchanswer($scope.result[i].answers, self.correctanswer[i].answers);
      $rootScope.result=$scope.result;
      $rootScope.CorrectAnswer=self.correctanswer;
      $location.path('/Result');
  }
  
  function matchanswer(list1,list2){
      var count=0;
      list1.sort();list2.sort();
    for(var i=0;i<list1.length || i<list2.length;i++)
        if(list1[i]===list2[i])
            count++;
      return count;
  }
  
});