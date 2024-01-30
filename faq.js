function elb(a,b) {
    const questionElement = document.getElementById(a);
    const data = document.getElementById(b);
    if (questionElement.style.display === 'none') {
      questionElement.style.display = 'block';
      data.setAttribute('src', 'assets/images/icon-minus.svg');
    } else {
      questionElement.style.display = 'none';
      data.setAttribute('src', 'assets/images/icon-plus.svg');
      cc=true;
    }
  }
  