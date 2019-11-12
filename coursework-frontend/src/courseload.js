class Courseload {
    constructor(courseloadJSON) {
        this.language = courseloadJSON.language
        this.framework = courseloadJSON.framework
        this.general = courseloadJSON.general
        this.link = courseloadJSON.link
    }
    render() {
        // return `<div class="card border-info mb-3" style="max-width: 18rem;">
        //           <h4 class="card-header">${this.language}</h4>
        //           <div class="card-body"> 
        //             <h5 class="card-title">${this.framework}</h5>
        //             <p class="card-text">${this.general}</p>
        //             <a href="#" class="btn btn-primary">${this.link}</a>
        //         </div>`

        return `<div class="card bg-light mb-3" style="max-width: 18rem;">
                  <div class="card-header">${this.language}</div>
                  <div class="card-body">
                    <h5 class="card-title">${this.framework}</h5>
                    <p class="card-text">${this.general}</p>
                    <a href="${this.link}" class="btn btn-primary">reference</a>
                  </div>
                </div>`

    }
}