app.controller('ResultCtrl',function($scope,$location,$rootScope){
google.charts.load('current', {'packages':['corechart']});
    $scope.result=$rootScope.result; 
    $scope.CorrectAnswer=$rootScope.CorrectAnswer;
    $scope.user=$rootScope.User;
    for(var i=0;i< $scope.CorrectAnswer.length;i++)
        $scope.CorrectAnswer[i].yourResult=$scope.result[i].answers;
    
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        
        var coorectans=0;
        $scope.result.forEach(function(item){
            if(item.CorrectAnswer>0)
                coorectans++;
        })
        var data = google.visualization.arrayToDataTable([
          ['Task', 'question Correct Answer'],
          ['correct',     coorectans],
          ['wrong',      $scope.result.length-coorectans-1]
        ]);

        var options = {
          title: 'Total Correct Answer',
            is3D: true,
            width: '100%',
	        height: '100%', 
            chartArea: {
	            left: "0%",
	            top: "0%",
	            height: "100%",
	            width: "100%"
	        }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
});