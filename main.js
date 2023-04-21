const backButton = document.querySelector('.back-button');
const body = document.querySelector('body');

backButton.addEventListener('click', function() {
  body.classList.add('slide-left');
});
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // To get the values from the form fields
  const courseName = document.querySelector('#course-name').value;
  const creditHours = document.querySelector('#course-credit').value;
  const courseGrade = document.querySelector('#course-grade').value;

  // Create an object with the form data
  const course = {
    name: courseName,
    creditHours: creditHours,
    grade: courseGrade
  };

  // Save the object to a database or file
  //
  const courses = JSON.parse(localStorage.getItem('courses')) || [];
  courses.push(course);
  localStorage.setItem('courses', JSON.stringify(courses));
});
// Get the form element
var form = document.querySelector('form');

// Listen for the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form fields
  var courseName = form.elements['course-name'].value;
  var courseCredit = form.elements['course-credit'].value;
  var courseGrade = form.elements['course-grade'].value;

  // Create an object to store the form data
  var formData = {
    name: courseName,
    credit: courseCredit,
    grade: courseGrade
  };

  // Convert the object to a JSON string
  var formDataJson = JSON.stringify(formData);

  // Store the JSON string in local storage
  localStorage.setItem('formData', formDataJson);

  // Redirect to the next page
  window.location.href = 'next-page.html';
});
