function ChangeTab(target) {
  // Find each element that has the 'active' class and convert the collection to an array
  const elems = Array.from(document.getElementsByClassName('active'));

  // Start a forEach loop for every entry in the array
  elems.forEach((elem) => {
    elem.classList.remove('active');
  });

  // Add the 'active' class to the targetted element
  document.querySelector(target).classList.add('active');

  // Hide all divs except for the corresponding one
  const targetDiv = document.querySelector(target).getAttribute('href');
  const divsToHide = Array.from(document.getElementsByClassName('TextSection'));
  divsToHide.forEach((div) => {
    if (div.id !== targetDiv.substr(1)) {
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
  });
}