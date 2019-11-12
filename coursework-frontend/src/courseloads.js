class Courseloads {
    constructor() {
        this.courseloads = []
        this.adapter = new CourseloadsAdapter()
        this.initBindingsAndEventListeners()
        // this.fetchAndLoadCourseloads()
    }

    initBindingsAndEventListeners() {
        this.courseloadContainer = document.getElementById('courseload-container')
        this.formInput = document.getElementById('language-input')
        this.courseloadForm = document.getElementById('new-courseload')
        this.courseloadForm.addEventListener('submit', this.createCourseload.bind(this))
        this.courseloadForm.addEventListener('submit', this.LoadCourseloads.bind(this))
    }

    createCourseload(e) {
        e.preventDefault()
        const input = this.formInput.input

        this.adapter.createCourseload(input).then(courseload => {
            this.courseloads.push(new Courseload(courseload))
            this.formInput.input = ""
            this.render()
        })
    }

    LoadCourseloads() {
        this.adapter
            .getCourseloads()
            .then(courseloads => {
                courseloads.forEach(courseload => this.courseloads.push(new Courseload(courseload)))
            })
            .then(() => {
                this.render()
            })
        console.log(this)
    }

    render() {
        const courseloadsContainer = document.getElementById('courseload-container')
        courseloadsContainer.innerHTML = this.courseloads.map(courseload => courseload.render()).join('')
    }


}