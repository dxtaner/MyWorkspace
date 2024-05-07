class UI {
  addCourseToList(course) {
    const list = document.getElementById("course-list");

    var html = `
           <tr>
              <td><img src="img/${course.image}"/></td>
              <td>${course.title}</td>
              <td>${course.instructor}</td>
              <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
           </tr>    
      `;

    list.innerHTML += html;
  }

  clearControls() {
    document.getElementById("title").value = "";
    document.getElementById("instructor").value = "";
    document.getElementById("image").value = "";
  }

  deleteCourse(element) {
    if (element.classList.contains("delete")) {
      element.parentElement.parentElement.remove();
      return true;
    }
  }

  showAlert(message, className) {
    var alert = `
           <div class="alert alert-${className}">
              ${message}
           </div>    
          `;

    const row = document.querySelector(".row");
    row.insertAdjacentHTML("beforeBegin", alert);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

export default UI;
