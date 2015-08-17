$(document).ready(function(){

//form submit- stops page from refreshing


var $form = $('#EmployeeInfo');
var $FirstName = $('#FirstName');
var $LastName = $('#LastName');
var $JobTitle = $('#JobTitle');
var $EmployeeNumber = $('#EmployeeNumber');
var $Salary = $('#Salary');
var $Employees = $('#Employees');


//do for all of them


$form.on('submit', function(e){
	var $ReviewScore = $('input:radio[name=ReviewScore]:checked');
	e.preventDefault();
	var employee = new Employee(
		$FirstName.val(),
		$LastName.val(),
		$JobTitle.val(),
		$EmployeeNumber.val(),
		$Salary.val(),
		$ReviewScore.val()
	 );
      appendEmployee(employee);
});


//constructor for employee (hey this one I could do on my own!!!)

var Employee = function(firstName, lastName, jobTitle, employeeNumber, salary, reviewScore) {

		this.firstName = firstName;
		this.lastName = lastName;
		this.jobTitle = jobTitle;
		this.employeeNumber = employeeNumber;
		this.salary = salary;
		this.reviewScore = reviewScore;
	}
		

//function to append employees

function appendEmployee(emp){
	var $li = $('<li>');
	$li.attr('class', 'score' + emp.reviewScore);
	$li.text(
		emp.firstName + ' ' + emp.lastName + ', '+ 
		emp.jobTitle + ', ' +  
		emp.employeeNumber + ', ' + 
		emp.salary + ', ' + 
		emp.reviewScore + '     ');


var $button = $('<button>');
$button.text('Remove');
$button.attr('class', 'js-delete'); 
 
   $li.append($button); // getting an Uncaught ReferenceError: $li is not defined
 
    $Employees.append($li);
};


//function to delete employees

$Employees.on('click', '.js-delete', function(e){  
//getting an Uncaught ReferenceError: $Employees is not defined
	e.preventDefault();
	$(this).parent().remove();
});

  })






