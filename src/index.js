document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const ul = document.getElementById("tasks")

  function createLi(input) {
    let li = document.createElement("li")
    li.innerText = input

    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    li.append(deleteButton)

    deleteButton.addEventListener("click", function(event2) {
      let delBtn = event2.target
      let targetLi = delBtn.parentNode
      targetLi.remove()
    })
    return li
  }
  
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    let input = document.getElementById("new-task-description").value
      //event.target['new-task-description'].value

    let priority = document.getElementsByTagName("select")[0]  
    let priorityText = priority.value
    let color = getColor(priorityText)

    let li = createLi(input)
    li.style.color = color 

    ul.append(li)
  })

  function getColor(priority) {
    switch (priority) {
      case "high":
        return "red"
      case "medium":
        return "yellow"
      case "low":
        return "green"   
    }
  }
});
  