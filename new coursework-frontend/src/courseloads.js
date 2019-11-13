class Courseloads {
    constructor(courseload) {
        this.language = courseload.language;
        this.framework = courseload.framework;
        this.general = courseload.general;
        this.link = courseload.link;

    }

    render() {
        return `<div contenteditable="true" class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${this.language}</div>
        <div class="card-body">
          <h5 class="card-title">${this.framework}</h5>
          <p class="card-text">${this.general}</p>
          <a contenteditable="false" href="${this.link}" class="btn btn-primary">reference</a>
          <a href="#" id="btn btn-secondary">edit</a>
        </div>
      </div>`
    }

    static postToCourseload() {

        const courseloadForm = document.getElementById('new-courseload')
        // const formInput = document.querySelectorAll('.form-control')
        const language = document.getElementById('language-input')
        const framework = document.getElementById('framework-input')
        const general = document.getElementById('general-input')
        const link = document.getElementById('link-input')


        courseloadForm.addEventListener('submit', function (e) {
            e.preventDefault(e)

            fetch(`${COURSELOAD_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    language: language.value,
                    framework: framework.value,
                    general: general.value,
                    link: link.value
                })
            })
                .then(res => console.log(res.json()))

        })

    }


    static putCourseloadsOnDom(courseloadArray) {
        const courseloads = []
        const courseloadCollection = document.getElementById('courseload-collection')
        // console.log(courseloadArray)
        // console.log(courseloads)
        courseloadArray.forEach(courseload => {
            courseloadCollection.innerHTML += new Courseloads(courseload).render()
        })
        this.postToCourseload()
    }


    static fetchCourseloads() {
        fetch(`${COURSELOAD_URL}`)
            .then(res => res.json())
            .then(courseloads => this.putCourseloadsOnDom(courseloads))
    }


    static courseloadForm() {
        courseloadCollection.innerHTML = `<div id="new-courseload">
                                        <form>
                                        <div class="new-courseload">
                <label>Language</label>
                <input type="text" class="form-control" id="language-input" value="" placeholder="Language"><br>

                <label>Framework</label>
                <input type="text" class="form-control" id="framework-input" value="" placeholder="Framework"><br>
                
                <label>General</label>
                <input type="text" class="form-control" id="general-input" value="" placeholder="General"><br>
                
                <label>Link</label>
                <input type="text" class="form-control" id="link-input" value="" placeholder="Link"><br>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form><br>
    
    </div>`
        this.fetchCourseloads()
    }

}













    // async postCourseload() {
    //     const res = await fetch(`${COURSELOAD_URL}`, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify({

    //             language: document.querySelectorAll('.form-control')[0].value,
    //             framework: document.querySelectorAll('.form-control')[1].value,
    //             general: document.querySelectorAll('.form-control')[2].value,
    //             link: document.querySelectorAll('.form-control')[3].value,
    //         })
    //     })
    //     return await res.json()
    // }