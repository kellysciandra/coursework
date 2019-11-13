const BASE_URL = "http://localhost:3000/api/v1"
const COURSELOAD_URL = `${BASE_URL}/courseloads`
const USERS_URL = `${BASE_URL}/users`
const SELECTS_URL = `${BASE_URL}/selects`
const courseloadCollection = document.querySelector('#courseload-collection')
const signupForm = document.getElementById('signup-form')
const signupInput = document.querySelectorAll('.signup-input')
// const welcomeLink = document.querySelectorAll('.welcome-link')
// const welcomeContainer = document.getElementById('welcome-container')
let currentUser



signupForm.addEventListener('submit', function (e) {
    e.preventDefault(e)
    fetch(USERS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: signupInput[0].value
            // email: signupInput[1].value,
            // password: signupInput[2].value
        })
    })
        .then(res => res.json())
        .then(function (object) {
            if (object.message) {
                alert(object.message)
            }
            else {
                loggedInUser(object)
            }
        }
        )
})

function loggedInUser(object) {
    currentUser = object
    signupForm.style.display = 'none'
    welcome.innerHTML = `<div id="welcome-container">
                            <h4>Hello, <i>${currentUser.name}</i>.</h4>
                             What would you like to do? <br>
                            <a href="" class="welcome-link"> Create a new Card </a> <br>
                            <a href="#" class="welcome-link"> View My Cards </a> <br>
                        </div>`
    // logout.innerText = "Logout"
    // Courseloads.addtoCourseload()
    Courseloads.courseloadForm()
}



